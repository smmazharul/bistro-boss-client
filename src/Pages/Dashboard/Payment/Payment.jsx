import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";


//TODO: provide publishable key
const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const [cart]=useCart();
    const total= cart.reduce((sum,item)=>sum+item.price,0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle heading={"Payment"} subHeading={'Please process'}></SectionTitle>
           <h1 className="text-3xl ml-10" >PAYMENT</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;