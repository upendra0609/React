class ProductComponent extends React.Component{
    Name;
    Price;
    Photo;

    render(){
        return(
            <>
              <div>
                <h3>{this.props.Name}</h3>
                <img src={this.props.Photo} width={'200'} height={'200'}></img>
                <h2>{this.props.Price}</h2>
              </div>
            </>
        )
    }
}

// const MainComponent = ()=>(
//     <>
//        <ProductComponent Name={'Puma'} Price={23000} Photo={'../assets/shoe.jpeg'}/>
//        <ProductComponent Name={'Levies'} Price={32000} Photo={'../assets/shoe.jpeg'}/>
//     </>
// )

class MainComponent extends React.Component{
    render(){
        return(
            <>
            <div className="d-flex" >
                <ProductComponent Name={'Puma'} Price={23000} Photo={'../assets/shoe.jpeg'}/>
                <ProductComponent Name={'Levies'} Price={32000} Photo={'../assets/shoe.jpeg'}/>
            </div>
            
            </>
        )
    }
}

ReactDOM.render(<MainComponent/> , document.getElementById("container"));