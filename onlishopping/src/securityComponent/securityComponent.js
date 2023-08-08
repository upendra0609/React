import react from 'react';

const SecurityComponent=()=>{

    function Hello(){
        return{
            __html: '<b>Welcome</b>'
        }
    }

    return(
        <>
          <h2 align="center">Security Test</h2>
          <div dangerouslySetInnerHTML={Hello()} align="center"></div>
        </>
    )
}

export default SecurityComponent;