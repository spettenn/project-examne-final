import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../../src/components/stuff/product_response'
import { STRAPI_API } from './consts'
import Link from "next/link"
import Nav from '../../src/components/navigation/navigation';
import Image from 'next/image';
//import liveSearch from '../../src/components/products/liveSearch';

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<main>
			<Nav />
			<div>
				<h2>Hello there</h2>
			</div>
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
	<div key={product.id} className="card">
	<Link href={`/products/${product.id}`}><a>
  <div className="content">
    <div className="front">
	{product.attributes.name}
	{product.attributes.dimensjoner}
    </div>
    <div className="back">
	<h3 className="card_title">
		{product.attributes.name}
										</h3>
										<p className='card_dimensions'>{product.attributes.dimensjoner}</p>

    </div>
  </div>
  </a>
  </Link>
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

{/* 		<section className='back'>
								<h3 className='card_title_flipped'>
									{product.attributes.name}
								</h3>
								<p className='card_dimensions_flipped'>
									{product.attributes.dimensjoner}
								</p> */}
							
						{/* </section> */}