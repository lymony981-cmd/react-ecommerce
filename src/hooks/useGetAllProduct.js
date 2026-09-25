import axios from "axios";
import { useState , useEffect } from "react";
const useGetAllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
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

  return {
    data , 
    loading,
  };
};

export default useGetAllProduct