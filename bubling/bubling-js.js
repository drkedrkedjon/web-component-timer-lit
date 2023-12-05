//  Seleccionar los elementos bottones
const btnGrandChild = document.getElementById("btn-grand-child");
const btnChild = document.getElementById("btn-child");
const btnFather = document.getElementById("btn-father");
const btnHiddenDiv = document.getElementById("btn-hidden-div");

//  Seleccionar los elementos DIV
const divGrandChild = document.getElementById("grand-child");
const divChild = document.getElementById("child");
const divFather = document.getElementById("father");

// Crear un evento personalizado
const bublingEvent = new Event("bublingEvent", {
  // bubbles: true,
  cancelable: true,
  // composed: true,
});

// Crear un shadowDOM en el gran child
divGrandChild.attachShadow({ mode: "open" });
const hiddenShadow = divGrandChild.shadowRoot;
const hiddenDiv = document.createElement("div");
hiddenDiv.setAttribute("id", "hidden-div");
hiddenDiv.style.padding = "1rem";
hiddenDiv.style.backgroundColor = "red";
hiddenDiv.style.color = "white";
hiddenDiv.textContent = "Hidden Div";
hiddenShadow.appendChild(hiddenDiv);

// Agregar el evento a los botones. Lo comentado es si quieres que padre dispara evento en lugar de hijo pero esta hijo en shadowDOM y el padre en el DOM y tienes tanto bubbles y composed en false.
btnGrandChild.addEventListener("click", (e) => {
  divGrandChild.dispatchEvent(bublingEvent);
});
btnChild.addEventListener("click", (e) => {
  divChild.dispatchEvent(bublingEvent);
  // divChild.parentElement.dispatchEvent(bublingEvent); Funciona, ambos estan en el DOM
});
btnFather.addEventListener("click", (e) => {
  divFather.dispatchEvent(bublingEvent);
});
btnHiddenDiv.addEventListener("click", (e) => {
  // hiddenDiv.parentElement.dispatchEvent(bublingEvent); // No funciona, padre fuera de shadowDOM
  hiddenDiv.getRootNode().host.dispatchEvent(bublingEvent); // Funciona.
  // hiddenDiv.dispatchEvent(bublingEvent); // Funciona, regular
});

// Agregar el evento a los DIV
divGrandChild.addEventListener("bublingEvent", (e) => {
  // e.stopPropagation();
  console.log("Grand Child", e.target);
});
divChild.addEventListener("bublingEvent", (e) => {
  console.log("Child", e.target);
});
divFather.addEventListener("bublingEvent", (e) => {
  console.log("Father", e.target);
});
hiddenDiv.addEventListener("bublingEvent", (e) => {
  console.log("Hidden Div", e.target);
});

// document.addEventListener("bublingEvent", (e) => {
//   alert("Document");
// });
