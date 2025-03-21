import { useQuery } from "@tanstack/react-query";
import { useCart } from "../context/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const ProductListing = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
  const { addToCart } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((product) => {
        // Convert Product to CartItem
        const handleAddToCart = () => {
          const cartItem: CartItem = {
            ...product,
            quantity: 1, // Ensure quantity is included
          };
          addToCart(cartItem);
        };

        return (
          <Card key={product.id}>
            <CardContent>
              <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.description.substring(0, 100)}...</p>
              <p className="font-semibold">${product.price}</p>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

const queryClient = new QueryClient();

export default function ProductListingWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListing />
    </QueryClientProvider>
  );
}
