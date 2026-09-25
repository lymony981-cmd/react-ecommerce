import { useState , useEffect } from "react";   
import axios from "axios";
const GetOneProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
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
  }, [id]); // watch

  return {
    data ,
    loading,
  };
};

export default GetOneProduct;
