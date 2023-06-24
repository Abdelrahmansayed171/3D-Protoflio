import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Projects</h2>
                          <div className="item">
                              <a href="https://github.com/Abdelrahmansayed171/DjangoChatApp"><h5>Web-based chat app | Django, python</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/weather-journal"><h5>Weather journal Website| JS / NodeJS</h5> </a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/Freelance-platform"><h5>Freelance platform | PHP / Laravel</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/Laravel-Registration"><h5> Bilingual Registration Form | PHP / Laravel</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/Web-Project"><h5>Student Affairs System | Django, python</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/javaThreading"><h5> Prime Number Generator with multiThreading | Java, Swing</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/seiffmohamedd/Advanced-Software-Project"><h5> Fawry-like System | Java / Spring, Design patterns</h5></a>
                              <div id="line"></div>
                              <a href="https://github.com/Abdelrahmansayed171/File-Assignment"><h5> Simple DBMS handling deleting inserting in text file working with simple, secondary Index | C++</h5></a>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
