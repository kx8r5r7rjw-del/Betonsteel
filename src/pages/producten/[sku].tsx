import { getProducts, Product } from '@/lib/products';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getProducts();
  const paths = products.map((product) => ({
    params: { sku: product.sku },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = getProducts();
  const product = products.find((p) => p.sku === params?.sku);
  return {
    props: {
      product,
    },
  };
};

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-600">{product.sku}</p>
      <p className="mt-4">{product.description}</p>
      <p className="font-bold text-2xl mt-4">€{product.price.toFixed(2)}</p>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Specificaties</h3>
        <ul>
          {Object.entries(product.attributes).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {Array.isArray(value) ? value.join('x') : value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
