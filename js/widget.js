import "./widget.css";
import helloWorld from "js_experiment_for_anywidget";

export function render({ model, el }) {
	let btn = document.createElement("button");
	btn.classList.add("anywidget_call_function_experiment-counter-button");
	btn.innerHTML = `count is ${model.get("value")}`;
	btn.addEventListener("click", () => {
		model.set("value", model.get("value") + 1);
		model.save_changes();
	});
	model.on("change:value", () => {
		btn.innerHTML = `count is ${model.get("value")}`;
		console.log(helloWorld())
	});
	el.appendChild(btn);
}
