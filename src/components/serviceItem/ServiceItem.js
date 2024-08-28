import './ServiceItem.css'
import Card from 'react-bootstrap/Card';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
function ServiceItem({subtitle ,servicetext, icon}){
    return(
        <Card className='service-item' >
        <Card.Body>
        <div className='card-icon'>{icon}</div>
          <Card.Subtitle className="mb-2 text-muted card-subtitle">{subtitle}</Card.Subtitle>
          <Card.Text>
            {servicetext}
          </Card.Text>
          <Card.Link href="#" className='readmore'>Read more<HiOutlineArrowSmallRight /></Card.Link>

        </Card.Body>  
      </Card>
    )
}
export default ServiceItem