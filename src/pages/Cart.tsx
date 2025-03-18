import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2 border-b">
            <p>{item.title}</p>
            <p>${item.price}</p>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;