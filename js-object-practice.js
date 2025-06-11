// ==========================================================
// 🔥 JavaScript Object Practice | By Lucky Rafi
// Use case: Job Prep, Teaching Others, Personal Note
// ==========================================================


// ✅ Practice 1: Object Literal & Accessing Properties
const book = {
  title: 'JavaScript Hero',
  author: 'Lucky Rafi',
  pages: 350
};
console.log(book.author);         // Dot notation
console.log(book['author']);     // Bracket notation


// ✅ Practice 2: Creating User Object + Logging Values
const user = {
  name: 'Swethert Tithy',
  age: 19,
  isLoggedIn: true
};
console.log(`She ${user.name}, is loggedIn ${user.isLoggedIn}`);


// ✅ Practice 3: Add, Update, Delete, Check Properties
const mobile = {
  brand: "Samsung",
  model: "A52"
};

mobile.price = 30000;
mobile.isAvailable = true;
console.log(`Brand: ${mobile.brand}, Price: ${mobile.price}`);


const student = {
  name: "Lucky",
  department: "CSE"
};

student.batch = 28;
student.isActive = true;
student.department = "EEE";
delete student.isActive;

if (student.hasOwnProperty("batch")) {
  console.log(`Batch exists: ${student.batch}`);
} else {
  console.log('Batch not found');
}


// ✅ Practice 4: Object Method using this
const student2 = {
  name: "Tithy",
  greet() {
    return `Hello I'm ${this.name}`;
  }
};
console.log(student2.greet());


// ✅ Practice 5: Summary method
const profile = {
  name: "Lucky",
  age: 17,
  country: "Bangladesh",
  getSummary() {
    return `${this.name} is ${this.age} years old and lives in ${this.country}`;
  }
};
console.log(profile.getSummary());


// ✅ Practice 6: get & set accessors
const student3 = {
  firstName: "Tithy",
  lastName: "Moni",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(student3.fullName);


const profile2 = {
  firstName: "",
  lastName: "",
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
profile2.fullName = "Lucky Rafi";
console.log(profile2.firstName);
console.log(profile2.lastName);
console.log(profile2.fullName);


// ✅ Practice 7: Object.freeze()
const person = {
  name: "Lucky",
  country: "Bangladesh"
};

Object.freeze(person);
person.name = 'Swetheart Tithy';  // won't work
person.love = true;               // won't work
console.log(person);


// ✅ Practice 8: Object.seal()
const account = {
  holder: "Tithy",
  balance: 5000
};

Object.seal(account);
account.balance = 7000;          // ✅ allowed
account.isActive = true;         // ❌ won't add
delete account.holder;           // ❌ won't delete
console.log(account);
