import Hamburger from '../navigation/burger.js';
import { useState } from 'react';
import logo from '../../../public/localmedia/LogoNav.png';
import Image from 'next/image';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActiveLink from '../navigation/activeLink';

export default function Nav() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<section style={{}}>
			<div className='nav_container'>
				<div className='navigation'>
					<ul>
						<li>
							<ActiveLink
								activeClassName='active'
								href='../../pages/products.js'>
								<a>Produkter</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink activeClassName='active' href='../../pages/faq.js'>
								<a>Info</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								activeClassName='active'
								href='../../pages/contact.js'>
								<a>Kontakt oss</a>
							</ActiveLink>
						</li>
						<FontAwesomeIcon
							className='cart_nav'
							icon={faCartShopping}
							alt='shopping cart'
						/>
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
						max-width: 1200px;
						min-width 1000px;
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
							border-bottom: 1px solid var(--secondary-color);
							-webkit-box-shadow: 0px 1px 1px 0px #979797;
							box-shadow: 0px 1px 1px 0px #979797;
						}
						.navigation {
							flex-direction: row;
						}
						.nav_container {
							display: flex;
							flex-direction: row;
						}
					}
				`}</style>
			</div>
		</section>
	);
}
