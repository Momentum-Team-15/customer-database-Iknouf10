const allCustomers = document.getElementById("directory");
//Loop of each customer

function capitalizeFirstLetter(word) {
  console.log("capitalize name");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

for (let customer of customers) {
  console.log(`${customer.name.first} ${customer.name.last}`);
  let customerDiv = document.createElement("div");
  customerDiv.classList.add("person");
   //Image
   let imageCust = document.createElement("img");
   imageCust.classList.add("img");
   imageCust.src = customer.picture.large;
   customerDiv.appendChild(imageCust);
 
   //Name
 
   let nameEl = document.createElement("h3");
   nameEl.innerText = `${capitalizeFirstLetter(
     customer.name.first
   )} ${capitalizeFirstLetter(customer.name.last)}`;
   customerDiv.appendChild(nameEl);
 
   //Email
   let customerEmail = document.createElement("div");
   customerEmail.classList.add("email");
   customerEmail.innerText = `${customer.email}`;
   customerDiv.appendChild(customerEmail);
 
   //Address
   let addressEl = document.createElement("div");
   addressEl.innerText = `${customer.location.street.number}
     ${customer.location.street.name} ${customer.location.city},
     ${nameToAbbr(customer.location.state)}
     ${customer.location.postcode}`;
   customerDiv.appendChild(addressEl);
   //DOB
   //   let customerDOBP = document.createElement("p");
   //   let dateOfBirth = moment(customer.dob.date).format("MMM D, YYYY");
   //   console.log(dateOfBirth);
   //   customerDOBP.innerText = `DOB: ${dateOfBirth}`;
   //   customerDiv.appendChild(customerDOBP);
 
   let dobElement = document.createElement("div");
   let dobFormat = moment(customer.dob.date).format("MMM D, YYYY");
   dobElement.classList.add("f5", "fw4", "black", "mt0");
   dobElement.innerText = `DOB: ${dobFormat}`;
   customerDiv.appendChild(dobElement);
   //customer since
   let customerSinceElement = document.createElement("div");
   let registeredFormat = moment(customer.registered.date).format("MMM D, YYYY");
   customerSinceElement.classList.add("f5", "fw4", "black", "mt0");
   customerSinceElement.innerText = `Customer since: ${registeredFormat}`;
   customerDiv.appendChild(customerSinceElement);
 
   //   let dobEl = document.createElement("div");
   //   dobEl.innerText = `${moment(customer.dob.date).format("MMM Do YYYY")}`;
   //   customerDiv.appendChild(dobEl);
 
   //   let dorEl = document.createElement("div");
   //   dorEl.innerText = `${moment(customer.registered.date).format("MMM Do YYYY")}`;
   //   customerDiv.appendChild(dorEl);
 
   allCustomers.appendChild(customerDiv);
 }