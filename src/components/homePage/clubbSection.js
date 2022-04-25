import Image from 'next/image';
import klubbBanner from '../../../public/localmedia/klubbGoals.png';
import clubCarImageOne from '../../../public/localmedia/pakke.png';
import clubCarImageTwo from '../../../public/localmedia/balkan.png';
import YoutubeEmbed from '../../modules/youTubeModal.js';

const clubCard = {
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '450px',
	backgroundColor: 'transparent',
	marginRight: '0.5rem',
	marginLeft: '0.5rem',
	padding: '1rem',

	maxWidth: '450px',
	marginBottom: '1rem',
};
const clubCardTitle = {
	color: 'white',
	fontSize: '2.1rem',
	fontFamily: 'roboto',
	textAlign: 'center',
};
const clubCardText = {
	color: 'white',
	fontSize: '1.2rem',
	fontFamily: 'roboto',
	textAlign: 'center',
};
const imageFit = {
	maxHeight: '2rem',
};
const inforBtn = {
	color: 'var(--main-color)',
	fontSize: '1.5rem',
	border: '1px solid',
	backgroundColor: 'transparent',
	borderRadius: '2px',
	cursor: 'pointer',
};

const ClubSection = () => (
	<section
		className='klubb_section'
		style={{
			paddingTop: '1rem',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}>
		<h1 style={{ textAlign: 'center', color: 'white', fontSize: '2rem' }}>
			For Klubbene
		</h1>
		<p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>
			Ta kontakt ved bestilling av en pakke med logo på nettene. Du kan velge
			mellom LG100 eller en kombinasjon av LG100/LG50. Ved kjøp av vanlig
			klubbpakke (LG100), er logonett inkludert i prisen! Ved kjøp av
			kombinasjons-pakke er nøytrale nett inkludert i prisen.
		</p>
		<div
			style={{
				minHeight: '3rem',
				backgroundColor: 'var(--main-color)',
				textAlign: 'center',
			}}>
			<p
				style={{
					fontSize: '1.1rem',
				}}>
				I sammarbeid med NFF “Utstyrsordningen”, kan klubben søke om å få igjen
				opptil 1/3 av utgiftene ved kjøp over 10.000,-
			</p>
		</div>
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Image src={klubbBanner} alt='many goals lined up for clubs' />
		</div>
		<div
			style={{
				maxWidth: '70rem',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'center',
				margin: 'auto',
			}}>
			<div style={clubCard}>
				<div
					style={{
						maxHeight: '20rem',
					}}>
					<Image alt='club card' src={clubCarImageOne} />
				</div>
				<div>
					<h3 style={clubCardTitle}>LG100/50 2 + 2 mål</h3>
					<p style={clubCardText}>Kr. 5.800 inkl MVA og nøytrale nett</p>
				</div>
				<button style={inforBtn}>Mere information</button>
			</div>
			<div></div>
			<div style={clubCard}>
				<div
					style={{
						maxHeight: '20rem',
					}}>
					<Image style={imageFit} alt='club card' src={clubCarImageTwo} />
				</div>
				<div>
					<h3 style={clubCardTitle}>LG100 Pakke 8 mål</h3>
					<p style={clubCardText}>Kr. 14.400 inkl MVA og Din Logo</p>
				</div>
				<button style={inforBtn}>Mere information</button>
			</div>
		</div>
		<YoutubeEmbed embedId='QbeZkLHfnJY' />
	</section>
);

export default ClubSection;
