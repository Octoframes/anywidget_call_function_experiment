function setValue(my_el, model) {
  my_el.innerHTML = `Hello ${model.get("value")}`;
}

export function render({ model, el }) {
  let div = document.createElement("div");
  div.classList.add("my-div");
  el.appendChild(div);

  setValue(div, model);

  model.on("change:value", () => {
    setValue(div, model);
  });
}
