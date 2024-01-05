let sideMenu = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector(".close");

let mode = document.querySelector(".mode");
mode.addEventListener("click", () => {
  mode.firstElementChild.classList.toggle("active")
  mode.lastElementChild.classList.toggle("active")
  document.body.classList.toggle("dark-mode-variables");
  // mode.querySelector("> div:nth-child(1)").classList.toggle("active")
  // mode.querySelector("> div:nth-child(2)").classList.toggle("active")
 
});


menuBtn.addEventListener("click", () => {
  console.log("you clicked me");
  sideMenu.style.display="block"
})

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
})

let cources = [
  {
    course_name: "javascript",
    course_number: 2121,
    payment: "due",
  },
  {
    course_name: "python",
    course_number: 5245,
    payment: "paid",
  },
  {
    course_name: "java",
    course_number: 1545,
    payment: "refund",
  },
];

let table = document.querySelector("#tdata");
let htmlData =""
    cources.forEach(course => {
    let tdclass = "paid"
    if (course.payment == "due") {
        tdclass="pending"
    }
    else if (course.payment === "refund") {
        tdclass="decliend"
    }
    else {
        tdclass = "active"
    }
htmlData += `<tr>
        <td>${course.course_name}</td>
        <td>${course.course_number}</td>
        <td>${course.payment}</td>
        <td class=${tdclass}>${tdclass}</td>
        <td><a href="#">Details<a/></td>
    </tr>`;
})

table.innerHTML=htmlData