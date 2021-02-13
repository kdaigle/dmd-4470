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

    let phonebookList = document.getElementById("phonebookList");
    directory.forEach((person) => {
      let personDiv = document.createElement("div");
      let personNameHeader = document.createElement("h3");
      personNameHeader.innerText = `${person.firstname} ${person.lastname}`
      personDiv.appendChild(personNameHeader);
      let personTitle = document.createElement("p");
      personTitle.className = "title";
      personTitle.innerText = person.title;
      personDiv.appendChild(personTitle);
      let personContactDetails = document.createElement("p");
      personContactDetails.className = "contactDetails";
      personContactDetails.innerHTML = `<a href='mailto:${ person.email }'>${person.email}</a> ${person.phone}`;
      personDiv.appendChild(personContactDetails);
      let personDOB = document.createElement("p");
      personDOB.className = "dateOfBirth";
      personDOB.innerText = person.birthdate;
      personDiv.appendChild(personDOB);
      phonebookList.appendChild(personDiv);
    });
  });