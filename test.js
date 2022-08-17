const Employee = require('./employee');
const Manager = require('./manager');

let hobbes;
let calvin;
let susie;
let lily;
let clifford;

hobbes = new Manager('hobbes', 1000000, 'Founder');
calvin = new Manager('calvin', 130000, 'Director', hobbes);
susie = new Manager('susie', 100000, 'TA Manager', calvin);
lily = new Employee('lily', 90000, 'TA', susie);
clifford = new Employee('clifford', 90000, 'TA', susie);

console.log(hobbes.calculateBonus(0.05));
console.log(calvin.calculateBonus(0.05));
console.log(susie.calculateBonus(0.05));
console.log(lily.calculateBonus(0.05));
console.log(clifford.calculateBonus(0.05));
