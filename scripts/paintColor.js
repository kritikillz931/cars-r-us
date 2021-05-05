import { getPaintColor } from "./database.js";
const paintColors = getPaintColor()

export const paintColor = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const color of paintColors) {
        html += `<li>
            <input type="radio" name="paintColor" value="${color.id}" /> ${color.color}
        </li>`
    }

    html += "</ul>"
    return html
}