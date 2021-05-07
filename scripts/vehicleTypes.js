import { getVehicleType, setVehicleType } from "./database.js";

const types = getVehicleType();

document.addEventListener("change", (event) => {
  if (event.target.name === "vehicleType") {
    setVehicleType(parseInt(event.target.value));
  }
});

export const vehicleType = () => {
  let html = "<ul>";

  const listItems = types.map((type) => {
    return `<li>
     <input type="radio" name="vehicleType" class="vehicleOption" value="${type.id}" /> ${type.type}
     </li>`;
  });
  html += listItems.join("");

  html += "</ul>";
  return html;
};
