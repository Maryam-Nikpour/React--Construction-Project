import { Container } from 'react-bootstrap'
import './AltService.css'

function AltService({title, altserviceText, icon}){
    return(
        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
    
         <div className='altservices-icon'>{icon}</div>
      
          
          <div className='altservice-text'>
          
                <h4>
                  <a href="" className="stretched-link">{title}</a>
                </h4>
                <p>
                {altserviceText}
                </p>
        </div>
        </div>
    )
}
export default AltService