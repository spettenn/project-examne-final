import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { STRAPI_API } from './consts'
import { ProductResponse } from '../../interface/product_response'
import logo from '../../public/localmedia/logo_dark.png'
import Nav from '../../src/components/navigation/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <div className='id_page_layout'>
		<Nav />
		<div className='detials_layout_container'>
		<div className='img_container'>
		<Image className='product_img' src={STRAPI_API + product.data.attributes.image.data.attributes.url} width={400} height={400} alt="product card" />
			</div> 
			<div className='detials_outer_container'>
	  <div className='detials_container'>
		  <h2 className='detials_title'>{product.data.attributes.name}</h2>
		  	<p>{product.data.attributes.price},- kr</p>
				<p>{product.data.attributes.detials}</p>
				<p className='dimensjoner_detials'>{product.data.attributes.dimensjoner}</p>
			</div>
			<button
                className="snipcart-add-item"
                data-item-id={product.data.id}
                data-item-price={product.data.attributes.price}
                data-item-url={`/products/${product.data.id}`}
                data-item-image={STRAPI_API + product.data.attributes.image.data.attributes.url}
                data-item-name={product.data.attributes.name}
              >
                Legg til i kurv
				</button>
				</div>
		</div>
		<div className='detials_info_section'>
			<h4 className='detials_info_title'>Litt mere informasjon om målet:</h4>
		<p className='detials_info_text'>{product.data.attributes.info}</p>
		</div>
		</div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id as string

  if (!id) {
    throw new Error('Id is undefined.')
  }

  const response = await fetch(`${STRAPI_API}/api/products/${id}/?populate=*`)

	if (!response.ok) {
	  console.log(`${STRAPI_API}/api/products/${id}/?populate=*`)
	  throw new Error(await response.text())
	  
  }

  const product: ProductResponse = await response.json()

	return {
		props: {
			product
		}
	}
}