class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageComparator(user2) {
    if (this.age > user2.age) {
      return user2.firstName + " is younger than " + this.firstName;
    } else if (this.age < user2.age) {
      return user2.firstName + " is older than " + this.firstName;
    } else {
      return user2.firstName + " and " + this.firstName + " are the same age";
    }
  }
}

const marioRossi = new User("Mario", "Rossi", "43", "Pisa");
const angelaRossi = new User("Angela", "Rossi", "27", "Torino");
const martaRossi = new User("Marta", "Rossi", "43", "Lecce");

console.log(marioRossi);
console.log(angelaRossi);
console.log(martaRossi);

//console.log(User.ageComparator(angelaRossi, marioRossi));

console.log(martaRossi.ageComparator(marioRossi));
console.log(angelaRossi.ageComparator(martaRossi));
console.log(marioRossi.ageComparator(angelaRossi));

///////////////////////////////////////////////////////////////////////

let ownerName = document.getElementById("yourName");
let petName = document.getElementById("petName");
let species = document.getElementById("species");
let breed = document.getElementById("breed");

let petList = document.getElementById("petList");
let addButton = document.getElementById("addPet");
const formNode = document.querySelector("form");

let pets = [];
formNode.onsubmit = function (e) {
  e.preventDefault();

  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.ownerName = _ownerName;
      this.petName = _petName;
      this.species = _species;
      this.breed = _breed;
    }
    isSameOwner(otherPet) {
      if (this.ownerName === otherPet.ownerName) {
        return true;
      } else {
        return false;
      }
    }
  }

  const list = function () {
    petList.innerHTML = "";
    pets.forEach((pet) => {
      const newLi = document.createElement("li");
      newLi.innerText = "Name: " + pet.petName + ", owner: " + pet.ownerName;
      petList.appendChild(newLi);
    });
  };

  addButton.onclick = function () {
    let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
    pets.push(newPet);
    list();
    petName.value = "";
    ownerName.value = "";
    species.value = "";
    breed.value = "";
  };

  console.log("form inviato");
};
