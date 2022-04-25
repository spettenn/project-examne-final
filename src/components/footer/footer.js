import Image from 'next/image';
import footerImage from '../../../public/localmedia/footerImage.png';

const Footer = () => {
	<span>
		<div className='footerContainer'>
			<div className='footerInfo'>
				<h4 className='footerText'>OM OSS</h4>
				<p>
					Vi ønsker å skape en sunn kultur blant unge der ute og vil derfor
					gjøre vårt ytterste for å gi barn og unge en mulighet til å spille
					fotball, når som helst, hvor som helst
				</p>
			</div>
			<Image src={footerImage} alt='tripple A rated ofc' />
			<div className='footerInfo'>
				<h4 className='footerTitle'>SAMFUNNSANSVAR</h4>
				<p className='footerText'>
					Funtoplay støtter Landsbyfadders arbeid i Rwanda, med å støtte
					overgangen fra fossile til fornybare solcelle baserte energikild
				</p>
			</div>
		</div>
	</span>;
};
export default Footer;
