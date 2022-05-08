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
