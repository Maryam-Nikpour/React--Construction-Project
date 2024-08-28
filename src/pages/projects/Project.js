import React, { useEffect, useRef,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Isotope from "isotope-layout";
import './Project.css'
import imagesLoaded from "imagesloaded";
import Header from "../../components/Header/Header";
import pimg1 from "../../assets/images/projects/construction-1.jpg"
import pimg2 from "../../assets/images/projects/construction-2.jpg"
import pimg3 from "../../assets/images/projects/construction-3.jpg"
import pimg4 from "../../assets/images/projects/design-1.jpg"
import pimg5 from "../../assets/images/projects/design-2.jpg"
import pimg6 from "../../assets/images/projects/design-3.jpg"
import pimg7 from "../../assets/images/projects/remodeling-1.jpg"
import pimg8 from "../../assets/images/projects/remodeling-2.jpg"
import pimg9 from "../../assets/images/projects/remodeling-3.jpg"
import pimg10 from "../../assets/images/projects/repairs-1.jpg"
import pimg11 from "../../assets/images/projects/repairs-2.jpg"
import pimg12 from "../../assets/images/projects/repairs-3.jpg"
import { GoZoomIn } from "react-icons/go";


function Project() {
  const title = 'Projects';
  const isotopeGrid = useRef(null);
  const [activeFilter, setActiveFilter] = useState('*');
  

  let breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Projects', current: true }
  ];

  useEffect(() => {
    let iso;
    
    imagesLoaded(isotopeGrid.current, () => {
      iso = new Isotope(isotopeGrid.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        filter: '*'
      });
    });

    return () => iso?.destroy();
  }, []);

  const filterItems = (filter) => {
    setActiveFilter(filter); 
    const iso = Isotope.data(isotopeGrid.current);
    iso.arrange({ filter });
  };

  return (
    <div>
      <Header title={title} breadcrumbs={breadcrumbs} />
      <Container>
      <Row>
      <ul className="portfolio-filters isotope-filters">
            <li 
              className={activeFilter === '*' ? 'filter-active' : ''}
              onClick={() => filterItems('*')}
            >
              All
            </li>
            <li 
              className={activeFilter === '.filter-remodeling' ? 'filter-active' : ''}
              onClick={() => filterItems('.filter-remodeling')}
            >
              Remodeling
            </li>
            <li 
              className={activeFilter === '.filter-construction' ? 'filter-active' : ''}
              onClick={() => filterItems('.filter-construction')}
            >
              Construction
            </li>
            <li 
              className={activeFilter === '.filter-repairs' ? 'filter-active' : ''}
              onClick={() => filterItems('.filter-repairs')}
            >
              Repairs
            </li>
            <li 
              className={activeFilter === '.filter-design' ? 'filter-active' : ''}
              onClick={() => filterItems('.filter-design')}
            >
              Design
            </li>
          </ul>
        </Row>
   

        <Row className="isotope-grid" ref={isotopeGrid}>
          <Col lg={4} md={6} className="portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src={pimg1} className="img-fluid" alt="Remodeling Project 1" />
              <div className="portfolio-info">
                <h4> Project 1</h4>
                <p>Description of Remodeling Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src={pimg2} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 2</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src={pimg3} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 3</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src={pimg4} className="img-fluid" alt="Design Project 1" />
              <div className="portfolio-info">
                <h4> Project 4</h4>
                <p>Description of Design Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src={pimg5} className="img-fluid" alt="Design Project 1" />
              <div className="portfolio-info">
                <h4> Project 5</h4>
                <p>Description of Design Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src={pimg6} className="img-fluid" alt="Design Project 1" />
              <div className="portfolio-info">
                <h4> Project 6</h4>
                <p>Description of Design Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src={pimg7} className="img-fluid" alt="Design Project 1" />
              <div className="portfolio-info">
                <h4> Project 7</h4>
                <p>Description of Design Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src={pimg8} className="img-fluid" alt="Design Project 1" />
              <div className="portfolio-info">
                <h4> Project 8</h4>
                <p>Description of Design Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src={pimg9} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 9</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src={pimg10} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 10</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src={pimg11} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 11</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src={pimg12} className="img-fluid" alt="Repairs Project 1" />
              <div className="portfolio-info">
                <h4> Project 12</h4>
                <p>Description of Repairs Project 1</p>
                <a href={pimg1} target="_blank" class="preview-link"><GoZoomIn /></a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Project;