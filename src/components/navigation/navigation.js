import Hamburger from '../navigation/burger.js';
import { useState } from 'react';
import logo from '../../../public/localmedia/logo_dark-removebg.png';
import Image from 'next/image';
import ActiveLink from '../navigation/activeLink';

export default function Nav() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<section className='nav_section_container'>
			<div className='nav_container'>
				<div className='navigation'>
					<ul>
						<li>
							<ActiveLink activeClassName='active' href='/'>
								<a>Hjem</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink activeClassName='active' href='/products'>
								<a>Produkter</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink activeClassName='active' href='/faq'>
								<a>Info</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink activeClassName='active' href='/contact'>
								<a>Kontakt oss</a>
							</ActiveLink>
						</li>
					</ul>
					<div className='hamburger' onClick={toggleHamburger}>
						<Hamburger isOpen={hamburgerOpen} />
					</div>
				</div>
				<div className='logo_nav_container'>
					<Image
						className='logo_nav'
						src={logo}
						height={50}
						width={200}
						href='/index'
						alt='logo'
					/>
				</div>

				<style jsx>{`
					.nav_container {
						display: flex;
						flex-direction: row-reverse;
					}
					.nav_container {
						position: relaltive;
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
							z-index: 500;
						}
						li {
							padding: 1rem;
							font-size: 2rem;
							border-bottom: 1px solid var(--secondary-color);
							-webkit-box-shadow: 0px 1px 1px 0px #979797;
							box-shadow: 0px 1px 1px 0px #979797;
							z-index: 500;
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
