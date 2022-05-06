import axios from 'axios';
export const base_url = 'http://localhost:1337/api/products';

const Product = ({ products, error }) => {
	console.log(products);
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<ul>
			{products?.map((product) => (
				<li key={product.id}>{product.attributes.name}</li>
			))}
		</ul>
	);
};

export default Product;

/*
import React, { useRef, useState } from 'react';

//axios.get('http://localhost:1337/api/products').then((response) => {
//	const data = response.data.data;
//	console.log(data);
//});

const Product = ({ products, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<ul>
			{products.length > 0 &&
				products?.map((product) => (
					<li key={product.id}>{product.attributes.name}</li>
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
};*/
