const HeaderComponent = function(){
    return(
        <>
          <h1>Amazon Shopping</h1>
        </>
    )
}

const NavigationComponent = ()=>(
    <>
       <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
    </>
)

const FooterComponent = ()=>(
    <>
      <div>copyright 2023</div>
    </>
)

const MainComponent = ()=>(
    <>
      <HeaderComponent/>
      <div className="row">
        <div className="col-2">
            <NavigationComponent/>
        </div>
        <div className="col-10">
            <p>Online - Shopping</p>
        </div>
      </div>
      <FooterComponent/>
    </>
)

ReactDOM.render(
    // <>
    // <HeaderComponent/>
    // <NavigationComponent/>
    // <FooterComponent/>
    // </>
    
    <MainComponent/>,
    document.getElementById("container")
);