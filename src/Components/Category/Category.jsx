

const Category = ({item}) => {

    console.log(item);

    const {estate_title,segment_name,description,acilities
,image,location,price,status,facilities
} =item;


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full lg:w-96 h-96" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold text-blue-800 text-center">{estate_title}</h2>
    <p> <span className="text-2xl font-bold text-black"> description : </span> {description}</p>
    <h2 className="text-xl font-normal text-black "><span className="text-2xl  text-black font-bold">Category :</span>   {segment_name}</h2>
    
    

    <h2 className="text-xl  text-black "> <span className="text-2xl  text-black "> <span className="text-2xl  text-black font-bold">Location :</span>  {location} </span></h2>


      <div className="flex gap-1">
        <h2 className="text-2xl font-bold">Facilities : </h2>
        {
          facilities.map((item) => <p key={item}>{item}</p>
        )
        }
      </div>

    <div className="flex justify-around">

    <h2 className="text-xl font-normal text-black"> <span className="text-2xl font-normal text-black">Status : {status}</span></h2>
    <h2 className="text-xl font-normal text-black"> <span className="text-2xl font-normal text-black">Price : {price}</span></h2>
    </div>

   
  </div>
</div>
        </div>
    );
};

export default Category;