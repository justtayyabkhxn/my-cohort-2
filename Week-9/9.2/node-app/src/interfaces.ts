interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User): boolean {
  if (user.age > 18) return true;
  else return false; 
}

function greetUser(user: User): void {
  console.log("Hello " + user.firstName + " " + user.lastName);
}

const user: User = {
  firstName: "Tayyab",
  lastName: "Khan",
  age: 1,
};

function main() {
  if (isLegal(user)) greetUser(user);
  else console.log("User illegal");
}

main();
