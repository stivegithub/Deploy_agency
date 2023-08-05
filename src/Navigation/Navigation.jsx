import React, { useState } from "react";
import "./Navigation.css";
import { Menu, Close, DarkMode, LightMode } from "@mui/icons-material";
import image from "../digital_academy.jpeg";
import computer from "../images/computer.jpg";
import Hero from "../Hero/Hero";
import Partenaire from "../Partenaire/Partenaire";
import Footer from "../Footer/Footer";

export default function Navigation() {
  const [toggle, settoggle] = useState(false);
  const [active, setactive] = useState("");
  const [mode, setmode] = useState(false);
  const [theme, settheme] = useState("");
  const navlinks = [
    { id: "1", accueil: "Accueil", ref: "accueil" },
    { id: "2", accueil: "Contact", ref: "equipe" },
    { id: "3", accueil: "Equipe", ref: "contact" },
  ];

  const Prestation = ({ imag, title }) => {
    return (
      <>
        <div className=" shadow-xl rounded-2xl">
          <div className=" flex flex-col gap-2">
            <img
              src={imag}
              alt=""
              className=" sm:h-[474px] rounded-tl-lg rounded-tr-lg  w-full h20"
            />
            <div className=" text-center font-semibold">{title}</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <nav className=" w-full flex justify-between items-center  mx-auto fixed sm:static z-50">
        <div className=" sm:container w-full flex justify-between items-center  mx-auto bg-slate-900">
          <div className=" flex items-center gap-2">
            <img
              src={image}
              alt="images"
              className=" object-contain  w-12 h-12"
            />
            <p className=" text-white  text-[18px] font-bold cursor-pointer">
              Digital <span className=" sm:block hidden">Academy</span>
              <span className=" lg:hidden ">Academy</span>
            </p>
          </div>
          <ul className=" hidden sm:flex flex-row  list-none  gap-10">
            {navlinks.map((link) => (
              <li
                className={`${
                  active === link.accueil ? "text-white" : " text-gray-400"
                } hover:text-white text-[18px] `}
              >
                <a
                  href={`#${link.ref}`}
                  onClick={() => {
                    setactive(link.accueil);
                  }}
                >
                  {link.accueil}
                </a>
              </li>
            ))}
          </ul>
          <div className=" sm:hidden flex flex-1 justify-end items-center">
            <div
              className=" cursor-pointer"
              onClick={() => {
                settoggle(!toggle);
              }}
            >
              {toggle ? (
                <Close className=" text-white" />
              ) : (
                <Menu className=" text-white" />
              )}
            </div>
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4  bg-gradient-to-tl   absolute from-black top-12 right-0  mx-0 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className=" flex flex-col  list-none  gap-3">
              {navlinks.map((link) => (
                <li
                  className={`${
                    active === link.accueil ? "text-white" : " text-gray-400"
                  } hover:text-white text-[18px] `}
                >
                  <a
                    href={`#${link.ref}`}
                    onClick={() => {
                      setactive(link.accueil);
                    }}
                  >
                    {link.accueil}
                  </a>
                </li>
              ))}

              <li className="flex">
                <div className="">
                  {!mode ? (
                    <LightMode className=" text-yellow-300" />
                  ) : (
                    <DarkMode />
                  )}
                </div>
                <select
                  name=""
                  id=""
                  className="p-1 bg-white focus:outline-none rounded-md"
                >
                  <option className=" rounded-md">Clair</option>
                  <div className=" divide-y p3"></div>
                  <option
                    value={`stive`}
                    onChange={(e) => {
                      settheme(e.target.value);
                    }}
                  >
                    Sombre
                  </option>
                </select>
              </li>
              <li>{theme}</li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="accueil"
        className="  container  justify-content-between d-lg-flex mt-lg-5 gap-2 w-full"
      >
        <div className="  p-lg-5  flex flex-row">
          <Hero />
          <div>
            <div className=" h4 p-lg-3 text-body-emphasis sm:pt-0 pt-12 ">
              <p className=" font-semibold text-[31px]">
                Bienvenue chez{" "}
                <span>
                  {" "}
                  <span className="  boost fw-bold">Digital academy</span>
                </span>{" "}
              </p>{" "}
              Nous creons des solutions <b>Digitales</b> pour votre bussiness et
              entreprise. Ceci dans le but d'ameliorer votre presence sur les
              plateformes digitales et posseder une audiance importante sur les
              reseaux sociaux.
            </div>
            <div>
              <div className="p-lg-3 text-center mt-sm-4 ">
                <div className=" w-[200px] h-9  p-2 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer animate-bounce">
                  <a href="#services" className=" de">
                    Debuter a l'instant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-2 ">
          <img src={computer} alt="here" className=" rounded-1 w-100" />
        </div>
      </section>

      <section className="p-lg-3 mt-2 container" id="services">
        <div className=" p-lg-3 boost fw-bold display-2 text-center">
          Nos prestations
        </div>
        <div className=" grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Prestation
            imag="https://i.pinimg.com/474x/1b/aa/b8/1baab81e1f955d5c57b78aed94ee932c.jpg"
            title="Gestion des reseaux sociaux et marketing digital"
          />
          <Prestation
            imag={`https://i.pinimg.com/474x/90/47/83/9047832f956be76cf5fa104c8c62e09f.jpg`}
            title="Management et marketing digital"
          />
          <Prestation
            imag={`https://i.pinimg.com/474x/18/21/72/1821727adf7054e545497401011c5f09.jpg`}
            title={`developpement d'applications web et mobile`}
          />
        </div>
      </section>
      <div id="equipe">
        <Partenaire />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
