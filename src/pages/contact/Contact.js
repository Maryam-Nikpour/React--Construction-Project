import Header from "../../components/Header/Header"

function Contact(){
    const title='Contact'
    let breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact', current: true }
      ];
    
      return (
        <div>
          <Header title={title} breadcrumbs={breadcrumbs} />
      
        </div>
      );
}
export default Contact