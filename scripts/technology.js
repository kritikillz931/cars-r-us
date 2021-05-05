import { getTechnology } from "./database.js";
const technologyPackage = getTechnology()

export const technology = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const plan of technologyPackage) {
        html += `<li>
            <input type="radio" name="technology" value="${plan.id}" /> ${plan.type} | ${plan.features}
        </li>`
    }

    html += "</ul>"
    return html
}