import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import cardImageOne from '../../../public/localmedia/LG50.jpg';
import cardImageTwo from '../../../public/localmedia/LG100.jpg';
import cardImageThree from '../../../public/localmedia/nett.jpg';
import {
	faCartShopping,
	faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

const cardContainer = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
};
const cardHome = {
	maxWidth: '450px',
	maxHeight: '35rem',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '1rem',
	margin: 'auto',
	marginRight: '0.5rem',
	marginLeft: '0.5rem',
	marginBottom: '1rem',
};
const cardNett = {
	maxWidth: '922px',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '30px',
	margin: 'auto',
	marginTop: '0rem',
};
const cardButton = {
	color: '#70BF48',
	backgroundColor: 'white',
	textAlign: 'center',
	cursor: 'pointer',
	border: '1px solid #70BF48',
	minWidth: '50px',
	borderRadius: '2px',
	padding: '5px',
	fontSize: '1.1rem',
};
const cardText = {
	fontSize: '1.2rem',
};
const goalSpec = {
	color: '#595252',
	fontSize: '1.5rem',
	fontWeight: 'light',
	marginLeft: '5%',
};
const titles = {
	fontSize: '36px',
	color: '#2F4858',
	textAlign: 'center',
	margin: '0%',
};

const PlayerSection = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			maxWidth: '70rem',
			justifyContent: 'center',
			paddingTop: '2rem',
			paddingBottom: '2rem',
		}}>
		<div
			style={{
				height: '4rem',
			}}>
			<h2 style={titles}>For Spillere</h2>
		</div>
		<div style={cardContainer}>
			<div style={cardHome}>
				<Image src={cardImageOne} alt='garde goal, fotball goal medium size' />
				<h3 style={titles}>LG50 “Hagemålet”</h3>
				<p style={cardText}>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG50 Original er et norsk designet produkt som passer
					perfekt for fotballspill i hagen, på løkka, eller på treningsfeltet
					for de yngste.
				</p>
				<p style={goalSpec}>B x H= 120 x 75 cm </p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<button style={cardButton}>Mere information</button>
					<buttin style={cardButton}>cart</buttin>
				</div>
			</div>
			<div style={cardHome}>
				<Image
					src={cardImageTwo}
					className='card_image_home'
					alt='garde goal, fotball goal large size'
				/>

				<h3 style={titles}>LG100</h3>
				<p style={cardText}>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG100 Original er et norsk designet produkt som passer
					perfekt til fotballklubber som ønsker å benytte seg av
					småmål/småspill.
				</p>
				<p style={goalSpec}>B x H= 150 x 95 cm</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<button style={cardButton}>Mere information</button>
					<buttin style={cardButton}>cart</buttin>
				</div>
			</div>
		</div>
		<div style={cardNett}>
			<div style={{ width: '50%' }}>
				<Image src={cardImageThree} alt='fotball nets / fotball nett' />
			</div>
			<div style={{ width: '50%' }}>
				<h3 style={titles}>Nett</h3>
				<p>
					På tide å bytte nett? Vi tilbyr nett i ulike farger med eller uten
					logo
				</p>
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							paddingTop: '1rem',
						}}>
						<FontAwesomeIcon icon={faMobileScreenButton} />
						<p>Fredrik@funtoplay.no</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faCartShopping} />
						<p>Se våre priser & sortement</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default PlayerSection;
