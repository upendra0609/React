function EventFunctionDemo(){
    function InsertClick(){
        alert(`Inserted`);
    }

    return(
        <>
          <button onClick={InsertClick}>Insert</button>
        </>
    )
}


class EventClassDemo extends React.Component{
    DeleteClick(){
        alert(`Record Deleted`);
    }
    render(){
        return(
            <>
             <button onClick={this.DeleteClick}>Delete</button>
            </>
        )
    }
}

class MainComponent extends React.Component{
    render(){
        return(
            <>
              <EventClassDemo/>
              <EventFunctionDemo/>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)