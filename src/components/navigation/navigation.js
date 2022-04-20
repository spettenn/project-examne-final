import Hamburger from '../navigation/burger.js';
import { useState } from 'react';
import logo from '../../../public/localmedia/LogoNav.png';
import Image from 'next/image';

export default function Nav() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<div className='nav_container'>
			<div className='navigation'>
				<ul>
					<li>Produkter</li>
					<li>Info</li>
					<li>Kontakt oss</li>
				</ul>
				<div className='hamburger' onClick={toggleHamburger}>
					<Hamburger isOpen={hamburgerOpen} />
				</div>
			</div>
			<div className='logo_nav_container'>
				<Image className='logo_nav' src={logo} alt='logo' />
			</div>

			<style jsx>{`
				.nav_container {
					display: flex;
					flex-direction: row-reverse;
				}
				.hamburger {
					display: none;
				}

				@media (max-width: 767px) {
					.hamburger {
						display: flex;
						position: fixed;
						padding-top: 10px;
						margin-left: 10px;
						width: 2rem;
						height: 2.6rem;
						justify-content: space-around;
						flex-flow: column nowrap;
						z-index: 1000;
					}
					.navigation ul {
						display: ${hamburgerOpen ? 'inline' : 'none'};
						background-color: white;
						height: fit-content;
						width: 100vw;
						margin-top: 50px;
						position: fixed;
						text-align: center;
						-webkit-box-shadow: 0px 1px 3px 1px #5e5e5e;
						box-shadow: 0px 1px 3px 1px #5e5e5e;
					}
					li {
						padding: 1rem;
						font-size: 2rem;
					}
					.navigation {
						display: flex;
					}
					.nav_container {
						display: flex;
						flex-direction: row;
					}
				}
			`}</style>
		</div>
	);
}
