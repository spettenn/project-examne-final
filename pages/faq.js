import Head from 'next/head';
import Nav from '../src/components/navigation/navigation';

const faq_layout = {
	backgroundColor: '#ECECEC',
	display: 'flex',
	minHeight: '100vh',
};

export default function Faq() {
	return (
		<div>
			<Head>
				<title>bettingelser og spørsmål</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<Nav />
			<main style={faq_layout}>
				<h1>FAQ & sponsor</h1>
			</main>
		</div>
	);
}
