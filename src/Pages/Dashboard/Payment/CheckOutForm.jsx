import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ cart, price }) => {
    const stripe=useStripe();
    const elements=useElements();
    const {user}=useAuth()
    const [axiosSecure]=useAxiosSecure();
    const [cardError,setCardError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransactionId]=useState('');
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
            // console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret);
        })
    },[price,axiosSecure])



    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card=elements.getElement(CardElement);
        if(card===null){
            return
        }
        console.log("card",card)

        const {error, paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log("error", error)
            setCardError(error)
        }else{
            setCardError('')
            console.log('payment method',paymentMethod)
           
        }

        setProcessing(true)

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'unknown',
                  name:user?.displayName || 'unknown'
                },
              },
            },
          );

            if(confirmError){
                console.log(confirmError)
                // setCardError()
            }
            console.log(paymentIntent)
            setProcessing(false)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                // save payment information to the server
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price,
                    // quantity: cart?.length,
                    cartItems: cart?.map(item => item?._id),
                    itemNames: cart?.map(item => item?.name)
                }
                axiosSecure.post('/payments', payment)
                    .then(res => {
                        console.log('payment ',res.data);
                        // if (res.data.result.insertedId) {
                            
                        // }
                    })
            }
    }
    return (
      < >
        <form onSubmit={handleSubmit}className="w-2/3 m-8" >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn  btn-primary mt-4 btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
        {cardError && 
        <p className="text-red-600 ml-10" >{cardError.message}</p>
        }
        {transactionId && <p className="text-green-500">Transaction complete with TransactionID: {transactionId}</p>}
      </>
    );
};

export default CheckOutForm;