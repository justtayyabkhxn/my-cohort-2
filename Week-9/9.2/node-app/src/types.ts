type name = {
  firstName: string;
};

function greet(name: name) {
  console.log("Good Evening: " + name.firstName);
}

greet({
  firstName: "Tayyab",
});

type num = {
  myNum: string | number;
};

function printNum(num: num) {
  console.log(num.myNum);
}

printNum({ myNum: "45" });
printNum({ myNum: 55 });

type ans = boolean | string;

function printAns(input: ans) {
  console.log("Ans is: " + input);
}

printAns(true);
printAns("false");
