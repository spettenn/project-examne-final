import Image from 'next/image';
import footerImage from '../../../public/localmedia/footerImage.png';

const Footer = () => {
	<div className='footer_container'>
		<div className='footer_info'>
			<h4 className='footer_title'>OM OSS</h4>
			<p className='footer_text'>
				Vi ønsker å skape en sunn kultur blant unge der ute og vil derfor gjøre
				vårt ytterste for å gi barn og unge en mulighet til å spille fotball,
				når som helst, hvor som helst
			</p>
		</div>
		<Image src={footerImage} alt='tripple A rated ofc' />
		<div className='footer_info'>
			<h4 className='footer_title'>SAMFUNNSANSVAR</h4>
			<p className='footer_text'>
				Funtoplay støtter Landsbyfadders arbeid i Rwanda, med å støtte
				overgangen fra fossile til fornybare solcelle baserte energikild
			</p>
		</div>
	</div>;
};
export default Footer;
