import React,{useContext,useState,useEffect} from 'react'
import { appStore } from '../App';

export default function CompC() {

    const data = useContext(appStore);
    const [value, setValue] = useState("Ashish");

    useEffect(()=>{
        data(value)
    },[data])

  return (
    <div>
        <h1>CompC</h1>
    </div>
  )
}
