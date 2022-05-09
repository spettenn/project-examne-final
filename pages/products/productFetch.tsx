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
