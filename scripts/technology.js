import { getTechnology, orderBuilder, setTechnology } from "./database.js";
const technologyPackage = getTechnology();

document.addEventListener("change", (event) => {
  if (event.target.name === "technology") {
    setTechnology(parseInt(event.target.value));
  }
});

export const technology = () => {
  let html = "<ul>";

  const listItems = technologyPackage.map((technology) => {
    return `<li>
          <input type="radio" name="technology" value="${technology.id}" /> ${technology.type} | ${technology.features}
      </li>`;
  });

  html += listItems.join("");

  html += "</ul>";
  return html;
};
