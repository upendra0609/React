const element = React.createElement(
    "div",
    {
        className:'container',
        align:'center'
    },
    "Welcome to react.js",

    React.createElement(
        "h2",
        {
            align:'center'
        },
        "JSX Introduction"
    ),
    React.createElement(
        "p",
        null,
        "THis is paragraph"
    )
);

ReactDOM.render(
    element,
    document.getElementById("container")
);