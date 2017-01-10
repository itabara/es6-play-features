window.onload = function(){

  /****************************************
    Generators
  *****************************************/
  /*
  function* gen(){
    var x = yield "kiwi";
    yield console.log("apple"); // from left to right call log then pause the execution with yield.
    yield "banana"; // value to be returned by yield
    yield "pear";
    console.log("all done");
    return x;
  };

  // return an iterator then call next() to execute the body
  let myGen = gen();
  myGen.next(); // statement will stop at var x= (before yield from right to left)
  myGen.next(4); // send param and assign to x;
  console.log('Before yield');
  console.log('Value from yield: ' + myGen.next().value);
  console.log('Reached the end: ' + myGen.next().done);
  console.log('--> last step');
  console.log('Reached the end: ' + myGen.next().value); // that's x from return x
  */


  genWrapper(function* generator(){
    let tweets = yield $.getJSON("data/tweets.json");
    console.log(tweets);

    let friends = yield $.getJSON("data/fb-friends.json");
    console.log(friends);

    let ytVids = yield $.getJSON("data/yt-vids.json");
    console.log(ytVids);
  });

  function genWrapper(generator){
    // set up generator / iterator
    var myGen = generator();

    // create function to handle the yielded value
    function handle(yieldedValue){
      if (!yieldedValue.done){
        yieldedValue.value.then(function(data){
          return handle(myGen.next(data)); // pass the data (tweets, friends, ytVids)
        });
      }
    } // end handle

    // return handle function, passing in myGen.next
    return handle(myGen.next());
  } // end genWrapper
};
