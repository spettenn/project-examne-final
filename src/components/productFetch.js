/*import axios from 'axios';

axios.get('http://localhost:1337/api/products').then((response) => {
	console.log(response.data.data);
});
console.log(response);

const Product = ({ products, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<ul>
			<li key={products.id}>{products.name}</li>
		</ul>
	);
};

Product.getInitialProps = async (ctx) => {
	try {
		const res = await axios.get('http://localhost:1337/api/products');
		const products = res.data;
		return { products };
	} catch (error) {
		return { error };
	}
};

export default Product;*/

export default class StrapiProducts {
	constructor() {}

	async fetchApi(path) {
		const request = `${process.env.STRAPI_API_URL}${path}`;
		const response = await fetch(request);
		const data = await response.json();
		return data;
	}
}
