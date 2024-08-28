import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Form.css'
function MyForm(){
    return(
        <Form className='email-form ' data-aos="fade-up" data-aos-delay="100" >
            <h3>Get a quote</h3>
            <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <div className="d-flex justify-content-center">
        <Button >Get a quote</Button>
        </div>
     
      </Form>
    )

}
export default MyForm