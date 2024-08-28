import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Stats.css'; 
import { Col, Container, Row } from 'react-bootstrap';
import { BsEmojiSmile } from "react-icons/bs";
import { BsJournalRichtext } from "react-icons/bs";
import { TbHeadset } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return (
    <Container className='stat' data-aos="fade-up" data-aos-delay="100">
        <h2>Stats</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <Row className='my-5' >
        <Col lg={3} md={6}>
          <div className="stats-item d-flex align-items-center w-100 h-100">
          <BsEmojiSmile className='stat-icon' />
            <div>
              <CountUp start={0} end={232} duration={4} className="purecounter" />
              <p>Happy Clients</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="stats-item d-flex align-items-center">
          <BsJournalRichtext className='stat-icon' />
      
            
          
            <div>
              <CountUp start={0} end={570} duration={4} className="purecounter" />
              <p>Projects</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="stats-item d-flex align-items-center w-100 h-100">
          <TbHeadset className='stat-icon'/>
            <div>
              <CountUp start={0} end={1450} duration={3} className="purecounter" />
              <p>Hours of Support</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="stats-item d-flex align-items-center w-100 h-100">
          <GoPeople className='stat-icon'/>

            <div>
              <CountUp start={0} end={16} duration={4} className="purecounter" />
              <p>Hard workers</p>
            </div>
          </div>
        </Col>
      
      </Row>
    </Container>
  );
};

export default Stats;