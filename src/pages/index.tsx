import ModalApiKey from "../components/modalApiKey";
import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo";
import { RouterDirect } from "../components/functions/RouterDirect";
export default function Home() {
  // Chave da api key que fornecemos no input do modal
  const [modalApiKey, setModalApiKey] = useState<boolean>(false);
  // Valor do input de pesquisa
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    if (localStorage.getItem("api-key") == undefined) {
      console.log("no have api key");
      setModalApiKey(true);
    } else {
      console.log("have api-key setting modal off");
      setModalApiKey(false);
    }
  }, []);
  return (
    <>
      <ModalApiKey isOpen={modalApiKey} linkForTutorial="" />
      <div className="sm:grid place-items-center ">
        {/* Logo */}
        <div className="sm:mt-12 h-8 md:h-96">
          <Logo className="sm:h-80 mb-0 " />
          <br />
          <input
            type="text"
            className="sm:w-96 h-12 text-2xl rounded-xl bg-gray-200 absolute top-80 mt-2 ml-36"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <br />
          <button
            className="sm:ml-64  h-12 w-48 text-3xl bg-gray-400 "
            onClick={() => RouterDirect(inputValue)}
          >
            Enviar  
          </button>
        </div>
      </div>
    </>
  );
}
