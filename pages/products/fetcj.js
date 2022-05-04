/*
const Product = ({ products, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<ul>
			{products?.map((products) => (
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

export default Product;*/
/*
export const getStaticProps = async () => {
	const res = await fetch('http://localhost:1337/api/products');
	const data = await res.json();
	console.log(data);
	return {
		props: {
			product: data.data,
		},
	};
};
const Products = ({ product }) => {
	return (
		<div>
			<h1>products</h1>

			<div key={product.id}>
				<a>
					<h3>{product.name}</h3>
				</a>
			</div>
		</div>
	);
};
export default Products;

import axios from 'axios';

const Tasks = ({ tasks }) => {
	return (
		<ul>{tasks && tasks.map((task) => <li key={task.id}>{task.name}</li>)}</ul>
	);
};

export async function getStaticProps() {
	const res = await axios.get('http://localhost:1337/api/products');
	const data = await res.data;

	if (!data) {
		return {
			notFound: true,
		};
	} else {
		console.log(data);
	}

	return {
		props: { tasks: data },
	};
}

export default Tasks;
*/
