function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId);
    const inputFildString = inputFild.value;
    const inputFildValue = parseFloat(inputFildString);
    inputFild.value = "";
    return inputFildValue;
  }
  
  function getTextElimentById(elimentId) {
    const textEliment = document.getElementById(elimentId);
    const textElimentValueString = textEliment.innerText;
    const textElimentValue = parseFloat(textElimentValueString);
    return textElimentValue;
  }
  
  function setTextElimentValue(elimentId, newValue) {
    const textEliment = document.getElementById(elimentId);
    textEliment.innerText = newValue;
  }
  