class Person {
  constructor(personJSON) {
    Object.assign(this, personJSON)
  }
}

let directory = [];

fetch("https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.contacts.forEach(contact => {
      var person = new Person(contact);
      directory.push(person);
    });

    directory.sort((firstPerson, secondPerson) => {
      let lastNameOne = firstPerson.lastname.toUpperCase();
      let lastNameTwo = secondPerson.lastname.toUpperCase();
      if (lastNameOne < lastNameTwo) {
        return -1;
      };
      if (lastNameOne > lastNameTwo) {
        return 1;
      };
      return 0;
    });

    console.log(directory);
  });