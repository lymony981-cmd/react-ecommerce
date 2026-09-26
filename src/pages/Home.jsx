import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=8",
        );
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      {loading == true && (
        <div className="flex items-center justify-center my-10">
          <div className="border-gray-300 h-8 rounded-full w-8 animate-spin border-4 border-t-gray-600 "></div>
        </div>
      )}

      {loading == false && (
        <div className="font-jost">
          <div style={{ backgroundImage : "url('./image/slide_02.jpg')" }}  className=" h-screen bg-center bg-cover lg:bg-contain bg-no-repeat bg-secondary px-8 lg:px-40 flex items-center">
            <div>
              <h2 className="text-xl font-bold">New Collection</h2>
              <h1 className="text-6xl lg:text-7xl font-bold">
                Luxury Without <br /> Labels
              </h1>
              <p className="text-md font-bold mt-2">
                Explore new-in product and best sellers
              </p>
              <button className="bg-primary px-8 py-2 text-white mt-2">
                view Collection
              </button>
            </div>
          </div>

          <div className="mt-20 max-w-[90%] lg:max-w-6xl mx-auto mb-20">
            <h2 className="text-center font-bold text-3xl">Best Seller</h2>
            <p className="text-center  text-xl">
              Expore our best seller product
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
              {data?.map((item) => (
                <Cart key={item.id} data={item} />
              ))}
            </div>
            <div className="flex justify-center">
              <button className="bg-transparent border-primary px-8 py-2 mt-8 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out  ">
                Expore me{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
