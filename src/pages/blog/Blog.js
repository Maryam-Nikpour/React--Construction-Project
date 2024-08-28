import Header from "../../components/Header/Header"
function Blog(){
    const title='Blog';
    let breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog', current: true }
      ];
    
      return (
        <div>
          <Header title={title} breadcrumbs={breadcrumbs} />
      
        </div>
      );
}
export default Blog