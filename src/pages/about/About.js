import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header"
import './About.css'
import aboutImg from '../../assets/images/about.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
import Stats from "../../components/Stats/Stats";



function About() {
  const title= 'About';
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'About', current: true }
  ];
 
  return (
    <div>
      
    <Header title={title} breadcrumbs={breadcrumbs} />
    
    <Container >
      <Row className="about">
        <h2 className="inner-title">Consequatur eius et magnam</h2>
     
        <Col lg={7} className="about-img"  data-aos="zoom-out" data-aos-delay="200">
        <img   src={aboutImg} alt="photo"  />
        </Col>
        <Col  lg={7} className="story" data-aos="fade-up" data-aos-delay="100">
        <h4 >Est 1988</h4>
              <h3>Our Story</h3>
              <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
              <ul>
                <li> <FaRegCheckCircle className="icon" /><span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                <li><FaRegCheckCircle className="icon"/><span>Duis aute irure dolor in reprehenderit in</span></li>
                <li><FaRegCheckCircle className="icon"/><span>Ullamco laboris nisi ut aliquip ex ea</span></li>
              </ul>
              <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>
        </Col>
        
      </Row>
      <Row>
        <Stats/>
      </Row>
     
    </Container>
 
  </div>
  );
}
 


export default About