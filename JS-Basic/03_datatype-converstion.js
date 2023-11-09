// let socre = 33;

// let profileId = "356xin45";

// console.log(typeof socre);
// console.log(typeof  profileId);

// let chnageProfileId = Number(profileId);

// console.log(typeof chnageProfileId);

// console.table([socre, profileId, chnageProfileId]);


/* 
 1. JavaScript will always converte datatypes even if they are not meant to be converted 
 2. A number with letters passed as a string can also be converted to number datatype 
 3. This conbvertion will result in an error at compilation because it will auto asign value of NaN(Not a Number).
 4. Just like number you can converte string and other datatypes also.
 5. "33" => 33; / "33abd" => NaN / true = 1;  false = 0;
*/ 


// let isLoggedIn = 0;

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// console.log(booleanIsLoggedIn);


/*  
  0 => false /  1 => true;
  "" => false;
  "janak" => true;

  null = false;
  undefined => false;

  till  now  we have understood they in case boolean converstion 0 = false and any other number will give us true and in case of other datatypes if they have value assigned o them then they are true else they will be false.
*/

let dataType;

let stringDataType = String(dataType);

console.table([dataType, stringDataType]);
console.log(typeof stringDataType);

/* 
 string converstion is also the same it convertes everything to the string wheter its number null undefined 

 null => "null";
 undefined => "undefined";
 33 => "33";
 false/true => "false/true";
*/ 

