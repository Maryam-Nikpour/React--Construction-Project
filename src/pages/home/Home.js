
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"

import MyCarousel from '../../components/Carousel/MyCarousel';
import MyForm from "../../components/form/Form"
import './Home.css'
import ConstructionItem from "../../components/construction/ConstructionItem"
import { useState } from "react"
import img1 from '../../assets/images/constructions/constructions-1.jpg';
import img2 from '../../assets/images/constructions/constructions-2.jpg';
import img3 from '../../assets/images/constructions/constructions-3.jpg';
import img4 from '../../assets/images/constructions/constructions-4.jpg';
import ServiceItem from "../../components/serviceItem/ServiceItem"
import { FaMountainCity , FaArrowUpFromGroundWater, FaCompassDrafting, FaTrowelBricks, FaHelmetSafety  } from "react-icons/fa6";
import img5 from '../../assets/images/alt-services.jpg';
import AltService from "../../components/altService/AltService"
import { BsFillEaselFill, BsFillPatchCheckFill, BsBrightnessHigh   } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import tabImage1 from '../../assets/images/tabcontent /features-1.jpg'
import tabImage2 from '../../assets/images/tabcontent /features-2.jpg'
import tabImage3 from '../../assets/images/tabcontent /features-3.jpg'
import tabImage4 from '../../assets/images/tabcontent /features-4.jpg'
import Footer from "../../components/footer/Footer";


function Home(){
    const[construction, setconstruction] =useState([
        {
         id:1,
         title:'Possimus ut sed velit assumenda',
         text: 'Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.',
         img:img1
        },
        {id:'2',
        title:'Possimus ut sed velit assumenda',
        text:'unt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.',
        img:img2
    },
    {id:'3',
    title:'Possimus ut sed velit assumenda',
    text:'unt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.',
    img:img3
},
{id:'4',
title:'Possimus ut sed velit assumenda',
text:'unt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.',
img:img4
}
    ]);
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
    ] );
    const [altservice , setaltservice] = useState([
        {
            id:1,
            title:'Lorem Ipsum',
            altserviceText:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
            icon: <BsFillEaselFill />

        },
        {id:2,
            title:'Nemo Enim',
            altserviceText:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
            icon: <BsFillPatchCheckFill />

        },
        {
            id:3,
            title:'Dine Pad',
            altserviceText:'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis',
            icon:<BsBrightnessHigh />

        },
        {id:4,
            title:'Tride clov',
            altserviceText:'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi',
            icon:<BsBrightnessHigh />
        }
    ]);
    const [tabContent, settabContent]=useState([
        {
            id:1,
            title:'Voluptatem dignissimos provident',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua',
            points:[
                'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Duis aute irure dolor in reprehenderit in voluptate velit.',
                'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
            ],
            img:'tabImage1',
            icon:<IoCheckmarkDone />,
           
        },
        {
            id:2,
            title:'Neque exercitationem debitis',
            icon:<IoCheckmarkDone />,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.'
        },
        {
            id:'3',
            title:'Voluptatibus commodi accusamu',
            ico:'',
            text:''
        }

    ])
   return(
       <div>
       
        <MyCarousel />
        <Container fluid style={{textAlign:'justify'}} className="my-container ">                                     
            <Row className=" my-5 align-item-center justify-content-center " data-aos="zoom-out" data-aos-delay="100">
                <Col className="my-col d-flex flex-column" lg={6}>
                <h1>Minus hic non reiciendis ea possimus at quia.</h1>
                <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
                <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                </Col>
                <Col lg={4}>
                <MyForm/>
                </Col>
            </Row>
            <Row className="construction py-5 align-items-center px-5" data-aos="fade-up">
                <h2 className="py-2 section-title">Constructions</h2>
                <p className="section-text">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        
               {construction.map((construction, index) => (
                <Col key={construction.id}  md={6} lg={6} xl={3} className="py-3" data-aos="fade-up" data-aos-delay={index * 300}>
                <ConstructionItem {...construction} dataAosDelay={index * 300}/>
                </Col>
               ) )}
               
            </Row>
      
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
                <Row className="mx-5 py-5 alt-services">
                    <Col lg={6} >
                    <img className="features-image" src={img5} alt="" />
                    </Col>
                   
                    <Col lg={6}  className="alt-services-title">
                    <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                    <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                    {altservice.map((item, index) => (
                <Col key={item.id}  className="py-3" data-aos="fade-up" data-aos-delay={index * 300}>
                <AltService {...item} dataAosDelay={index * 300}/>
                </Col>
               ) )}
                    </Col>
                </Row>
                <Row>
                <Tab.Container  >
                  <Row>
                  <Tabs 
      defaultActiveKey="Modisit"
      id="justify-tab-example"
      className="mb-3"
      justify
      
    >
      <Tab  eventKey="Modisit" title="Modisit" className=" py-3 mx-5">
            <Row>
                <Col>
                <h3>Voluptatibus commodi accusamu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
                    <ul className="points-list">
                        
                            <li >
                            <IoCheckmarkDone /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                            </li>

                    </ul>
                </Col>
                <Col lg={6}>
                <img src={tabImage1} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="Praesenti" title="Praesenti" className="tab-container py-3  mx-5">
      <Row>
                <Col>
                <h3>Voluptatibus commodi accusamu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
                    <ul className="points-list">
                        
                            <li >
                            <IoCheckmarkDone /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                            </li>

                    </ul>
                </Col>
                <Col lg={6}>
                <img src={tabImage2} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="Explica" title="Explica" className="tab-container py-3  mx-5">
      <Row>
                <Col>
                <h3>Voluptatibus commodi accusamu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
                    <ul className="points-list">
                        
                            <li >
                            <IoCheckmarkDone /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                            </li>

                    </ul>
                </Col>
                <Col lg={6}>
                <img src={tabImage3} alt="" />
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="Nostrum" title="Nostrum" className="tab-container py-3  mx-5">
      <Row>
                <Col lg={6}>
                <h3>Voluptatibus commodi accusamu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
                    <ul className="points-list">
                        
                            <li >
                            <IoCheckmarkDone /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li>
                            <IoCheckmarkDone /> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                            </li>

                    </ul>
                </Col>
                <Col lg={6}>
                <img src={tabImage4} alt="" />
                </Col>
            </Row>
      </Tab>
    </Tabs>
                    
                  </Row>
                </Tab.Container>
                <Footer/>
                
                </Row>
                
        </Container>   
      </div>
        
    )
}
export default Home