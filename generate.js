import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCommerce = faker.commerce.productName();
// generat 1-2 data
// console.log(randomName);
// console.log(randomCommerce);
// console.log([randomName, randomEmail]);

// generate banyak data dengan perulangan
for (let i = 1; i <= 10; i++) {
  const product = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
  console.log(product);
}
