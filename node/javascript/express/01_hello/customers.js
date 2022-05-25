const list = [
  {
    id: 1,
    firstName: 'Oneil',
    lastName: 'Johnson',
    age: 49
  },
  {
    id: 2,
    firstName: 'Lindsey',
    lastName: 'William',
    age: 25
  },
  {
    id: 3,
    firstName: 'Douglas',
    lastName: 'Tran',
    age: 47
  },
  {
    id: 4,
    firstName: 'Alana',
    lastName: 'Pace',
    age: 20
  },
  {
    id: 5,
    firstName: 'Alston',
    lastName: 'Hogan',
    age: 28
  },
  {
    id: 6,
    firstName: 'Simmons',
    lastName: 'Hancock',
    age: 44
  },
  {
    id: 7,
    firstName: 'Doreen',
    lastName: 'Frederick',
    age: 46
  }
];

function find(id) {
  const index = list.findIndex((c) => c.id === id);
  if (index === -1) return { customer: undefined, index };
  return { customer: list[index], index };
}

function validate(customer) {
  if (isNaN(customer.id)) return 'id is required and should be a number value';
  if (!customer.firstName || typeof customer.firstName != 'string')
    return 'firstName is required and should be a string value';
  if (!customer.lastName || typeof customer.lastName != 'string')
    return 'lastName is required and should be a string value';
  if (isNaN(customer.age)) return 'age is required and should be a number value';
  return undefined;
}

function create(customer) {
  customer.id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
  list.push(customer);
  return customer;
}

function update(customer, data) {
  customer.firstName = data.firstName;
  customer.lastName = data.lastName;
  customer.age = data.age;
  return customer;
}

function remove(index) {
  list.splice(index, 1);
}

module.exports = { list, find, validate, create, update, remove };
