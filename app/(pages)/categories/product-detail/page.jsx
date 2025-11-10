import { Container } from "@/components/Contaner";
import ProductDetail from "@/components/ProductDetail";
import { AppleCardsCarouselDemo } from "@/components/ShowCase";

export default function CartPage() {
  const productData = {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    description: "Premium quality cotton t-shirt with a comfortable fit.",
    images: [
      "/1.jpg",
      "/2.jpg", 
      "/3.jpg",
      "/4.jpg"
    ],
    colors: ["#000000", "#FF0000", "#0000FF", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    features: [
      "100% Premium Cotton",
      "Machine Washable",
      "Breathable Fabric"
    ],
    reviews: [
      {
        author: "John Doe",
        rating: 5,
        text: "Great quality and perfect fit!",
        date: "2024-01-15"
      }
    ]
  };

  return (
    <>
      <ProductDetail product={productData} />
      <Container />
      <AppleCardsCarouselDemo />
    </>
  );
}