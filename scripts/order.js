import { getInterior, getPaintColor, getTechnology, getWheels, getOrders, } from "./database.js"



const interiors = getInterior()
const colors = getPaintColor()
const technologyPackage = getTechnology()
const wheels = getWheels()




export const buildOrderListItem = (order) => {
    console.log(order)
    const foundInteriorColor = interiors.find(

        (interior) => {
            console.log(interior)
            return interior.id === order.interiorId
        }
         
    )
    const foundPaintColor = colors.find(
        (color) => {
            return color.id === order.paintColorId
        }
    )
    const foundTechnology = technologyPackage.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const totalCost = foundInteriorColor.price + foundPaintColor.price + foundTechnology.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString} ${new Date(order.timestamp).toLocaleString()}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const order = getOrders()

    let html = "<ul>"

    const listItems = order.map(order => {

        return buildOrderListItem(order)
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}