import React from "react";
import "./Loader.css";
import styled from "styled-components";

const Conteiner = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
`;

const SubConteiner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 74px;
  height: 74px;
  margin: 10px;
  border: 10px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
`;

//loading.io --> loader animados
const Loader = () => {
  return (
    <div>
      <Conteiner>
        <SubConteiner></SubConteiner>
        <SubConteiner></SubConteiner>
        <SubConteiner></SubConteiner>
        <SubConteiner></SubConteiner>
        <SubConteiner></SubConteiner>
        <SubConteiner></SubConteiner>
      </Conteiner>
    </div>
  );
};

export default Loader;
