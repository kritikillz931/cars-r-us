import { getTechnology, orderBuilder, setTechnology } from "./database.js";
const technologyPackage = getTechnology();

// document.addEventListener("click", (clickEvent) => {
//   const itemClicked = clickEvent.target;
//   if (itemClicked.id.startsWith("technology")) {
//     const [, planId] = itemClicked.id.split("--");

//     for (const plan of technologyPackage) {
//       if (plan.id === parseInt(planId)) {
//         window.alert(`user chose ${plan.type} | ${plan.features}`);
//       }
//     }
//   }
// });

// export const technology = () => {
//   let html = "<ul>";

//   // This is how you have been converting objects to <li> elements
//   for (const plan of technologyPackage) {
//     html += `<li>
//             <input type="radio" id="technology--${plan.id}" name="technology" value="${plan.id}" /> ${plan.type} | ${plan.features}
//         </li>`;
//   }

//   html += "</ul>";
//   return html;
// };

document.addEventListener(
  "change", 
  (event) => {
    if (event.target.name === "technology") {
      setTechnology(parseInt(event.target.value))
  }
}
)

export const technology = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = technologyPackage.map((technology) => {
    return `<li>
          <input type="radio" name="technology" value="${technology.id}" /> ${technology.type} | ${technology.features}
      </li>`
  })

  // Join all of the strings in the array into a single string
  html += listItems.join("")

  html += "</ul>"
  return html
}
