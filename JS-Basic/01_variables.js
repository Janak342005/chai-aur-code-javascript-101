// General Review of declarations
const name = "Janak";
const dob = "03/04/2005";
let accEmaiId = "janak3405@janak.com";
var accPassword = "janak34ngddj";

console.log(name);
console.log(dob);
console.log(accEmaiId);

/*
1.  Never use var because it has issues with block scope and  functional scope.
2.  variable memorey allocation can also be done without using let or var but it's not good to use it.
3.  const are variables whome we can't redclare or change its values | EX :- Name DOB Surname parents-name this things wuil never change in genera case.
4. Aways use let since it doesnt have probems with scope
5. do add comment use // or multi comment ike this one

*/

console.table([accEmaiId, accPassword, name, dob]);
