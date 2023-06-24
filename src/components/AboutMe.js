import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import profilePhoto from "../assets/img/Profile-Photo.png";

import 'animate.css';

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      
      <Container>
        <Row>
          <Col size={12}>
            <h1>About Me</h1>
            <p>Hello! I'm Abdelrahman Sayed, a passionate and curious computer science student who is eager to learn and explore new technologies. I find great joy in acquiring knowledge and continuously expanding my skill set. With a strong foundation in Java, C++, PHP, Python and scrum, I have developed a versatile skill set that allows me to tackle a wide range of projects.

I am known for my enthusiasm, dedication to learning and hard work.<span id="more">Whether it's diving into a new programming language or embracing emerging technologies, I thrive on the challenges that come with acquiring new knowledge. I believe that a constant thirst for learning is crucial in the ever-evolving field of technology.

Communication and collaboration are also key aspects of my personality which made me interested in Agility. I greatly enjoy connecting with others, sharing ideas, and working together to achieve common goals. I value effective communication and actively seek opportunities to improve my interpersonal skills.

Helping others is a core value of mine. I take pride in supporting my peers and offering assistance whenever possible. Whether it's through mentoring, sharing resources, or collaborating on projects, I find fulfillment in helping others succeed.

In addition to my academic pursuits, I have been involved in various projects and initiatives that have broadened my experience. From developing web-based chat applications using Django and Python to creating a freelance platform with PHP and Laravel, each project has contributed to my growth as a developer and problem solver.

I am always open to new challenges and opportunities to expand my horizons. Currently, I am focusing on studying MERN stack development, while also nurturing a growing interest in the field of Data Engineering. The prospect of Creating ETL pipelines to solve business problems excites me, and I am eager to explore this area further.

In summary, I am a dedicated learner and a curious individual who thrives on acquiring new skills and knowledge. With a passion for learning, effective communication, and helping others, I am ready to embrace new challenges and make a positive impact in the world of technology.

</span></p>
  <button type="submit" className="readMore" id="morebtn" onClick={() =>{
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("morebtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "More about Me...";
    }
  }}><span>More about Me...</span></button>
          </Col>
          <Col>
            <img src={profilePhoto} className="profile-photo" ></img>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
