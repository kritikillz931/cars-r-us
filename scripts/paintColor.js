import { getPaintColor, setPaintColor } from "./database.js";
const paintColors = getPaintColor();

// document.addEventListener("click", (clickEvent) => {
//   const itemClicked = clickEvent.target;
//   if (itemClicked.id.startsWith("paintColor")) {
//     const [, colorId] = itemClicked.id.split("--");

//     for (const color of paintColors) {
//       if (color.id === parseInt(colorId)) {
//         window.alert(`user chose ${color.color} paint`);
//       }
//     }
//   }
// });

// export const paintColor = () => {
//   let html = "<ul>";

//   // This is how you have been converting objects to <li> elements
//   for (const color of paintColors) {
//     html += `<li>
//             <input type="radio" id="paintColor--${color.id}" name="paintColor" value="${color.id}" /> ${color.color}
//         </li>`;
//   }

//   html += "</ul>";
//   return html;
// };


document.addEventListener(
  "change", 
  (event) => {
    if (event.target.name === "paintColor") {
    setPaintColor(parseInt(event.target.value))
  }
}
)

export const paintColor = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = paintColors.map((paintColor) => {
    return `<li>
          <input type="radio" name="paintColor" value="${paintColor.id}" /> ${paintColor.color}
      </li>`
  })

  // Join all of the strings in the array into a single string
  html += listItems.join("")

  html += "</ul>"
  return html
}
