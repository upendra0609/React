import React,{useReducer} from 'react'

var initialValue = 0;

const r = (state,action)=>{
    if(action.type=='inc'){
        return state+2;
    }else if(action.type=='dec'){
        return state-2;
    }else if(action.type=='mul'){
        return state*2;
    }else{
        return state;
    }
}

export default function UseReducer() {

    const [state , dispatch] = useReducer(r,initialValue);
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
    <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
    <button onClick={()=>dispatch({type:'mul'})}>Multiply</button>
    </>
  )
}
