import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../css/App_Education.css";
const App_Education = ({ activeRoute, handleMenuChange }) => {
  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });
  return (
    <div className="page-item px-4 slide-in">
      <div className="row h-50">
        <div className="ed-sec b-tech h-100">
          <div className="mt-3 d-flex align-items-center justify-content-between gap-3">
            <div className="fs-4  text-color-accent fw-bold">B.Tech - NIET</div>
            <div>
              <div className=" fw-bold"> Computer Science </div>
              <div className="small"> June 2016 - Sept 2020</div>
            </div>
          </div>
          <div className="faded_line_horizontal"></div>
          <p>
            Noida Institute of Engineering and Technology, is a self financed
            Institute which offers quality education to students from all
            corners of the country. It is situated in Greater Noida
            <br />
            <br />I scored 76% and after my course completion, I received campus
            placement with {" "}
            <Link
              to="/experience/sapient"
              className=" text-color-accent fw-bold text-nowrap"
            >
              Publicis Sapient
            </Link>
          </p>
          <div className="h-25"></div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
        <div className="col ed-sec">
          <div className="my-3">
            <div className="fs-4  text-color-accent fw-bold">
              12<sup className="">th</sup> - RLB
            </div>
            <div className=" fw-bold"> PCM - 2016 </div>
          </div>
          <div className="faded_line_horizontal d-block d-md-none"></div>
          <p>
            Rani Laxmi Bai Memorial Senior Secondary School, is one the most
            reputed and prestigious schools in Lucknow.
            <br />
            Here I was introduced to programming for the first time. I learned
            C++ and gained some familiarity with OOPs.
            <br />I joined here in May 2014 and left with 68.4% and{" "}
            <span className="fw-bold">Passion for Programming</span>.
          </p>
        </div>
        <div className="faded_line_vertical mx-0 d-none d-md-block"></div>
        <div className="col ed-sec">
          <div className="my-3">
            <div className="fs-4  text-color-accent fw-bold">
              10<sup className="">th</sup> - Galaxy Residential
            </div>
            <div className=" fw-bold">2014</div>
          </div>
          <div className="faded_line_horizontal d-block d-md-none"></div>
          <p>
            Galaxy Residential Public School is where I got my basic foundations from.
            <br />
            Along with the academics I learned the morals and behavioral mannerism.
            <br />I did pretty well and score 10cgpa and became the Head Boy / School Captain as well.
          </p>          
        </div>
      </div>
    </div>
  );
};

export default App_Education;
