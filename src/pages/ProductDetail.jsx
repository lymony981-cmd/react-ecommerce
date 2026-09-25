 import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct.";

function ProductDetail() {
  const route = useParams();
  const {data, loading} = useGetOneProduct(route.id);

  return (
    <>
      {loading == true && (
        <div className="flex items-center justify-center my-10">
          <div className="border-gray-300 h-8 w-8 rounded-full animate-spin  border-4 border-t-gray-600"></div>
        </div>
      )}

      {loading == false && (
        <div>
          <div className="bg-gray-200 p-2 w-full font-jost">
            <div className="max-w-0-[90%] lg:max-w-5xl mx-auto flex items-center gap-2">
              <Link to={"/"}>Home</Link>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <Link to={"/products"}>Products</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-bold ">{data.category}</h1>
            </div>
          </div>

          <div className="max-w-0-[90%] lg:max-w-5xl mx-auto my-8 px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 group  items-start overflow-hidden">
              <div className="border border-gray-200 p-1 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="text-md uppercase">{data.title}</h2>
                <h1 className="text-2xl font-bold">{data.category}</h1>
                <h1 className="text-2xl font-bold mt-2 text-red-500">
                  ${data.price}
                </h1>

                <div className="flex flex-col lg:flex-row items-start  lg:items-center gap-4 my-8   ">
                  <div className="flex justify-evenly border w-32 border-gray-300 py-2 items-center ">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <button>1</button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="lg:flex flex flex-col lg:flex-row gap-2 lg:gap-4 ">
                    <button className="bg-primary px-8 py-2 cursor-pointer text-white ">
                      Add to cart
                    </button>
                    <button className="bg-yellow-600 text-white px-8 py-2 hover:bg-amber-700 cursor-pointer transition-all ease-in-out">
                      Buy Now{" "}
                    </button>
                  </div>
                </div>
                <hr className="text-gray-200" />
                <p className="text-gray-500 mt-4">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
