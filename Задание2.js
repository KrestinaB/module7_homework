function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Kris", 
    ownCity: "Moscow",
    age: 33,
    course: "Frontend"
  };


  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true