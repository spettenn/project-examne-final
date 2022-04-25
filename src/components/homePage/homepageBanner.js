import backGroundOne from '../../../public/localmedia/banner_img_one.jpg';

const Banner = () => (
	<>
		<div className='view img-fluid'>
			<div className='left'>
				<div
					className='spillere'
					style={{
						backgroundImage: `url(${backGroundOne})`,
					}}>
					<div className='banner__layer'>
						<h3 className='banner__title'>For spillerene</h3>
						<p className='banner__text'>
							Et norskt designet produkt som passer perfekt for fotballspill i
							hagen, på løkka, eller på treningsfeltet. Finnes nå i 2
							størrelser!
						</p>
						<a className='banner__btn' href='#forSpillere'>
							Se vårt utvalg
						</a>
					</div>
				</div>
			</div>
			<div className='divider'></div>
			<div className='right'>
				<div className='klubber'>
					<div className='banner__layer'>
						<h3 className='banner__title'>For Klubbene</h3>
						<p className='banner__text'>
							Markedets mest solide sammenleggbare fotballmål! Nå kan klubben få
							egen eller sponsors logo på nettet. Slås enkelt opp/ned på under 5
							sekunder.
						</p>
						<a className='banner__btn' href='#forKlubber'>
							Se vårt utvalg
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className='banner__mobile'>
			<div className='inner__spillere'>
				<div className='inner__layer'>
					<h4 className='mobile__banner__title'>For Spillerene</h4>
					<p className='mobile__banner__text'>
						Et norskt designet produkt som passer perfekt for fotballspill i
						hagen, på løkka, eller på treningsfeltet. Finnes nå i 2 størrelser!
					</p>
					<a className='mobile__banner__btn' href='#forSpillere'>
						Se vårt utvalg
					</a>
				</div>
			</div>
			<div className='inner__klubber'>
				<div className='inner__layer'>
					<h4 className='mobile__banner__title'>For Klubbene</h4>
					<p className='mobile__banner__text'>
						Markedets mest solide sammenleggbare fotballmål! Nå kan klubben få
						egen eller sponsors logo på nettet. Slås enkelt opp/ned på under 5
						sekunder.
					</p>
					<a className='mobile__banner__btn' href='#forKlubber'>
						Se vårt utvalg
					</a>
				</div>
			</div>
		</div>
	</>
);

export default Banner;
