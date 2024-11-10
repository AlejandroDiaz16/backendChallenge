const path = require('path');
const fs = require('fs');

// Get All products with charges By customer
function getAllProducts () {
  // get data
  const productsAssignment = JSON.parse(fs.readFileSync(path.join(__dirname, '../mockup/product_assignment.json'), 'utf-8'));
  const productsCharges = JSON.parse(fs.readFileSync(path.join(__dirname, '../mockup/product_charges.json'), 'utf-8'));
  
  const customers = {};

  productsAssignment.forEach(product => {
    // Create the customer in our dictionary if not exist
    if(!customers[product.reservation_uuid]) {
      customers[product.reservation_uuid] = {
        reservation_uuid: product.reservation_uuid,
        products: []
      }
    }
    // Find the charges associated to the product and assign them if exist
    const charges = productsCharges.find(charge => charge.special_product_assignment_id == product.id)
    
    // Assign products to the customer
    customers[product.reservation_uuid].products.push({
      id: product.id,
      name: product.name,
      charge: charges ? charges.amount : null,
      active: charges && charges.active
    });
  });

  const customersArray = Object.values(customers)
  // console.log('final data', customersArray)
  return customersArray
}

module.exports = {
    getAllProducts
}