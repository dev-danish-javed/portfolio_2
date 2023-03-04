import React, { Component, useEffect } from "react";
const App_Education = ({activeRoute,handleMenuChange}) => {
  useEffect(()=>{
    if (window.location.pathname !== activeRoute)
    handleMenuChange(window.location.pathname);
  });  
  return (
    <div className="page-item p-3">
      <h1 className="">I am Education component</h1>
      <div className="vh-100"></div>
    </div>
  );
};

export default App_Education;
