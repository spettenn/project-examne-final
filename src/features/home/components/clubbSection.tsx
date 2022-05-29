import Image from 'next/image';
import klubbBanner from '../../../public/localmedia/klubbGoals.png';
import clubCarImageOne from '../../../public/localmedia/pakke.png';
import clubCarImageTwo from '../../../public/localmedia/balkan.png';
import YoutubeView from "../../../shared/components/YoutubeView";

const imageFit = {
	maxHeight: '2rem',
};


const ClubSection = () => (
	<div
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
				boxShadow: '1px 2px 6px 1px #383737',
			}}>
			<p
				style={{
					fontSize: '1.1rem',
				}}>
				I sammarbeid med NFF “Utstyrsordningen”, kan klubben søke om å få igjen
				opptil 1/3 av utgiftene ved kjøp over 10.000,-
			</p>
		</div>
		<div className='klubb_backgound_img'>
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
				marginBottom: '1rem',
			}}>
			<div className='club_card'>
				<div
					style={{
						maxHeight: '20rem',
					}}>
					<Image alt='club card' src={clubCarImageOne} />
				</div>
				<div>
					<h3 className='club_card_title'>LG100/50 2 + 2 mål</h3>
					<p className='club_card_text'>Kr. 5.800 inkl MVA og nøytrale nett</p>
				</div>
				<div className='club_card_btn'>
					<button className='info_btn'>Mere information</button>
					</div>
			</div>
			<div></div>
			<div className='club_card'>
				<div
					style={{
						maxHeight: '20rem',
					}}>
					<Image style={imageFit} alt='club card' src={clubCarImageTwo} />
				</div>
				<div>
					<h3 className='club_card_title'>LG100 Pakke 8 mål</h3>
					<p className='club_card_text'>Kr. 14.400 inkl MVA og Din Logo</p>
				</div>
				<div className='club_card_btn'>
					<button className='info_btn'>Mere information</button>
					</div>
			</div>
		</div>
		<YoutubeView embedId='QbeZkLHfnJY' />
		
	</div>
);

export default ClubSection;
