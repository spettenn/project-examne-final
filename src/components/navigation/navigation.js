import Hamburger from '../navigation/burger.js';
import { useState } from 'react';

export default function Nav() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<div>
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

			<style jsx>{`
				@media (max-width: 767px) {
					.hamburger {
						display: fixed;
						padding-top: 10px;
						margin-left: 10px;
						z-index: 6;
					}
					.navigation ul {
						display: ${hamburgerOpen ? 'inline' : 'none'};
						background-color: transparent;
						height: 100vh;
						width: 50vw;
						margin-top: 50px;
						position: fixed;
					}
				}
			`}</style>
		</div>
	);
}
