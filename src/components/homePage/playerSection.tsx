//import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import cardImageOne from '../../../public/localmedia/LG50.jpg';
import cardImageTwo from '../../../public/localmedia/LG100.jpg';
import cardImageThree from '../../../public/localmedia/nett.jpg';
import {
	faCartShopping,
	faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';


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
			<h2 className='player_section_title'>For Spillere</h2>
		</div>
		<div className='card_container_player'>
			<div className='main_card'>
				<Image src={cardImageOne} alt='garde goal, fotball goal medium size' />
				<h3 className='player_section_title'>LG50 “Hagemålet”</h3>
				<p className='player_card_text'>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG50 Original er et norsk designet produkt som passer
					perfekt for fotballspill i hagen, på løkka, eller på treningsfeltet
					for de yngste.
				</p>
				<p className='player_card_spec'>B x H= 120 x 75 cm </p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<button className='player_card_btn'>Mere information</button>
					<button className='player_card_btn'>cart</button>
				</div>
			</div>
			<div className='main_card'>
				<Image
					src={cardImageTwo}
					className='card_image_home'
					alt='garde goal, fotball goal large size'
				/>

				<h3 className='player_section_title'>LG100</h3>
				<p className='player_card_text'>
					Det perfekte fotballmålet for de som elsker å spille fotball!
					Funtoplay LG100 Original er et norsk designet produkt som passer
					perfekt til fotballklubber som ønsker å benytte seg av
					småmål/småspill.
				</p>
				<p className='player_card_spec'>B x H= 150 x 95 cm</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<button className='player_card_btn'>Mere information</button>
					<button className='player_card_btn'>cart</button>
				</div>
			</div>
		</div>
		<div className='player_card_net'>
			<div style={{ width: '50%' }}>
				<Image src={cardImageThree} alt='fotball nets / fotball nett' />
			</div>
			<div style={{ width: '50%' }}>
				<h3 className='player_section_title'>Nett</h3>
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
