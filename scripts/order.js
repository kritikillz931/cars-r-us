import {
  getInterior,
  getPaintColor,
  getTechnology,
  getWheels,
  getOrders,
  getVehicleType,
} from "./database.js";

const interiors = getInterior();
const colors = getPaintColor();
const technologyPackage = getTechnology();
const wheels = getWheels();
const vehicles = getVehicleType();

export const buildOrderListItem = (order) => {
  console.log(order);
  const foundInteriorColor = interiors.find((interior) => {
    console.log(interior);
    return interior.id === order.interiorId;
  });
  const foundPaintColor = colors.find((color) => {
    return color.id === order.paintColorId;
  });
  const foundTechnology = technologyPackage.find((technology) => {
    return technology.id === order.technologyId;
  });
  const foundWheels = wheels.find((wheel) => {
    return wheel.id === order.wheelsId;
  });
  const foundVehicleType = vehicles.find((vehicle) => {
    return vehicle.id === order.vehicleTypeId;
  });
  let totalCost =
    foundInteriorColor.price +
    foundPaintColor.price +
    foundTechnology.price +
    foundWheels.price;
  if (foundVehicleType.id === 1) {
    totalCost;
  } else if (foundVehicleType.id === 2) {
    totalCost *= 1.5;
  } else if (foundVehicleType.id === 3) {
    totalCost *= 2.25;
  }
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
        Order #${order.id} cost ${costString} ${new Date(
    order.timestamp
  ).toLocaleString()}
    </li>`;
};

export const Orders = () => {
  const order = getOrders();

  let html = "<ul>";

  const listItems = order.map((order) => {
    return buildOrderListItem(order);
  });
  html += listItems.join("");
  html += "</ul>";

  return html;
};
