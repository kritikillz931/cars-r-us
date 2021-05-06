const database = {
  paintColor: [
    {
      id: 1,
      color: "Silver",
      price: 500,
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 400,
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 200,
    },
    {
      id: 4,
      color: "Spring Green",
      price: 700,
    },
  ],
  interior: [
    {
      id: 1,
      color: "Beige",
      material: "Fabric",
      price: 100,
    },
    {
      id: 2,
      color: "Charcoal",
      material: "Fabric",
      price: 100,
    },
    {
      id: 3,
      color: "White",
      material: "Leather",
      price: 100,
    },
    {
      id: 4,
      color: "Black",
      material: "Leather",
      price: 100,
    },
  ],
  technology: [
    {
      id: 1,
      type: "Basic Package",
      features: "Basic Sound System",
      price: 100,
    },
    {
      id: 2,
      type: "Navigation Package",
      features: "Includes Integrated Navigation Controls",
      price: 200,
    },
    {
      id: 3,
      type: "Visibility Package",
      features: "Includes Side And Rear Cameras",
      price: 300,
    },
    {
      id: 4,
      type: "Ultra Package",
      features: "Includes Navigation And Visibility Packages",
      price: 500,
    },
  ],
  wheels: [
    {
      id: 1,
      size: 17,
      type: "Radial",
      color: "Silver",
      price: 100,
    },
    {
      id: 2,
      size: 17,
      type: "Radial",
      color: "Black",
      price: 100,
    },
    {
      id: 3,
      size: 18,
      type: "Spoke",
      color: "Silver",
      price: 100,
    },
    {
      id: 4,
      size: 18,
      type: "Spoke",
      color: "Black",
      price: 100,
    },
  ],
  customOrders: [
    {
      id: 1,
      paintColorId: 3,
      interiorId: 2,
      technologyId: 3,
      wheelsId: 1,
      timestamp: 1614659931693,
    },
  ],
  orderBuilder: {
    
  },
};

export const getPaintColor = () => {
  return [...database.paintColor];
};

export const getInterior = () => {
  return [...database.interior];
};

export const getTechnology = () => {
  return [...database.technology];
};

export const getWheels = () => {
  return [...database.wheels];
};

export const setPaintColor = (id) => {
      database.orderBuilder.paintColorId = id

};

export const setInterior = (id) => {
      database.orderBuilder.interiorId = id
};

export const setTechnology = (id) => {
      database.orderBuilder.technologyId = id
};

export const setWheels = (id) => {
      database.orderBuilder.wheelsId = id
};

export const getData = () => {
  return [...database];
};

export const orderBuilder = () => {
    return orderBuilder
}

export const addCustomOrder = () => {
  const newOrder = { ...database.orderBuilder };
  newOrder.id = [...database.customOrders].pop().id + 1;
  newOrder.timestamp = Date.now();
  database.customOrders.push(newOrder);
  database.orderBuilder = {};
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getOrders = () => {
  return [...database.customOrders]
}
