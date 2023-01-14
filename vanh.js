// let person = {
//   name: "Tien",
//   age: "15",
//   address: "hanoi",
//   favourite: ["ăn", "uống", "chơi"],
// };
// // let vanh = ["ăn", "uống", "chơi"];

// localStorage.setItem("vanh", JSON.stringify(person));
// let x = JSON.parse(localStorage.getItem("vanh"));
// console.log(x);
// // localStorage.getItem("vanh");
// // let x = localStorage.getItem("vanh", JSON.parse(person));
// // console.log(x);
// // let s = JSON.parse(localStorage.getItem("p2"));
// // console.log(typeof t);
// let uname = document.getElementById("username");
// let pword = document.getElementById("password");

// let checkValid = localStorage.getItem("personAccount");
// if (checkValid == null) {
//   localStorage.setItem("personAccount", JSON.stringify([]));
// } else {
//   let listUser = JSON.parse(localStorage.getItem("personAccount"));

//   document.querySelector("button").addEventListener("click", function () {
//     listUser.push({
//       username: uname.value,
//       password: pword.value,
//     });

//     localStorage.setItem("personAccount", JSON.stringify(listUser));

//     uname.value = "";
//     pword.value = "";
//   });
// }

// localStorage.setItem("vanh", JSON.stringify(menu));
// // let s = JSON.parse(localStorage.getItem("p2"));
// console.log(menu);
// document.write(menu.food);
// let C = {
//   new: [" "],
// };
// localStorage.setItem("C", JSON.stringify(C));
// menu.food.push(C);
// let game = {
//     food:  ["rau xào", "thịt luộc", "gà rán"],
//     add : [" ",]
// }
// localStorage.setItem("bug", JSON.stringify(game))
// document.write(menu.food);

// localStorage.setItem("vanh", JSON.stringify(menu));

// let add = {
//   c: [" "],
// };
let menu = {
  food: ["rau xào", "thịt luộc", "gà rán"],
};
localStorage.setItem("vanh", JSON.stringify(menu));

let x = prompt("nhập 1 ký tự trong 4 ký tự sau: C,R,U,D");
localStorage.setItem("need", JSON.stringify(x));
function myFunction() {
  let x = localStorage.getItem("mytime");
  document.getElementById("demo").innerHTML = x;
}
if (x == "C") {
  let y = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
  localStorage.setItem("create", JSON.stringify(y));

  let menu = {
    food: ["rau xào", "thịt luộc", "gà rán"],
  };
  let create = [y];
  localStorage.setItem("create", JSON.stringify(y));

  menu.food.push(y);

  localStorage.setItem("vanh", JSON.stringify(menu));
  document.write(menu.food);
} else if (x == "R") {
  let a = menu.food.join(", ");
  localStorage.setItem("read", JSON.stringify(a));
  alert(a);
  document.write(a);
} else if (x == "U") {
  let z = prompt(
    "Chúng tôi có:" + menu.food + " " + "Mời người dùng nhập vào tên món ăn mới"
  );
  if (menu.food.includes(z)) {
    let b = prompt("Mời người dùng nhập vào tên món ăn mới");
    menu.food[menu.food.indexOf(z)] = b;

    document.write(menu.food);
    // console.log(menu.food);
    localStorage.setItem("vanh", JSON.stringify(menu));
    localStorage.setItem("create", JSON.stringify(b));
  } else {
    alert("Chúng tôi không có" + " " + z);
    menu.food.push(z);
    localStorage.setItem("create-2", JSON.stringify(z));
    // document.write(menu.food);
  }
} else if (x == "D") {
  let d = prompt(
    "Chúng tôi có:" +
      menu.food +
      " " +
      "Mời người dùng nhập vào tên món muốn Delete"
  );
  console.log(menu.food.indexOf(d));
  if (menu.food.includes(d)) {
    menu.food.splice(menu.food.indexOf(d), 1);
    document.write(menu.food);
    localStorage.setItem("vanh", JSON.stringify(menu));
    localStorage.setItem("delete", JSON.stringify(d));
  } else {
    alert("Chúng tôi không có" + " " + d + "." + "Xin hãy nhập lại");
  }
  //   if (d == -1) {
  //     document.write(menu.food);
  //   }
}
