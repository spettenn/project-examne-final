import Head from 'next/head';
import Nav from '../src/components/navigation/navigation';
import Product from './products/productFetch.js';

const product_layout = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	backgroundColor: '#ECECEC',
	minHeight: '100vh',
};

export default function ProductsAPI() {
	return (
		<div>
			<Head>
				<title>våre produkter</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<Nav />
			<main style={product_layout}>
				<h1>Products</h1>
				<Product />
			</main>
		</div>
	);
}
