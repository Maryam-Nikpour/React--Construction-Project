import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'


function Footer(){
    return(
        <footer className="footer pt-5 mt-5">
              <Container className="footer-container">
                <Row> 
                    <Col md={3} className="footer-col">
                    <a href=""> <span className="sitename">UpConstruction</span></a>
                       <div className="pt-5">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3">
              <strong>Phone:</strong><span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong><span>info@example.com</span>
            </p>
          </div>
          <div className="social-links mt-4">
            <a href=""><FaTwitter /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaLinkedin /></a>
          </div>
          
                   
          </Col>
                    <Col sm={6} md={3} className="footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        </ul>
          </Col>
                    <Col sm={6} md={3} className="footer-links">
                    <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
                    </Col>
             
                </Row>
                <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">UpConstruction</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
      inspired by a design from <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

              </Container>

        </footer>
      
    )
    
}
export default Footer