const SponsorSection = () => (
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h2>Sponsor?</h2>
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
					minWidth: '50px',
				}}>
				Mere information
			</button>
		</div>
	</div>
);
export default SponsorSection;
