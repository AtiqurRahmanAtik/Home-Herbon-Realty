import NavigationBar from "../Navbar/NavigationBar";
import photo from '../../assets/Images/resinden.jpg';

const About = () => {
    return (
        <div className="space-y-9">
            <NavigationBar></NavigationBar>
            <h1 className="text-3xl font-bold text-center">Residential property</h1>
            <div className="card card-side bg-base-100 shadow-xl">

  <figure><img className="lg:w-[1450px] h-96 " src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Residential property</h2>
    <p>Residential property is any building or unit zoned and purposed as living space. It’s one of two general categories of real estate, the other being commercial property.

Residential property is usually owner-occupied, but not necessarily. By real estate industry convention, any properties with fewer than five units — none of which are for commercial use — are classified as residential. Larger properties and those with mixed residential and commercial use, then, qualify as commercial..</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;