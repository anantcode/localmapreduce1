const list = [
    { firstName: "Otter", lastName: "title", age: 18 },
    { firstName: "Ugnfdog", lastName: "title", age: 34 },
    { firstName: "Ubhgj", lastName: "title", age: 34 },
    { firstName: "Oyytgr", lastName: "title", age: 40 },
];

const ageWiseStregth = list.reduce((acc, curr) => {
    if (acc[curr.age]) acc[curr.age] = acc[curr.age] + 1;
    else acc[curr.age] = 1;
    return acc;
}, {});

console.log(ageWiseStregth);
console.log("ANANT");
console.log(list);

// First name of all people whose age is >= 30

const peopleOver30 = list.filter((person) => {
    return person.age >= 30;
});

console.log(`peopleOver30 \n${JSON.stringify(peopleOver30)}`);

//chaining
const firstNameOfPeopleOver30 = list
    .filter((x) => x.age >= 30)
    .map((person) => person.firstName);
console.log(
    `firstNameOfPeopleOver30 ${JSON.stringify(firstNameOfPeopleOver30)}`
);

// <30 but exercise Using Reduce:

const lessThan30FirstName = list
    .filter((x) => x.age < 30)
    .reduce((acc, curr) => {
        acc.push(curr.firstName);
        return acc;
    }, []);

console.log(`lessThan30FirstName ${JSON.stringify(lessThan30FirstName)}`);
