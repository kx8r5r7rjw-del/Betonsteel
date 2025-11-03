import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface Product {
  name: string;
  sku: string;
  category: string;
  description: string;
  price: number;
  attributes: {
    diameter_mm?: number;
    mesh_size_mm?: number;
    dimensions_mm?: [number, number];
    length_m?: number;
    height_cm?: number;
  };
  filters: {
    name: string;
    value: string;
  }[];
}

export function getProducts(): Product[] {
  const filePath = path.join(process.cwd(), 'docs', 'product_catalogue.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as { products: Product[] };
  return data.products;
}
