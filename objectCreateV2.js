var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function createContact (name,lastName,phone,likes) {
/*
var name = prompt('Enter name');
var lastName = prompt('Enter surname');
var phone = prompt('Enter phone number');
var likes = prompt('Enter likes');
*/
  contacts.push({
     "firstName": name,
     "lastName": lastName,
     "number": phone,
     "likes": [likes],
   });
  return contacts;
}

createContact("Deniz","Orsel","05325404897",["js","c++","html"]);
console.log(contacts);
