import Head from 'next/head';
import Nav from '../src/components/navigation/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const faq_layout = {
	backgroundColor: '#ECECEC',
	display: 'flex',
	minHeight: '100vh',
	justifyContent: 'center',
	flexDirection: 'column',
};
const font_weight_thick = {
	fontWeight: 'thick',
};

function readMore() {
	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Les mere';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Les mindre';
		moreText.style.display = 'inline';
	}
}

export default function Faq() {
	return (
		<div>
			<Head>
				<title>bettingelser og spørsmål</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<Nav />
			<main style={faq_layout}>
				<h1 className='faq_title'>Sponsor</h1>
				<div className='sponsor_text'>
					<p>
						Norges største lagidrett! <br />
						Ønsker du å sponse Norges bredde & toppfotball? <br />
						Vi tilbyr enkel og effektiv promotering av egen merkevare på våre
						populære fotballmål. Økonomi en utfordring for mange klubber, derfor
						er det fint å ha sponsorer som kan bidra og hjelpe til.
					</p>
					<p>
						For idrettslagene sin del handler sponsing i aller høyeste grad om å
						skaffe ressurser til å gjennomføre sin aktivitet (mulighet til å
						skaffe nødvendig og ferdighetsutviklende utstyr).
					</p>
					<p>
						Bedrifter kan ha flere ulike motiver for å sponse idrettslag. Men
						det mest vanlige formålet for sponsor din del; enten at
						promoteringen skal fungerer reklameeffektivt for virksomheten
						(F.eks. assosiere seg med noe allmenheten oppfatter positivt), eller
						at sponsor ønsker å støtte nærklubben/idrettslaget uten å tenke på
						det som en lønnsom investering. Vi ønsker å inngå samarbeid som
						skaper merverdi både for sponsor og sponsorobjekt/idrettslag.
					</p>
					<p>
						Det finnes også mange støtte- og tilskuddsordninger som støtter
						aktivitet og idrett.
					</p>
					<p>
						Ta gjerne kontakt: Fredrik@funtoplay.no for priser og nærmere
						informasjon.
					</p>
				</div>
				<h1 className='faq_title'>FAQ / Ofte stilte spørsmål</h1>
				<div className='faq_text_container'>
					<div className='inner_text_container'>
						<h2 className='faq_small_title'>Betaling?</h2>
						<p className='faq_text'>
							Vi har to typer betalingsløsninger; Direktebetaling ved
							bestilling, eller betaling med faktura som betales 15 dager fra
							Kunden har mottatt varer. Jeg har problemer med å betale. Systemet
							spør om Bank Id. Dette er en ekstra sikkerhetsrutine som din bank
							setter opp på ditt kort. 3Dsecure er for å beskytte deg mot
							kortsvindel på nett dersom ditt kort skulle bli borte/stjålet. Se
							mer info under 3Dsecure.
						</p>
						<h2 className='faq_small_title'>Endring, sletting og betaling?</h2>
						<p className='faq_text'>
							Jeg har bestilt feil nett, kan jeg endre dette? Endringer i ordre
							som ikke er sendt ut kan gjøres via post@funtoplay.no, ved endring
							av ordrebeløp må ny ordre legges inn. <br /> Jeg ønsker å bestille
							mer, kan jeg legge dette til på eksisterende ordre? Det er ikke
							mulig å legge til produkter i ordre. Dette fordi beløpet vil bli
							høyere enn det du har akseptert og fått godkjent ved registrering.
							Ordre må derfor slettes via post@funtoplay.no og du må legge inn
							ny, korrekt bestiling og foreta en ny korttransaksjon. Beløp som
							ble trukket ved bestilling vil automatisk tilbakeføres din konto.
						</p>
						<h2 className='faq_small_title'>Reservedeler</h2>
						<p className='faq_text'>
							Hvis du har vært uheldig å slik at deler av målet er ødelagt har
							vi reservedeler på lager. Alle delene på målet kan byttes ut
							avhengig av din egen evne til å ta deg av dette. Kontakt oss på
							telefon 911 70 952 eller på fredrik@funtoplay.no så skal vi hjelpe
							deg så langt det er mulig. Våre nye nett kan byttes ut separat i
							forhold til målet.
						</p>
					</div>
					<div className='inner_text_container'>
						<h2 className='faq_small_title'>Bytte, retur og garanti?</h2>
						<p className='faq_text'>
							Det er ikke mulig å bytte spesialproduserte nett. Nettene blir
							produsert i henhold til hver enkelt ordre og det finnes ikke lager
							på disse nettene. Du kan bytte standardnett dersom disse finnes på
							lager. Handel i standard nettbutikk som privatperson gir vanlige
							forbrukerrettigheter med bytte/angrerett. Dersom du ikke fikk
							hentet pakken før denne gikk i retur vil den sendes på nytt etter
							avtale med deg. Du vil måtte dekke de ekstra fraktomkostningene.{' '}
							<br />
							Hva gjør jeg hvis det er feil på produktet? Det gis 2 års garanti
							på produksjonsfeil. Hvis det oppdages en feil eller mangel må
							Kjøper innen rimelig tid etter at feilen er oppdaget, eller man
							burde oppdaget det, sende skriftlig melding med ordrereferanse til
							fredrik@funtoplay.no om at det påberopes reklamasjon. Reklamasjon
							må senest skje to år etter at du overtok varen. Hvis det ikke
							reklameres i tide, tapes retten til reklamasjon.
						</p>
						<h2 className='faq_small_title'>Oppbevaring?</h2>
						<p className='faq_text'>
							<p style={font_weight_thick}>Rammen:</p>
							<br /> Hvis du behandler målet ditt som du ville gjort med bilen
							din vil du ha gledet av målet i mange år fremover uten behov for å
							bytte ut hverken nett eller andre deler. Vi anbefaler å tørke av
							målet/spyle det med rent vann av og til slik at ikke salt og
							forurensning fra regn sliter på de beveglige delene. <br />
							<p style={font_weight_thick}>Nettet:</p>
							<br />
							Vi anbefaler at nettet oppbevares tørt og at det får lov til å
							tørke i åpnet tilstand slik at man unngår råte og jordslag.
							Nettene er laget av Nylon og tåler ikke stå over lenge tid i
							temperaturer lavere enn – 16C. Nettene går tilbake til sin normale
							tilstand når temperaturen blir høyere slik at de kan oppbevares i
							garasjen på vinteren så lenge de ikke blir belastet med vekt fra
							andre gjenstander.
						</p>
					</div>
				</div>
				<div className='terms_container'>
					<div className='terms_inner_container'>
						<p>
							Returrett - 30 dagers full returett <span id='dots'>...</span>
							<span id='more'>
								Hvis du returnerer en komplett vare innen 30 dager fra du har
								mottatt varen får du alle pengene tilbake. Vi kaller det 30
								dagers full returrett for deg betyr det 100% trygghet.
								Returretten gjelder ikke kundespesifiserte produkter hvor det er
								påtrykket logo eller annen illustrasjon som ikke føres som
								lagervare.
							</span>
						</p>
						<button onClick='readMore()' id='myBtn'>
							Les mere
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
