import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header/Header"
import './Services.css'
import ServiceItem from "../../components/serviceItem/ServiceItem";
import { useState } from "react"
import { FaMountainCity , FaArrowUpFromGroundWater, FaCompassDrafting, FaTrowelBricks, FaHelmetSafety  } from "react-icons/fa6";
function Services(){
    const title= 'Services';
    let breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Services', current: true }
      ];
      const [service , setservice]=useState([
        {
            id:1,
            subtitle:'Nesciunt Mete',
            servicetext:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
           icon:<FaMountainCity/>
        },
        {
            id:2,
            subtitle:'Eosle Commodi',
            servicetext:'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
            icon:<FaArrowUpFromGroundWater />
          
        },
        {
            id:3,
            subtitle:'Ledo Markt',
            servicetext:'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
            icon:<FaCompassDrafting />
           
        },
        {
            id:4,
            subtitle:'Asperiores Commodit',
            servicetext:'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
            icon:<FaTrowelBricks />
       
        },
        {
            id:5,
            subtitle:'Velit Doloremque',
            servicetext:'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
            icon:<FaHelmetSafety />
          
        },
        {
            id:6,
            subtitle:'Dolori Architecto',
            servicetext:'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
            icon:<FaHelmetSafety />
           
            
        }
    ] )
      return (
        <div>
          <Header title={title} breadcrumbs={breadcrumbs} />
          <Row className="py-5 service-section justify-content-center px-5">
                
                <h2 className="py-4 section-title">Services</h2>
                <p className="section-text">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.   
                </p>
                {service.map((item, index)  => 
                    <Col key={item.id} md={6} lg={4} className="py-3" data-aos="fade-up" data-aos-delay={index * 200}>
                    <ServiceItem {...item} dataAosDelay={index * 200}/>
                    </Col>
                )}
                
            </Row>
      
        </div>
      );
    }

export default Services