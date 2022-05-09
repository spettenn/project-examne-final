import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { STRAPI_API } from './consts'
import { ProductResponse } from '../../src/components/stuff/response'
import Nav from '../../src/components/navigation/navigation'

export default function Product({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div className=''>
    
	  <div className='#'>
		  <h2 className='#'>{product.data.attributes.name}</h2>
	  </div>
        
    <footer>This is Foot</footer>
   
  </div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id as string

  if (!id) {
    throw new Error('Id is undefined.')
  }

  const response = await fetch(`${STRAPI_API}/api/products/${id}`)

	if (!response.ok) {
	  console.log(`${STRAPI_API}/api/products/${id}`)
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