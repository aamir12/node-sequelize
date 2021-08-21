const sequelize = require("../utils/database");
const Customer = require("./customer");
const Order = require("./order");

let customerId = null;
sequelize
  .sync({ force: true })
  // .sync()
  .then((result) => {
    return Customer.create({ name: "Chandler Bing", email: "cb@gmail.com" });
    console.log(result);
  })
  .then((customer) => {
    customerId = customer.id;
    console.log("First Customer Created: ", customer);
    return customer.createOrder({ total: 45 });
  })
  .then((order) => {
    console.log("Order is : ", order);
    return Order.findAll({ where: customerId });
  })
  .then((orders) => {
    console.log("All the Orders are : ", orders);
  })
  .catch((err) => {
    console.log(err);
  });