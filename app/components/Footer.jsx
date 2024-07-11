import SocialMediaIcon from "./SocialMediaIcon";
import github from "../../public/github.svg";
import gmail from "../../public/gmail.svg";
import linkedin from "../../public/linkedin.svg";
import whatsapp from "../../public/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#home">
          Home
        </a>
        <a className="link link-hover">Portfolio</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <SocialMediaIcon
            src={github}
            alt="Github"
            link="https://github.com/marcosdarri"
          />
          <SocialMediaIcon
            src={gmail}
            alt="Gmail"
            link="mailto:marcosdarri2019@gmail.com"
          />
          <SocialMediaIcon
            src={linkedin}
            alt="LinkedIn"
            link="https://github.com/marcosdarri"
          />
          <SocialMediaIcon
            src={whatsapp}
            alt="Whatsapp"
            link="https://wa.me/59891788790"
          />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Marcos
          Darricarrere
        </p>
      </aside>
    </footer>
  );
}
