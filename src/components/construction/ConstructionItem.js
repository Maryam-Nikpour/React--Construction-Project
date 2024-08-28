
import Card from 'react-bootstrap/Card';
import './ConstructionItem.css'

function ConstructionItem({title, img , text , dataAosDelay}){
    return(
        <Card className='card-item'  data-aos="fade-up" data-aos-delay={dataAosDelay}>
      <Card.Img className='card-img' style={{height:'200px'}} src={img}/>
      <Card.Body className='card-body' >
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-text'>
         {text}
        </Card.Text>
       
      </Card.Body>
    </Card>
    )
}
export default ConstructionItem