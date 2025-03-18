import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="w-16 border p-1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
              />
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;