import { getProducts, Product } from '@/lib/products';
import Link from 'next/link';

export async function getStaticProps() {
  const products = getProducts();
  return {
    props: {
      products,
    },
  };
}

interface ProductenPageProps {
  products: Product[];
}

export default function ProductenPage({ products }: ProductenPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Onze Producten</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.sku} className="border p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold mt-2">€{product.price.toFixed(2)}</p>
            <Link href={`/producten/${product.sku}`} legacyBehavior>
              <a className="text-blue-500 mt-2 inline-block">Bekijk product</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
