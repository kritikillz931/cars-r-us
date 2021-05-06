import { paintColor } from "./paintColor.js";
import { interiorColor } from "./interiorColor.js";
import { technology } from "./technology.js";
import { wheel } from "./wheels.js";
import { Orders } from "./order.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});

export const carsRUs = () => {
  return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="paintcolor options">
                <h2>Paint color</h2>
                ${paintColor()}
            </section>
            <section class="interior options">
                <h2>Interior</h2>
                ${interiorColor()}
            </section>
            <section class="technology options">
            <h2>Technology</h2>
            ${technology()}
        </section>
        <section class="wheel options">
        <h2>Wheels</h2>
        ${wheel()}
    </section>
            </article>
            
            <article>
            <button id="orderButton">Create Custom Order</button>
            
            </article>
            
            <article class="customOrders">
            <h2>Custom Detail Orders</h2>
           ${Orders()}
            </article>
            `;
};
