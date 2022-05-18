import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { STRAPI_API } from './consts'
import { ProductResponse } from '../../src/components/stuff/response'
import logo from '../../public/localmedia/logo_dark.png'
import Nav from '../../src/components/navigation/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <div className='id_page_layout'>
		<div className='nav_details'>
			<Link href="/products">
				<a className='tilbake_detials'>Tilbake</a>
				</Link>
			<Image src={logo} width={400} height={100} alt="logo" />
			
		</div>
		<div className='detials_layout_container'>
		<div className='img_container'>
		<Image src={STRAPI_API + product.data.attributes.image.data.attributes.formats.thumbnail.url} width={400} height={400} alt="logo" />
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
                //data-item-image={product.image.url}
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












/*

export default function Products({ product }) {
	return (
		<div>
			<h1>{product.name}</h1>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const results = await fetch('http://localhost:1337/api/products/').then((r) =>
		r.json()
	);
	return {
		props: {
			products: results[0],
		},
	};
}

export async function getStaticPaths() {
	const products = await fetch('http://localhost:1337/api/products').then((r) =>
		r.json()
	);
	return {
		paths: products.map((product) => {
			return {
				params: {
					id: product.id,
				},
			};
		}),
		fallback: false,
	};
}
*/