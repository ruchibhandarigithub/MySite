import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCode,
  faEnvelope,
  faServer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import {
 
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

import profileImgSrc from "./images/profile-background.jpg";
import CrytolsForMe from "./images/CrytolsForMe.PNG";
import ShoppingCart from "./images/Shoping-cart.PNG";

import websitePreview from "./images/websitePreview.PNG";
import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./components/Logo/Logo";
import SkillCard from "./components/SkillCard/SkillCard";
import TimelineDate from "./components/TimelineDate/TimelineDate";
import TimelineContent from "./components/TimelineContent/TimelineContent";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import ContactLink from "./components/ContactLink/ContactLink";
import TimelineIndicator from "./components/TimelineIndicator/TimelineIndicator";
import TimelineEnd from "./components/TimelineEnd/TimelineEnd";
import SectionHeading from "./components/SectionHeading/SectionHeading";
AOS.init();

const skills = [
  {
    icon: faCode,
    title: "Frontend Developer",
    description:
      "I have significant experience building frontend websites, web apps and games",
    languages: "JavaScript, HTML, CSS, SASS",
    frameworks: "React Js, jQuery, Tailwind UI",
  },
  {
    icon: faServer,
    title: "Backend Developer",
    description:
      "I have developed several full-stack web apps with user authentication and profiles",
    languages: "Java",
    frameworks: "SpringBoot, Firebase",
  }
  
];

const projects = [
  {
    url: "https://crypto-trackor-k72f.vercel.app/",
    imgSrc: CrytolsForMe,
    description: "CrytoControl",
  },
  {
    url: "https://ruchibhandarigithub.github.io/Shopping-Cart-Application/",
    imgSrc: ShoppingCart,
    description: "Shoping Cart Application",
  },
  {
    url: "https://finance-app-roan.vercel.app/dashboard",
    imgSrc: websitePreview,
    description: "Finance Trackor",
  },
];

const App = () => {
  const aboutRef = useRef();
  const journeyRef = useRef();
  const projectsRef = useRef();

  const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(0);
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(faBars);
  const [headerBackgroundColour, setHeaderBackgroundColour] = useState(
    "rgba(0, 0, 0, 0.85)"
  );

  useEffect(() => {
    setBackgroundImageOpacity(1);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });

    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    }
  };

  const handleHamburgerClick = () => {
    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    } else {
      setDropdownIsVisible(true);
      setHamburgerIcon(faXmark);
      setHeaderBackgroundColour("rgba(0, 0, 0)");
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: headerBackgroundColour }}>
        <nav className="container">
          <div>
            <Logo handleClick={handleLogoClick} />

            <ul className="nav-links">
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
              <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
              <li>
                <a href="mailto: bhandariruchi498@gmail.com">Contact</a>
              </li>
            </ul>

            <button onClick={handleHamburgerClick}>
              <FontAwesomeIcon className="icon" icon={hamburgerIcon} />
            </button>
          </div>

          {dropdownIsVisible && (
            <ul className="nav-links collapse">
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
              <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
              <li>
                <a href="mailto: bhandariruchi498@gmail.com">Contact</a>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <main>
        <section id="intro" className="intro">
          <div
            className="background-image"
            style={{
              backgroundImage: `
              linear-gradient( rgba(0, 0, 0, 0.7), 
              rgba(0, 0, 0, 0.55) ), 
              url(${profileImgSrc})
              `,
              opacity: backgroundImageOpacity,
            }}
          >
            <h1>Ruchi Bhandari</h1>

            <p>Designer, Developer, Student</p>
          </div>
        </section>

        <section className="about container">
          <div
            ref={aboutRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <SectionHeading fade="fade-right" text="About Me" colour="primary" />

          <p
            className="section-intro"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            I'm a 2022 Graduate  in Computer Science From University Of Delhi and have almost
            two years of coding experience. I love designing and developing
            everything from websites to mobile games and am constantly on the
            lookout for new challenges. I'm confident, curious and determined to
            improve my skills everyday.
          </p>

          <div className="cards-container">
            {skills.map((skill, i) => (
              <SkillCard index={i} {...skill} />
            ))}
          </div>
        </section>

        <section className="journey">
          <div
            ref={journeyRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <div className="container">
            <SectionHeading
              fade="fade-in"
              text="My Programming Journey"
              colour="black"
            />

            <div className="timeline">
              <div className="row">
                <div className="date-container container-lhs">
                  <TimelineDate date={"August 2019"} fade="fade-right" />

                  <TimelineIndicator position="left" />

                  <TimelineEnd position="left" />
                </div>

                <div className="content-container container-rhs">
                  <TimelineContent
                    fade={"fade-left"}
                    title="University of Delhi"
                    date="August 2019"
                    description="Computer Science BSc (Hons), Classification: 1st"
                    skills="Learned Java, SQL, JavaScript, HTML, CSS"
                  />
                </div>
              </div>

              <div className="row reverse">
                <div className="content-container container-lhs">
                  <TimelineContent
                    fade={"fade-right"}
                    title="Remark Skills"
                    date="October 2021 - November2021"
                    description="Web Developement intern"
                    skills  ="Learned creation of Dynamic Website  "
                  />
                </div>

                <div className="date-container container-rhs">
                  <TimelineDate date={"October 2021"} fade="fade-left" />

                  <TimelineIndicator position="right" reverse={true} />
                </div>
              </div>

              <div className="row">
                <div className="date-container container-lhs">
                  <TimelineDate date={"August 2022"} fade="fade-right" />

                  <TimelineIndicator position="left" />
                </div>

                <div className="content-container container-rhs">
                  <TimelineContent
                    fade={"fade-left"}
                    title="Accio Job"
                    date="August 2022"
                    description="Software Development Trainee"
                    skills="Learned Data Struture and Algorithm using java , SpringBoot , Html, Css, Bootstrap , JavaScript and,
                    ReactJs"
                  />
                </div>
              </div>

              
              
            </div>
          </div>
        </section>

        <section className="projects container">
          <div
            ref={projectsRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <SectionHeading
            fade="fade-right"
            text="My Projects"
            colour="primary"
          />

          <p
            className="section-intro"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            I have built of number of projects in my spare time . Some of my favourites are shown below.
             The CrytolsForMe web app was developed during  Intenship At Remark Skill.
            The website below I created for a Sports Massage business in my
            local area. The Shopping-Cart was a personal project 
          </p>

          <div className="previews-container">
            {projects.map((project, i) => (
              <ProjectPreview index={i} {...project} />
            ))}
          </div>
        </section>

        <section className="cta container">
          <SectionHeading
            fade="fade-up"
            text="Want to work with me?"
            colour="primary"
          />

          <p data-aos="fade-up" data-aos-duration="1000">
            I’m always open to discuss new opportunities.
          </p>

          <a
            href="mailto: ryan.henzell-hill@outlook.com"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get in touch
          </a>
        </section>
      </main>

      <footer>
        <div className="container">
          <Logo />

          <div className="links-container">
            <ContactLink
              url="https://www.instagram.com/ruchibhandari_3107/"
              icon={faInstagram}
            />

            <ContactLink
              url="https://www.linkedin.com/in/ruchi-bhandari-8753711a4/"
              icon={faLinkedinIn}
            />

            <ContactLink url="https://github.com/ruchibhandarigithub" icon={faGithub} />

            <ContactLink
              url="mailto: bhandariruchi498@gmail.com"
              icon={faEnvelope}
            />
          </div>

          <p className="copyright">
            <FontAwesomeIcon className="icon" icon={faCopyright} />
            Ruchi Bhandari
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
