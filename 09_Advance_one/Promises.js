const promiseOne = new Promise(function (resolve, reject) {
  // here do async task
  // DB calls , crytopgraphy , network
  setTimeout(function () {
    console.log("Asunc task is completed");
    resolve(); // here resolve connect with then() in line 10.
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asunc task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Aync 2 Done");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Abdullah", email: "Abdullah@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "Ansari", Age: 14 });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.Age;
  })
  .then((user_aage) => {
    console.log(user_aage);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolve or reject"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ username: "Javascript", password: 123 });
    } else {
      reject("Error:Something went Wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// same using then() and catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
