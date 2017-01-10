window.onload = function(){

  /****************************************************
    The 'const'
  *****************************************************/
  /*
  const pi = 3.1415;

  function calcArea(r){
    const pi = 10;
    console.log("The area is: " + pi * r * r);
  }

  console.log(pi);
  calcArea(5);
  console.log(pi);
  */

  /****************************************************
    The 'let' - local scope
  *****************************************************/
  /*
  var x = 10;

  if (x > 5){
    //var x = 5;
    let x = 5; // lexical scope
    console.log("inside: " + x);
  }

  console.log("outside: " + x);

  var items = document.getElementsByTagName("li");

  /*
  for(var x = 0; x < items.length; x++){
    items[x].onclick = function(){
      console.log(x); // x is global variable
    };
  }
  */

  /*
  for(let y = 0; y < items.length; y++){
    items[y].onclick = function(){
      console.log(y); // y is lexical scope
    };
  }

  //console.log(y); // y not defined
  */

  /****************************************************
    The default parameters
  *****************************************************/
  /*
  function log(num = 0){
    console.log(num);
  }

  log(4);

  function myProperLog(name = "Iulian", gender = "male", age = 36){
    console.log("My name is " + name +
      " and my gender is " + gender +
      " and my age is " + age);
  }

  myProperLog("Iulian", "male");
  */

  /****************************************************
    The spread "..." operator
  *****************************************************/
  /*
  let meats = ["ham", "salami", "bacon"];
  console.log(...meats);
  */

  /*
  let nums1 = [1, 2, 3];
  let nums2 = [...nums1, 4, 5, 6];

  console.log(nums2);

  function addNums(a, b, c){
    console.log(a + b + c);
  }

  addNums(...nums1);
  */

  /****************************************************
    Template strings
  *****************************************************/
  /*
  let temp = `hello,
      my name is Iulian`;
  console.log(temp);

  function myLog(name, age){
    console.log(`my name is ${name} and
        my age is ${age * 2}`);
  }

  myLog("Iulian", 36);
  */

  /****************************************************
    String methods
  *****************************************************/
  /*
  let str = "greaaavy ";
  console.log(str.repeat(3));
  console.log(str.startsWith('g'));
  console.log(str.slice(2,5));
  */


  /****************************************************
    Object Literal improvements
  *****************************************************/
  /*
  let name = "Iulian";
  let gender = "male";
  let myObject = {
    //name: name,
    //gender: gender
    name, gender,
    hello(x){
      console.log(`The value is ${x}`);
    }
  };

  //console.log(myObject.name, myObject.gender);
  myObject.hello(4);
  */

  /****************************************************
    'Fat Arrows' - Arrow functions
  *****************************************************/
  /*
  var myFunction = function(){
    console.log('helloooooooo');
  };

  var myFunction = (name) =>{
      console.log(`${name} says Helloooooooo`);
  }
  myFunction("Iulian");
  */

  /*
  let myObject = {
    name: "Iulian",
    log(x){
      //let _this = this;
      //window.setInterval(function(){
      window.setInterval(() => {
        if (x > 0){
          //console.log(`${_this.name} is here`);
          console.log(`${this.name} is here with value ${x}`);
          x--;
        }
      }, 1000);
    }
  };

  myObject.log(5);
  */

  /****************************************************
    Sets
  *****************************************************/
  let names = new Set();
  names.add("Iulian").add("Emilian").add("Tabara").add("Iulian");
  console.log(`The size is: ${names.size}`);
  console.log(names);
  var removed = names.delete("Iulian");
  console.log(names.has("Tabara"));
  console.log(names);

  let duplicates = [1,2,3,4,5,2,3,4,2,1];
  let noDuplicates = new Set(duplicates);
  console.log(noDuplicates);
  let arrayNoDuplicates = [...noDuplicates]; // spread
  console.log(arrayNoDuplicates);
};
