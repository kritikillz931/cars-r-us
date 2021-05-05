import { getInterior} from "./database.js";
const interiors = getInterior()

export const interior = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.color} ${interior.material}
        </li>`
    }     
    


    html += "</ul>"
    return html
}