var subTitle = "Online Shopping";

class HeaderComponent extends React.Component{
    title = "Flipkart Shopping";
    render(){
        return(
            <>
               <h1>{this.title} - {subTitle}</h1>
            </>
        )
    }
}

class NavComponent extends React.Component{
    render(){
        return(
            <>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </>
        )
    }
}

class FooterComponent extends React.Component{
    render(){
        return(
            <>
                <div>copyright 2023</div>
            </>
        )
    }
}

class MainComponent extends React.Component{
    render(){
        return(
            <>
                <HeaderComponent/>
                <NavComponent/>
                <FooterComponent/>
            </>
        )
    }
}


ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)