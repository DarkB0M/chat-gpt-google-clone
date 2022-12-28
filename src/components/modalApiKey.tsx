import React, { useState } from "react";
import Modal from "react-modal";
import { VscError } from "react-icons/vsc";
import {onClickButton} from './functions/onClickModal'
interface ModalProps {
  isOpen: boolean;
  linkForTutorial: string;
}

const ModalApiKey: React.FC<ModalProps> = (props) => {
  const [openAikey, setOpenAiKey] = useState<string>("");
  

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        {/** Header de Aviso */}
        <div className="grid  place-items-center">
          <VscError size={80} />
          <h1 className="mt-4 text-2xl">
            Você não tem uma OpenAI key registrada aqui nesse momento
          </h1>
          <h1 className="mt-4 text-2xl">
            Aprenda a pegar uma <a href={props.linkForTutorial}>aqui</a>
          </h1>
          <div className="mt-6">
            <h1>Consegui pegar a OpenAI Key? Escrevá aqui</h1>
            <input
              type="text"
              className="w-80 mt-3 h-10 text-white rounded-md bg-blue-600 "
              value={openAikey}
              onChange={(e) => setOpenAiKey(e.target.value)}
            />
            <br />
            <button className="mt-5 ml-9 bg-blue-700 text-slate-100 w-64 h-10 rounded-lg"
              onClick={() => onClickButton(openAikey)}
            >
              Logar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalApiKey;
