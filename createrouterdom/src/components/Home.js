import { Link,Outlet } from "react-router-dom"
export default function Home() {

    const user = [
        {id:1,name:'user 1 detail'},
        {id:2,name:'user 2 detail'},
        {id:3,name:'user 3 detail'}
      ]
  return (
    <>
        <div style={{marginTop:100}}><h1>Home</h1></div>
        {
            user.map((item)=>{
                return(
                    <>
                    <div >
                        <Link to={`/app/${item.id}/${item.name}`} key={item.id}>{item.name}</Link>
                    </div>
                    </>
                )
            })
        }
        <Outlet/>
    </>
  )
}
