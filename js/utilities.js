function getInputValueById(inputId) {
    const getInputField = document.getElementById(inputId);
    const getInputValue = parseFloat(getInputField.value);

    getInputField.value = "";
    return getInputValue;
  }

  function getElementValueById(elementId) {
    const getElementField = document.getElementById(elementId);

    const getElementValue = parseFloat(getElementField.innerText);
    console.log(getElementValue);
    return getElementValue;
  }

  function setElementValueById(elementId, totalAmount) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = totalAmount;
  }