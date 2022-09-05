import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/fontawesome-free-solid";
export default function HouseList({ houses, data }) {
  return (
    <div className="main">
      {data.map((house) => (
        <div className="container">
          <div>
            <img src={house.image} alt="" className="house_image" />
          </div>
          <div>
            <p className="house_price">
              ${house.price}
              <span className="house_price_per_month">/month</span>
            </p>
            <p className="house_name">{house.name}</p>
            <p className="house_address">{house.address}</p>
            <div className="house_amenities">
              <span>
                <FontAwesomeIcon icon={faBed} className="icon" />{" "}
                {house.bedrooms} Beds
              </span>
              <span>
                <FontAwesomeIcon icon={faBath} className="icon" />{" "}
                {house.bathrooms} Bathrooms
              </span>
              <span>{house.surface}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
