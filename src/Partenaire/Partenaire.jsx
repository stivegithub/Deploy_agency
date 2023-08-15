import React from "react";
import "./Partenaire.css";
import master from "../images/master.jpeg";
import info from "../images/info.jpeg";
import stive from "../images/stive.jpeg";

export default function Partenaire({ ColorText }) {
  const Items = ({ source, domaine, name }) => {
    return (
      <>
        <div className="" style={{ width: "200px" }}>
          <div className=" text-center">
            {" "}
            <img
              src={source}
              alt=""
              className=" rounded-circle"
              width="160px"
              height="160px"
            />
          </div>
          <div className=" text-center">
            <b className={`${ColorText("text-gray-300")}`}>{name}</b>
          </div>
          <div className={`text-center hell ${ColorText("text-white")}`}>
            {domaine}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" p-lg-3 boost fw-bold display-2 text-center">
        Notre Equipe
      </div>
      <div
        className={`card container overflow-x-scroll mt-sm-3 ${ColorText(
          "bg-slate-800"
        )}`}
      >
        <div className=" card-body p-3 ">
          <div className="d-flex p-lg-5 mil justify-content-between">
            <Items
              source={master}
              domaine="createur de contenu mister university  "
              name="Ruben Fullstop"
            />
            <Items
              source={info}
              domaine="Expert en strategie d'influence et marketing digital"
              name="Tekeu jordan"
            />
            <Items
              source={stive}
              domaine="Developpeur d'applications web et mobile"
              name="Stive Fossi"
            />
          </div>
        </div>
      </div>
    </>
  );
}
