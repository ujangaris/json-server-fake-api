import { faker } from '@faker-js/faker';
// import file system
import fs from 'fs';

// generat 1-2 data
const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCommerce = faker.commerce.productName();
// console.log(randomName);
// console.log(randomCommerce);
// console.log([randomName, randomEmail]);

// generate banyak data dengan perulangan for
// tampung data perulangan kedalam sebuah array produts
// deklarasi array kosong
const products = [];
for (let i = 1; i <= 10; i++) {
  const product = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
  //   console.log(product);
  products.push(product);
}
console.log(products);

// buat data projection lagi yakni customer
// deklarasi array kosong customers
const customers = [];
for (let i = 1; i <= 10; i++) {
  const customer = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    country: faker.address.city(),
  };
  //   console.log(product);
  customers.push(customer);
}
console.log(customers);

// panggil file system
fs.writeFileSync(
  'commerce.json',
  JSON.stringify({ products, customers }, null, 2)
);
