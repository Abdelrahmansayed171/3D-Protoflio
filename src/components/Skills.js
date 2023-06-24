import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme ">
                            <div className="item">
                                <h3>Front End</h3>
                                <div id="line"></div>
                                <h5>HTML/HTML5</h5>
                                <h5>CSS</h5>
                                <h5>Tailwind CSS</h5>
                                <h5>JavaScript</h5>
                                <h5>React</h5>
                                

                            </div>
                            <div className="item">
                                <h3>Back End</h3>
                                <div id="line"></div>
                                
                                <h5>Python / Django</h5>
                                <h5>PHP / Laravel</h5>
                                <h5>JavaScript / NodeJS</h5>
                                <h5>Java / Spring Boot</h5>
                                <h5>C / C++</h5>
                                <h5>C#</h5>
                                <h5>OOP Principles</h5>
                                <h5>Design Patterns</h5>
                                <h5>MongoDB</h5>
                                <h5>MySQL</h5>
                                <h5>Microsoft SQL Server</h5>
                                <h5>RESTful APIs</h5>                                

                            </div>
                            <div className="item">
                                <h3>Soft Skills</h3>
                                <div id="line"></div>
                                
                                <h5>Time Management</h5>
                                <h5>Communication</h5>
                                <h5>Leadership</h5>
                                <h5>Problem Solving</h5>
                                <h5>Critical Thinking</h5>
                                <h5>Agile / Scrum</h5>

                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
