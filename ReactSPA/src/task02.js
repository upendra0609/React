class ClassComponent1 extends React.Component{
    render(){
        return(
            <>
               <h2>First Component</h2>
            </>
        )
    }
}

class ClassComponent2 extends React.Component{
    render(){
        return(
            <>
                <h2>Second Component</h2>
            </>
        )
    }
}

class MainComponent extends React.Component{
    render(){
        return(
            <>
               <ClassComponent1/>
               <ClassComponent2/>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)