import { Breadcrumb } from "react-bootstrap";
import MyNavbar from "../navbar/MyNavbar";
import './Header.css'

function Header({title, breadcrumbs }){
    return(
        <div className="header-section">
            
        <MyNavbar />
        <div className="overlay">
        <p className="page-title">{title}</p>
          <Breadcrumb className="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
              <Breadcrumb.Item  className="breadcrumb-item"
                key={index}
                href={breadcrumb.link}
                active={breadcrumb.current}
              >
                {breadcrumb.label}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          
        </div>
      </div>
    )
}
export default Header