import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch"
const Base_URL= "http://localhost:8800"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`${Base_URL}/api/hotels?featured=true&limit=4`);


  return (
    <div className="fp">
      {loading?"loding...":<>
      { data.map((item)=>( <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
          />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        {item.rating &&<div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div> ))}
      </>}
    </div>
  );
};

export default FeaturedProperties;
