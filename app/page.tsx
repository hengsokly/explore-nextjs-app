'use client';

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/authOption";
import { getServerSession } from "next-auth";
import khmerImage from "@/public/images/khmer.png";
import pixabay from "@/public/images/pixabay.jpg";
// import _ from 'lodash';
import { useState } from "react";

// // Lazy load component using dynamic function
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading.......</p>
// })

// Lazy load libray lodash

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false)
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello </h1>
      {/* Lazy load library */}
      <button onClick={async () => {
        const _ = (await import('lodash')).default;
        const users = [
          {name: "c"},
          {name: "b"},
          {name: "a"}
        ]

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
      }}> Click</button>
      
      
      {/* Not lazy load: Load libary */}
      {/* <button onClick={() => {
        const users = [
          {name: "c"},
          {name: "b"},
          {name: "a"}
        ]

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
      }}>Show</button> */}

      {/* lazy load heavy component  */}
      {/* <button onClick={() => setVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent></HeavyComponent> } */}
      {/* <Image src={"https://bit.ly/react-cover"} alt="KM flag" fill className="object-cover" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      {/* <Image src={pixabay} alt="KM flag"/> */}
    </main>
  );
}

