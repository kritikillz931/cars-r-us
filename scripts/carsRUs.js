import { getInterior, getPaintColor, getTechnology, getWheels } from "./database.js";
import { paintColor } from "./paintColor.js";
import { interior } from "./interiorColor.js";
import { technology } from "./technology.js";
import { wheel } from "./wheels.js";
















export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paintcolor options">
                <h2>Paint color</h2>
                ${paintColor()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interior()}
            </section>
            <section class="choices__technology options">
            <h2>Technology</h2>
            ${technology()}
        </section>
        <section class="choices__wheel options">
        <h2>Wheels</h2>
        ${wheel()}
    </section>
            </article>
            
            <article>
            <button id="orderButton">Create Custom Order</button>
            
            </article>
            
            <article class="customOrders">
            <h2>Custom Detail Orders</h2>
            
            </article>
            `
}
            // <section class="choices__technology options">
            //     <h2>Technology</h2>
            //     ${technology()}
            // </section>
            // <section class="choices__wheels options">
            //     <h2>Wheels</h2>
            //     ${wheels()}
            //     </section>