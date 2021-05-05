import { getWheels } from "./database.js";
const wheels = getWheels()

export const wheel = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.size} | ${wheel.type} | ${wheel.color}
        </li>`
    }

    html += "</ul>"
    return html
}