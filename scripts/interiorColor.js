import { getInterior, setInterior } from "./database.js";

const interiors = getInterior();

document.addEventListener("change", (event) => {
  if (event.target.name === "interior") {
    setInterior(parseInt(event.target.value));
  }
});

export const interiorColor = () => {
  let html = "<ul>";

  const listItems = interiors.map((interior) => {
    return `<li>
          <input type="radio" name="interior" value="${interior.id}" /> ${interior.color} ${interior.material}
      </li>`;
  });

  html += listItems.join("");

  html += "</ul>";
  return html;
};
