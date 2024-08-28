import Carousel from 'react-bootstrap/Carousel';
import heroImage1 from '../../assets/images/hero-carousel/hero-carousel-1.jpg';
import heroImage2 from '../../assets/images/hero-carousel/hero-carousel-2.jpg';
import heroImage3 from '../../assets/images/hero-carousel/hero-carousel-3.jpg';
import heroImage4 from '../../assets/images/hero-carousel/hero-carousel-4.jpg';
import heroImage5 from '../../assets/images/hero-carousel/hero-carousel-5.jpg';
import './MyCarousel.css'
import { Button } from 'react-bootstrap';
import '../navbar/MyNavbar'
import MyNavbar from '../navbar/MyNavbar';



function MyCarousel() {
  return (
   <div className='carousel-wrapper'>
    <MyNavbar/>
  
    <Carousel interval={5000}>
     
      <Carousel.Item className="carousel-item" >
        <img src={heroImage1} alt="First slide" />
        <Carousel.Caption className='my-caption'>
        <h2>Welcome to UpConstruction</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <Button href="" className="btn-get-started">
               Get Started
             </Button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className="carousel-item">
        <img src={heroImage2} alt="Second slide" />
        <Carousel.Caption className='my-caption'>
        <h2>Welcome to UpConstruction</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <Button href="" className="btn-get-started">
               Get Started
             </Button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className="carousel-item">
        <img src={heroImage3} alt="Third slide" />
        <Carousel.Caption className='my-caption'>
        <h2>Welcome to UpConstruction</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <Button href="" className="btn-get-started">
               Get Started
             </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img src={heroImage4} alt="Fourth slide" />
        <Carousel.Caption className='my-caption'>
        <h2>Welcome to UpConstruction</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <Button href="" className="btn-get-started">
               Get Started
             </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img src={heroImage5} alt="Fifth slide" />
        <Carousel.Caption className='my-caption'>
        <h2>Welcome to UpConstruction</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <Button href="" className="btn-get-started">
               Get Started
             </Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  
    
  );
}

export default MyCarousel;