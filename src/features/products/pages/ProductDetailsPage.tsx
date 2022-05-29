import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { environment } from "../../../environment/environment";
import Nav from "../../../shared/components/navigation";
import { ProductResponseData } from "../../../types/products.models";
import { Response } from "../../../types/response.models";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProduct = (productId: string) => {
  const { STRAPI_API } = environment;
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (!productId) {
      throw new Error("Id is undefined.");
    }

    const fetchProduct = async () => {
      const response = await fetch(`${STRAPI_API}/api/products/${productId}/?populate=*`).then(
        (response) => response,
        (error) => {
          throw new Error("Could not fetch product.");
        })

        if (!response.ok) {
          console.log(`${STRAPI_API}/api/products/${productId}/?populate=*`);
          throw new Error(await response.text());
        }
        const { data: product }: Response<ProductResponseData> = await response.json();
        setProduct(product);
   }

   fetchProduct();
  }, [productId, STRAPI_API]);

  return [product, setProduct]
}

const ProductDetailsPage: FC = () => {
  const { id: productId } = useParams();
  const [product] = useProduct(productId)


  const {
    attributes: { image, name, price, detials, dimensjoner, info },
    id,
  } = product;
  const { url } = image.data.attributes;
  const imageSource = `STRAPI_API${url}`;

  return (
    <div className="id_page_layout">
      <Nav />
      <div className="detials_layout_container">
        <div className="img_container">
          <Image className="product_img" src={imageSource} width={400} height={400} alt="product card" />
        </div>
        <div className="detials_outer_container">
          <div className="detials_container">
            <h2 className="detials_title">{name}</h2>
            <p>{price},- kr</p>
            <p>{detials}</p>
            <p className="dimensjoner_detials">{dimensjoner}</p>
          </div>
          <button
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url={`/products/${id}`}
            data-item-image={imageSource}
            data-item-name={name}
          >
            Legg til i kurv
          </button>
        </div>
      </div>
      <div className="detials_info_section">
        <h4 className="detials_info_title">Litt mere informasjon om målet:</h4>
        <p className="detials_info_text">{info}</p>
      </div>
    </div>
  );
};



export default ProductDetailsPage;
