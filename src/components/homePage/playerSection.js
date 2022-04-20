import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

const cardContainer = {
	display: 'flex',
	flexDirection: 'column',
};
const cardHome = {
	width: '90%',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '10px',
	margin: '',
};
const cardNett = {
	width: '80%',
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '10px',
	margin: '',
};
const cardButton = {
	color: '#70BF48',
	backgroundColor: 'white',
	textAlign: 'center',
	cursor: 'pointer',
	border: '1px solid #70BF48',
	minWidth: '50px',
	borderRadius: '2px',
	padding: '10px',
};
const cardText = {
	fontSize: '20px',
};
const titles = {
	fontSize: '36px',
	color: '#2F4858',
	textAlign: 'center',
};
const nettStyle = {
	display: 'flex',
	flexDirection: 'row',
};

const PlayerSection = () => (
	<section
		style={{
			display: 'flex',
			flexDirection: 'column',
			minWidth: '100vh',
		}}>
		<h2 style={titles}>For Spillere</h2>
		<div style={cardContainer}>
			<div style={cardHome}>
				<h3 style={titles}>LG50 “Hagemålet”</h3>
				<p style={cardText}>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG50 Original er et norsk designet produkt som passer
					perfekt for fotballspill i hagen, på løkka, eller på treningsfeltet
					for de yngste.
				</p>
				<p style={{ color: '#595252' }}>B x H= 120 x 75 cm </p>
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
				<h3 style={titles}>LG100</h3>
				<p style={cardText}>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG100 Original er et norsk designet produkt som passer
					perfekt til fotballklubber som ønsker å benytte seg av
					småmål/småspill.
				</p>
				<p style={{ color: '#595252' }}>B x H= 150 x 95 cm</p>
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
			<div></div>
			<div>
				<h3 style={titles}>Nett</h3>
				<p>
					På tide å bytte nett? Vi tilbyr nett i ulike farger med eller uten
					logo
				</p>
				<div>
					<div style={nettStyle}>
						<FontAwesomeIcon icon={faMobileScreenButton} />
						<p>Fredrik@funtoplay.no</p>
					</div>
					<div style={nettStyle}>
						<FontAwesomeIcon icon={faCartShopping} />
						<p>Se våre priser & sortement</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
export default PlayerSection;
