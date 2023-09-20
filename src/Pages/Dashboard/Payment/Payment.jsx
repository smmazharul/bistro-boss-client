import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";


//TODO: provide publishable key
const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div className="w-full">
            <SectionTitle heading={"Payment"} subHeading={'Please process'}></SectionTitle>
           <h1 className="text-3xl" >PAYMENT</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;