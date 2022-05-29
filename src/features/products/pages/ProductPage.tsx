import type { InferGetStaticPropsType } from "next";
import Nav from "../../../shared/components/navigation";
import { environment } from "../../../environment/environment";
import Product from "../components/Product";
import {  ProductResponseData } from "../../../types";
import { Response } from "../../../types/response.models";
import { useEffect, useState } from "react";


const useProducts = () => {
  const { STRAPI_API } = environment;
  const [products, setProducts] = useState(null)

  useEffect(() => {

    const { STRAPI_API } = environment;

    const fetchProduct = async () => {
      const response = await fetch(`${STRAPI_API}/api/products?populate=*`);

      if (!response.ok) {
        throw new Error(await response.text());
      }
    
      const { data: products }: Response<ProductResponseData[]> = await response.json();
        setProducts(products);
   }

   fetchProduct();
  }, [STRAPI_API]);

  return [products, setProducts]
}

const filterProducts = (event: any, products: ProductResponseData[]) => {
  const { value: filterTerm } = event.target;
  return products.filter(
    ({ id, attributes: { name, description, info, price } }) =>
      String(id).includes(filterTerm) ||
      name.toLowerCase().includes(filterTerm) ||
      description.toLowerCase().includes(filterTerm) ||
      info.toLowerCase().includes(filterTerm) ||
      price.toLowerCase().includes(filterTerm)
  );
};

const ProductPage = () => {
  const [products] = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const handleInputChange = (event: any) => setFilteredProducts(filterProducts(event, products));

  return (
    <main className="Products_page">
      <Nav />
      <input type="search" onChange={handleInputChange} id="searchbox" placeholder="Søk etter produkt" />
      <div className="product_layout">
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}


export default ProductPage;
