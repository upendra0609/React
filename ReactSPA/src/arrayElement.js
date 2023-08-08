var categories = ["Electronics","Footwear","Fashion"];

const element = (
    <>
      <h2>Category List</h2>
      <ol>
        {
            categories.map(function(category){
                return <li>category</li>
            })
        }
      </ol>
    </>
);

ReactDOM.render(
    element,
    document.getElementById("container")
);