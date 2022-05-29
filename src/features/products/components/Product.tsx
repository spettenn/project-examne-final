import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { environment } from "../../../environment/environment";
import { Link } from "react-router-dom";
import Image from "next/image";

const Product: FC<{ product: any }> = ({ product }) => {
  const { STRAPI_API } = environment;
  const {
    id,
    price,
    detials,
    attributes: { name: attributeName, dimensjoner, image },
  } = product;

  const { url } = image.data.attributes;
  const imageSource = `STRAPI_API${url}`;


  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <Image src={imageSource} width={400} height={400} className="card_image" alt="product image" />
          </div>
          <div className="text_card_front">
            <p className="product_card_name">{attributeName}</p>
            <p className="product_card_dimensions">{dimensjoner}</p>
            <Link to={`/products/${id}`}>
              <a className="more_info_mobile">Mere informasjon</a>
            </Link>
            <button
              className="snipcart-add-item"
              id="cart_button_mobile"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`/products/${id}`}
              data-item-image={imageSource}
              data-item-name={attributeName}
            >
              Legg til
            </button>
          </div>
        </div>
        <div className="flip-card-back">
          <h1 className="card_title_flipped">{attributeName}</h1>
          <p className="text_card_back_top">{dimensjoner}</p>
          <Link to={`/products/${id}`}>
            <a className="card_more_info">Mere informasjon</a>
          </Link>
          <p className="product_card_img">{detials}</p>
          <div className="bottom_card_div">
            <p className="">{price},- kr</p>
            <button
              className="snipcart-add-item"
              id="cart_button"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`/products/${product.id}`}
              data-item-image={imageSource}
              data-item-name={attributeName}
            >
              Legg til
              <FontAwesomeIcon className="cart_card" icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
