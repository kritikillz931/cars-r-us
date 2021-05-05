import { getTechnology } from "./database.js";
const technologyPackage = getTechnology();


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("technology")) {
        const [, planId] = itemClicked.id.split("--");
        
        for (const plan of technologyPackage) {
            if (plan.id === parseInt(planId)) {
                window.alert(`user chose ${plan.type} | ${plan.features}`);
            }
        }
    }
});


export const technology = () => {
  let html = "<ul>";

  // This is how you have been converting objects to <li> elements
  for (const plan of technologyPackage) {
    html += `<li>
            <input type="radio" id="technology--${plan.id}" name="technology" value="${plan.id}" /> ${plan.type} | ${plan.features}
        </li>`;
  }

  html += "</ul>";
  return html;
};
