const element = React.createElement(
    "img",
    {
        width:'200px',
        height:'200px',
        src:'../assets/shoe.jpeg'
    }
);

ReactDOM.render(
    element,
    document.getElementById("container")
);