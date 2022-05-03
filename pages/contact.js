import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AnImage from '../public/localmedia/footerImage.png';

const contact_layout = {
	minHeight: '100vh',
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
};
const contact_left_container = {};
const contact_form_container = {
	width: '100%',
};
const contact_title = {
	textAlign: 'center',
	Color: 'white',
};

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact us</title>
				<meta name='description' content='Generated by create next app' />
			</Head>

			<main style={contact_layout}>
				<div
					style={{
						width: '100%',
						display: 'flex',
					}}>
					<div
						className='contact_left_container'
						style={contact_left_container}>
						<Link href='/'>
							<a className='tilbake'>
								<FontAwesomeIcon className='tilbake_icon' icon={faArrowLeft} />
								Tilbake
							</a>
						</Link>
						<div className='contact_image_container'>
							<Image
								src={AnImage}
								className='contact_image'
								alt='tripple A rated business'
							/>
						</div>
						<p className='contact_side_text'>
							Gjør det du vil,
							<br /> hvor du vil,
							<br /> når du vil.
							<br /> - Fredrik Finstad
						</p>
					</div>
					<div className='contact_right_container'>
						<h2 className='contact_title'>Kontakt oss</h2>
					</div>
				</div>
			</main>
		</div>
	);
}
