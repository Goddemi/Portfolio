import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = () => {};
//   url: string,
//   loading: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios(url);
//       const result = await response.data;
//       setData(result);
//       loading(false);
//     };

//     fetchData().catch(console.error);

//     return data;
//   }, [url]);
// };
