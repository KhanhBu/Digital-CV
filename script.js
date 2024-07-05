"use strict";

// Email input
document.querySelector(".submit").addEventListener("click", function () {
  const input = document.getElementById("email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regex.test(input);
  console.log(result);

  if (result === true) {
    const EmailField = document.querySelector("form");
    const personalinfo = document.querySelector(".info");
    EmailField.classList.add("hide");
    personalinfo.classList.remove("hide");
  } else {
    window.alert("Your email is invalid. Try again");
  }
});

// Job info
// hover
const container1 = document.querySelector(".job-item-container-1");
container1.addEventListener("mouseover", function () {
  document.querySelector(".button1").classList.remove("hide");
});
container1.addEventListener("mouseout", function () {
  document.querySelector(".button1").classList.add("hide");
});

const container2 = document.querySelector(".job-item-container-2");
container2.addEventListener("mouseover", function () {
  document.querySelector(".button2").classList.remove("hide");
});
container2.addEventListener("mouseout", function () {
  document.querySelector(".button2").classList.add("hide");
});

const container3 = document.querySelector(".job-item-container-3");
container3.addEventListener("mouseover", function () {
  document.querySelector(".button3").classList.remove("hide");
});
container3.addEventListener("mouseout", function () {
  document.querySelector(".button3").classList.add("hide");
});

const container4 = document.querySelector(".job-item-container-4");
container4.addEventListener("mouseover", function () {
  document.querySelector(".button4").classList.remove("hide");
});
container4.addEventListener("mouseout", function () {
  document.querySelector(".button4").classList.add("hide");
});

const container5 = document.querySelector(".job-item-container-5");
container5.addEventListener("mouseover", function () {
  document.querySelector(".button5").classList.remove("hide");
});
container5.addEventListener("mouseout", function () {
  document.querySelector(".button5").classList.add("hide");
});

const container6 = document.querySelector(".job-item-container-6");
container6.addEventListener("mouseover", function () {
  document.querySelector(".button6").classList.remove("hide");
});
container6.addEventListener("mouseout", function () {
  document.querySelector(".button6").classList.add("hide");
});
// click
document.querySelector(".button1").addEventListener("click", function () {
  if (document.querySelector(".button1").textContent === "▼ View More") {
    document.querySelector(".list1").classList.remove("hide");
    document.querySelector(".button1").textContent = "▲ View Less";
  } else if (document.querySelector(".button1").textContent === "▲ View Less") {
    document.querySelector(".list1").classList.add("hide");
    document.querySelector(".button1").textContent = "▼ View More";
  }
});

document.querySelector(".button2").addEventListener("click", function () {
  if (document.querySelector(".button2").textContent === "▼ View More") {
    document.querySelector(".list2").classList.remove("hide");
    document.querySelector(".button2").textContent = "▲ View Less";
  } else if (document.querySelector(".button2").textContent === "▲ View Less") {
    document.querySelector(".list2").classList.add("hide");
    document.querySelector(".button2").textContent = "▼ View More";
  }
});

document.querySelector(".button6").addEventListener("click", function () {
  if (document.querySelector(".button6").textContent === "▼ View More") {
    document.querySelector(".list3").classList.remove("hide");
    document.querySelector(".button6").textContent = "▲ View Less";
  } else if (document.querySelector(".button6").textContent === "▲ View Less") {
    document.querySelector(".list3").classList.add("hide");
    document.querySelector(".button6").textContent = "▼ View More";
  }
});

document.querySelector(".button3").addEventListener("click", function () {
  if (document.querySelector(".button3").textContent === "▼ View More") {
    document.querySelector(".hobby-1").classList.toggle("hide");
    document.querySelector(".hobby-2").classList.toggle("hide");
    document.querySelector(".hobby-3").classList.toggle("hide");
    document.querySelector(".hobby-4").classList.toggle("hide");
    document.querySelector(".button3").textContent = "▲ View Less";
  } else if (document.querySelector(".button3").textContent === "▲ View Less") {
    document.querySelector(".hobby-1").classList.toggle("hide");
    document.querySelector(".hobby-2").classList.toggle("hide");
    document.querySelector(".hobby-3").classList.toggle("hide");
    document.querySelector(".hobby-4").classList.toggle("hide");
    document.querySelector(".button3").textContent = "▼ View More";
  }
});

document.querySelector(".button4").addEventListener("click", function () {
  if (document.querySelector(".button4").textContent === "▼ View More") {
    document.querySelector(".div2").classList.remove("hide");
    document.querySelector(".button4").textContent = "▲ View Less";
  } else if (document.querySelector(".button4").textContent === "▲ View Less") {
    document.querySelector(".div2").classList.add("hide");
    document.querySelector(".button4").textContent = "▼ View More";
  }
});

document.querySelector(".button5").addEventListener("click", function () {
  if (document.querySelector(".button5").textContent === "▼ View More") {
    document.querySelector(".div3").classList.remove("hide");
    document.querySelector(".button5").textContent = "▲ View Less";
  } else if (document.querySelector(".button5").textContent === "▲ View Less") {
    document.querySelector(".div3").classList.add("hide");
    document.querySelector(".button5").textContent = "▼ View More";
  }
});
