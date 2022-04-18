import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const cardHome = {
	width: '49%',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '10px',
};
const cardNett = {
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'white',
	boxShadow: '1px 3px 2px 0px rgba(183,199,75,0.75)',
	border: '1px solid #8C8C8C',
	borderRadius: '3px',
	padding: '10px',
};
const cardButton = {
	color: 'white',
	backgroundColor: '#70BF48',
	textAlign: 'center',
	cursor: 'pointer',
	border: 'none',
	minWidth: '50px',
	borderRadius: '2px',
	padding: '10px',
};

const PlayerSection = () => (
	<section
		style={{
			display: 'flex',
			flexDirection: 'column',
			minWidth: '100vh',
		}}>
		<h2 style={{ color: '#2F4858', textAlign: 'center' }}>For Spillere</h2>
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
			<div style={cardHome}>
				<h3 style={{ color: '#2F4858', textAlign: 'center' }}>
					LG50 “Hagemålet”
				</h3>
				<p>
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
				<h3 style={{ color: '#2F4858', textAlign: 'center' }}>LG100</h3>
				<p>
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
				<h3 style={{ color: '#2F4858', textAlign: 'center' }}>LG100</h3>
				<p>
					På tide å bytte nett? Vi tilbyr nett i ulike farger med eller uten
					logo
				</p>
				<div>
					<div>
						<AccessAlarm />
						<p>Fredrik@funtoplay.no</p>
					</div>

					<p>Se våre priser & sortement</p>
				</div>
			</div>
		</div>
	</section>
);
export default PlayerSection;
