import React from "react";
function Login() {
  const Item = ({ name, placeholder }) => {
    return (
      <>
        <div className=" p-2  w-full">
          <div className={` focus:text-blue-500 float-left w-1/4`}>{name}</div>

          <input
            type="text"
            className=" focus:bg-white  w-3/4 bg-gray-200 rounded-md outline-none focus:outline-blue-500  p-2"
            placeholder={`${placeholder}`}
          />
        </div>
      </>
    );
  };
  const Button = ({ name }) => {
    return (
      <>
        <button className=" py-2 px-4 rounded-md bg-blue-500 text-white focus:bg-blue-800">
          {name}
        </button>
      </>
    );
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img
          src="https://i.pinimg.com/474x/58/18/dd/5818dd70b2e44626298b46096721bfce.jpg"
          alt=""
          className=" h-screen w-full "
        />
        <div className="bg-gray-100 flex items-center">
          <div className=" mx-auto">
            <div className=" text-center font-bold text-[33px] text-blue-800">
              Inscription
            </div>
            <div>
              <Item name={`Name`} placeholder={`Entrez votre nom`} />
              <Item name={`Email`} placeholder={`Entrez votre email`} />
              <Item name={`Pays`} placeholder={`Entrez votre pays`} />
              <Item name={`Ville`} placeholder={`Quelle est votre ville`} />
            </div>

            <div className=" flex flex-row-reverse">
              <div className=" pt-2 ">
                <Button name={`Envoyer`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
