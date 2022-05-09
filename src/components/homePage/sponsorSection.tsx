const SponsorSection = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			paddingRight: '2%',
			paddingLeft: '2%',
			maxWidth: '922px',
		}}>
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h2
				style={{
					fontSize: '36px',
					height: '1rem',
					textAlign: 'center',
					color: '#2F4858',
				}}>
				Sponsor?
			</h2>
			<p style={{ fontSize: '20px' }}>
				Ønsker du å sponse Norges bredde & toppfotball? Vi tilbyr enkel og
				effektiv promotering av egen merkevare på våre populære fotballmål.
				Økonomi en utfordring for mange klubber, derfor er det fint å ha
				sponsorer som kan bidra og hjelpe til.
			</p>
		</div>

		<div style={{ margin: 'auto' }}>
			<button
				style={{
					color: 'white',
					backgroundColor: '#70BF48',
					textAlign: 'center',
					cursor: 'pointer',
					border: 'none',
					fontSize: '2rem',
					paddingTop: '0.6rem',
					paddingBottom: '0.6rem',
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}}>
				Mere information
			</button>
		</div>
	</div>
);
export default SponsorSection;
