import React from "react";

export function WithoutJSXComponent(){
    return(
        
        React.createElement("h1",
        {style:{backgroundColor:'red',textAlign:'center'}},
        "H1 tag",React.createElement("h5",{style:{backgroundColor:'blue',textAlign:'center'}},"h5 tag")
        )
        
    );
}