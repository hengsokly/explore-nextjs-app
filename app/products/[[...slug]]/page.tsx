import { Metadata } from 'next';
import React from 'react'

interface Props {
    params: {
        slug: string[];
    };
    searchParams: {
      sortOrder: string;
    }

}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>
      Product Page:  {slug} {sortOrder}
    </div>
  )
}

export default ProductPage

// This is verify meta data to share our page on social media platforms
// To display any product detail
// Note: please check method name and make sure it is "generateMetadata"
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("/../..");
  
  return {
    title: 'product.title',
    description: 'product.descrtion'
  }
}