import { useEffect } from "react";

const App_Contact = ({activeRoute,handleMenuChange}) =>{
    useEffect(()=>{
        if (window.location.pathname !== activeRoute)
        handleMenuChange(window.location.pathname);
      });  
    return<div className="page-item p-3">
    <h1 className="">I am Contact component </h1>
    <div className="vh-100"></div>
    </div>
}
export default App_Contact;