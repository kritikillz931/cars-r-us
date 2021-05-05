import { getInterior} from "./database.js";
const interiors = getInterior()


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("interior")) {
        const [, styleId] = itemClicked.id.split("--");
        
        for (const style of interiors) {
            if (style.id === parseInt(styleId)) {
                window.alert(`user chose ${style.color} ${style.material}`);
            }
        }
    }
});










export const interior = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `<li>
            <input type="radio" id="interior--${interior.id}" name="interior" value="${interior.id}" /> ${interior.color} ${interior.material}
        </li>`
    }     
    


    html += "</ul>"
    return html
}