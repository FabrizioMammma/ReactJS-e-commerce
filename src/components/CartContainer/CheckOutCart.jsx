import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckOutForm";


function CheckoutCart({ cart, total }) {

  const navigateTo = useNavigate();

  async function handleCheckoutCart(buyerData) {
    const orderData = {
      buyer: buyerData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);

    navigateTo(`/checkout/${id}`)
  }

  return (
    <div>
      <CheckoutForm onSubmit={handleCheckoutCart} />
    </div>
  )

}

export default CheckoutCart;