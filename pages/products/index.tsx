import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../../src/components/stuff/product_response'
import { STRAPI_API } from './consts'
import Link from "next/link"
import Nav from '../../src/components/navigation/navigation';
import Image from 'next/image';
//import liveSearch from '../../src/components/products/liveSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<main className='Products_page'>
			<Nav />
			<div>
			<input
							type="search"
							//onClick={() => liveSearch}
					id="searchbox"
					placeholder="Søk etter produkt"
				/>
				</div>
			<div className='product_layout'>
				{products.map((product) => {
					return (		
<div key={product.id} className="flip-card">

  <div className="flip-card-inner">
	<div className="flip-card-front">
	<div>
	<Image src={STRAPI_API + product.attributes.image.data.attributes.url} width={400} height={400} className="card_image" alt="product image" />
</div>
		<div className='text_card_front'>
		<p className='product_card_name'>{product.attributes.name}</p>
		<p className='product_card_dimensions'>{product.attributes.dimensjoner}</p>
		</div>
	  
    </div>
    <div className="flip-card-back">
      <h1 className='card_title_flipped'>{product.attributes.name}</h1> 
										<p className='text_card_back_top'>{product.attributes.dimensjoner}</p>
									<Link href={`/products/${product.id}`}><a className='card_more_info'>
										Mere informasjon
										</a>
  </Link>
									<p className='product_card_img'>{product.attributes.detials}</p>
									<div className='bottom_card_div'>
									<p className=''>{product.attributes.price},- kr</p>
									<button
											className="snipcart-add-item"
											id='cart_button'
                data-item-id={product.id}
                data-item-price={product.attributes.price}
                data-item-url={`/products/${product.id}`}
                data-item-image={STRAPI_API + product.attributes.image.data.attributes.url}
                data-item-name={product.attributes.name}
										>
											Legg til
                <FontAwesomeIcon
							className='cart_card'
							icon={faCartShopping}
						/>
										</button>
										</div>
    </div>
  </div>
  
</div>
					)
				})}
			</div>
		</main>
	)
};

export async function getStaticProps() {
		const response = await fetch(`${STRAPI_API}/api/products?populate=*`)

		if (!response.ok) {
			throw new Error(await response.text())
		}

		const products: ProductsResponse = await response.json()
		return {
			props: {
				products: products.data,
			},
		}
	}
;
