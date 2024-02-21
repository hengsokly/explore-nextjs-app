import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import khmerImage from "@/public/images/khmer.png";
import pixabay from "@/public/images/pixabay.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello </h1>
      {/* <Image src={"https://bit.ly/react-cover"} alt="KM flag" fill className="object-cover" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <Image src={pixabay} alt="KM flag"/>
    </main>
  );
}
