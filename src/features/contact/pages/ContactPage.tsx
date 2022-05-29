import Head from "next/head";
import Image from "next/image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AnImage from "../public/localmedia/footerImage.png";
import ContactForm from "../components/contactForm";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="contact_layout">
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <div className="contact_left_container">
            <Link to="/">
              <a className="tilbake">
                <FontAwesomeIcon className="tilbake_icon" icon={faArrowLeft} />
                Tilbake
              </a>
            </Link>
            <div className="contact_image_container">
              <Image src={AnImage} className="contact_image" alt="tripple A rated business" />
            </div>
            <p className="contact_side_text">
              Gjør det du vil,
              <br /> hvor du vil,
              <br /> når du vil.
              <br /> - Fredrik Finstad
            </p>
          </div>
          <div className="contact_right_container">
            <div className="form_top">
              <Link to="/">
                <a className="tilbake_mobile">
                  <FontAwesomeIcon className="tilbake_icon" icon={faArrowLeft} />
                  Tilbake
                </a>
              </Link>
              <h2 className="contact_title">Kontakt oss</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
