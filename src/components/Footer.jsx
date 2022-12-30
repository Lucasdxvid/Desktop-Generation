import {
  FaReddit,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function FooterCustom() {
  return (
    <>
      <footer className="myFooter text-center text-white">
        <div className="container p-4 ">
          <p>Síguenos en las redes</p>
          <div className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/daaviid.paaz.58"
              target="_blank"
              role="button"
            >
              <FaFacebookF />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/Lucasdxvid1"
              target="_blank"
              role="button"
            >
              <FaTwitter />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.reddit.com/user/Athloner44"
              target="_blank"
              role="button"
            >
              <FaReddit />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/lucasdxvid/"
              target="_blank"
              role="button"
            >
              <FaInstagram />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/lucasdavidpazberrondo/"
              target="_blank"
              role="button"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Lucasdxvid"
              target="_blank"
              role="button"
            >
              <FaGithub />
            </a>
          </div>
          <div className="mb-4">
            <p>
              E-Commerce del mundo del PC Gamer dedicado a la venta de hardware
            </p>
          </div>
        </div>

        <div className="text-center p-3">
          © 2022 Copyright:
          <a className="text-white" href="index.html">
            Desktop-Generation.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default FooterCustom;
