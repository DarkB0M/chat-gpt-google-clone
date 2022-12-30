import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsPersonCircle } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { Configuration, OpenAIApi } from "openai";
import { RiLoaderLine } from "react-icons/ri";
const SearchPage = () => {
  // pega os parametros na url
  // exemplo: localhost:3000/search?query="Hello world"
  const { query } = useRouter();
  // O Prompt da Pesquisa
  const QueryString = query.query;
  const [chatPrompt, setChatPrompt] = useState<string>("");
  async function OpenAiGet() {
    const openAiApiKey = localStorage.getItem("api-key");
    const configuration = new Configuration({
      apiKey: openAiApiKey,
      
    });

    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: QueryString,
      max_tokens:1000
    });

    //@ts-ignore
    setChatPrompt(completion.data.choices[0].text);
    console.log(completion.data.choices)
  }
  //@ts-ignore
  useEffect(() => {
    OpenAiGet();
  }, []);

  const isLoadingQuery =
    QueryString === "" ? (
      <RiLoaderLine className="animate-spin" size={30} />
    ) : (
      QueryString
    );
        // Verifica se esta carregando o chat 
    const isLoadingChatPrompt =  chatPrompt === "" ? (
        <RiLoaderLine className="animate-spin" size={30} />
      ) : (
        chatPrompt
      );
  return (
    <div>
      <div className="flex flex-row ">
        <BsPersonCircle className="md:mt-9 ml-16 sm:mt-14 ml-4" size={30} />
        <h1 className="md:mt-10 ml-7 sm:mt-[60px] ml-4 ">{isLoadingQuery}</h1>
      </div>
      {/* Resposta do ChatGPT */}
      <div className="flex flex-row">
        <FaRobot className="md:mt-9 ml-16 sm:mt-6 ml-4" size={30} />
        <h1 className="md:mt-10 ml-7 sm:mt-[27px] ml-4 ">{isLoadingChatPrompt}</h1>
      </div>
    </div>
  );
};

export default SearchPage;
