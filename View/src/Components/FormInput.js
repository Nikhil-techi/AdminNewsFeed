import React, { useRef } from "react";

function FormInput() {
  const Input = {
    Title: useRef(""),
    Body: useRef(""),
    Now: useRef(""),
    Author: useRef(""),
    ImageURL: useRef(""),
    ArticleURL: useRef(""),
  };

  return <>{Input}</>;
}

export default FormInput;
