import {useEffect,useState} from 'react'

export default function useFetch(url) {
   
  const [data,setData] = useState([]);


  async function getData(){
      const call =await fetch(url);
      const res =await call.json();
      setData(res);
      // console.log(res)
  }

  useEffect(()=>{
    getData();
  },[url]);


  return data;
}
