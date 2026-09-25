import { Link } from "react-router-dom";
function Cart(props) {
const {data} = props
  return (
    <Link to={`/product/${data.id}`} className="border border-gray-400 rounded-xl group overflow-hidden cursor-pointer">
      <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden">
        <img
          className="object-cover group-hover:scale-110 transition-all"
          src={data.image}
          alt=""
        />
      </figure>
      <div className="px-2 py-2 ">
        <h3 className="line-clamp-1">
        {
          data.title
        }
         </h3>
        <p className="text-red-600">
           ${
            data.price
          } 
        </p>
      </div>
    </Link> 
  );
}

export default Cart;
