import React from "react";
import reactDOM from 'react-dom';
class Other extends React.Component{
    render(){
       return reactDOM.createPortal(
        <h1>Portal Component</h1>,
        document.getElementById('other-root')
       )
    }
}
export default Other;