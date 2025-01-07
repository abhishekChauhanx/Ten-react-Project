import { GoStarFill } from "react-icons/go";
import { IoBagAddSharp } from "react-icons/io5";


const Card = ({ img, star, reviews, title, prevPrice,newPrice }) => {
  return (
    <div>
        <section className="card">
          <img
            src={img}
            alt="shoes" className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <div className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <IoBagAddSharp className="bag-icons" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Card
