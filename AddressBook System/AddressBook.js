const Contact = require("./Contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact. Must be an instance of Contact class.");
        }


        let duplicate = this.contacts.some(
            (c) => c.firstName === contact.firstName && c.lastName === contact.lastName
        );

        if (duplicate) {
            console.log(`Contact with name ${contact.firstName} ${contact.lastName} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }

    searchByCity(city) {
        let contactsInCity = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());

        if (contactsInCity.length === 0) {
            console.log(`No contacts found in city: ${city}`);
        } else {
            console.log(`Contacts in city ${city}:`);
            contactsInCity.forEach(contact => console.log(contact.toString()));
        }
    }

    searchByState(state) {
        let contactsInState = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());

        if (contactsInState.length === 0) {
            console.log(`No contacts found in state: ${state}`);
        } else {
            console.log(`Contacts in state ${state}:`);
            contactsInState.forEach(contact => console.log(contact.toString()));
        }


        this.contacts.splice(index, 1);
        console.log(`Contact ${firstName} ${lastName} deleted successfully!`);
    }

    countContacts() {
        console.log(`Total Contacts: ${this.contacts.length}`);
        return this.contacts.length;


    viewContactsByCity() {
        let cityMap = new Map();

        this.contacts.forEach(contact => {
            if (!cityMap.has(contact.city)) {
                cityMap.set(contact.city, []);
            }
            cityMap.get(contact.city).push(contact.toString());
        });

        console.log("\nContacts grouped by City:");
        cityMap.forEach((contacts, city) => {
            console.log(`\nCity: ${city}`);
            contacts.forEach(contact => console.log(contact));
        });
    }

    viewContactsByState() {
        let stateMap = new Map();

        this.contacts.forEach(contact => {
            if (!stateMap.has(contact.state)) {
                stateMap.set(contact.state, []);
            }
            stateMap.get(contact.state).push(contact.toString());
        });

        console.log("\nContacts grouped by State:");
        stateMap.forEach((contacts, state) => {
            console.log(`\nState: ${state}`);
            contacts.forEach(contact => console.log(contact));
        });

    }
}

// Example Usage:
try {
    let addressBook = new AddressBook();

    let contact1 = new Contact(
        "John", "Doe", "123 Main St", "New York", "NewYork", "123456", "9876543210", "john.doe@example.com"
    );
    
    let contact2 = new Contact(
        "Jane", "Smith", "456 Elm St", "Los Angeles", "California", "654321", "9123456789", "jane.smith@example.com"
    );


    let contactDuplicate = new Contact(
        "John", "Doe", "789 Oak St", "Chicago", "Illinois", "987654", "9012345678", "john.duplicate@example.com"

    let contact3 = new Contact(
        "Emily", "Clark", "789 Maple St", "New York", "NewYork", "789456", "9012345678", "emily.clark@example.com"

    let contact3 = new Contact(
        "Emily", "Clark", "789 Maple St", "New York", "NewYork", "789456", "9012345678", "emily.clark@example.com"

    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.addContact(contactDuplicate); // This should be blocked as a duplicate

    addressBook.displayContacts();
    addressBook.countContacts();

    addressBook.addContact(contact3);

    addressBook.displayContacts();


    console.log("\nSearching by City 'New York':");
    addressBook.searchByCity("New York");

    console.log("\nSearching by State 'California':");
    addressBook.searchByState("California");

    console.log("\nViewing Contacts by City:");
    addressBook.viewContactsByCity();

    console.log("\nViewing Contacts by State:");
    addressBook.viewContactsByState();


} catch (error) {
    console.error(error.message);
}
