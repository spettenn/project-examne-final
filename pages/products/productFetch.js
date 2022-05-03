import axios from 'axios';

axios.get('http://localhost:1337/api/products').then((response) => {
	console.log(response.data.data);
	const data = response.data.data;
	console.log(data);
});

const Product = ({ products, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<ul>
			{products?.map((product) => (
				<li key={products.id}>{products.name}</li>
			))}
		</ul>
	);
};

Product.getInitialProps = async (ctx) => {
	try {
		const res = await axios.get('http://localhost:1337/api/products');
		const products = res.data.data;
		return { products };
	} catch (error) {
		return { error };
	}
};

export default Product;

/*
export const getStaticProps = async () => {
	const res = await fetch('http://localhost:1337/api/products');
	const data = await res.json();

	return {
		props: {
			product: data,
		},
	};
};
const Products = ({ product }) => {
	return (
		<div>
			<h1>products</h1>
			{product.map((product) => (
				<div key={product.id}>
					<a>
						<h3>{product.name}</h3>
					</a>
				</div>
			))}
		</div>
	);
};
export default Products;*/
