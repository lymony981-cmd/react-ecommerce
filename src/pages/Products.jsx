
import Cart from "../components/Cart";

import useGetAllProduct from "../hooks/useGetAllProduct";
function Products() {
  const {data , loading} = useGetAllProduct();
  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto my-8 ">
      <h1 className="text-center text-3xl uppercase">ALL Products</h1>
      {
      loading == true && (
        <div className="flex items-center justify-center my-10">
            <div className="flex items-center gap-1">
                <div className="border-gray-300 h-8 w-8 rounded-full border-4 border-t-gray-600"></div>
            </div>
        </div>
      )}
      {
      loading == false && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {data?.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
          
        </div>
      )}
    </div>
  );
}

export default Products;
