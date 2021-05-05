import { getWheels } from "./database.js";
const wheels = getWheels();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("wheel")) {
    const [, wheelId] = itemClicked.id.split("--");

    for (const wheel of wheels) {
      if (wheel.id === parseInt(wheelId)) {
        window.alert(`user chose ${wheel.size} ${wheel.type} ${wheel.color}`);
      }
    }
  }
});

export const wheel = () => {
  let html = "<ul>";

  // This is how you have been converting objects to <li> elements
  for (const wheel of wheels) {
    html += `<li>
            <input type="radio" id="wheel--${wheel.id}" name="wheel" value="${wheel.id}" /> ${wheel.size} | ${wheel.type} | ${wheel.color}
        </li>`;
  }

  html += "</ul>";
  return html;
};
