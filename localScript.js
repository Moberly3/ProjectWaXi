if (typeof(Storage) !== "undefined") {
    var storedName = localStorage.getItem("name");
  
    if (storedName) {
      console.log("Welcome back, " + storedName + "!");
    } else {
      var name = prompt("What is your name?");
  
      localStorage.setItem("name", name);
  
      console.log("Nice to meet you, " + name + "!");
    }
  } else {
    console.log("Sorry, your browser doesn't support local storage.");
  }