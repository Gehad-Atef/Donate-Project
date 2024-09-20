// // const rangeSlider = document.getElementById("rangeSlider");
// // const rangeValue = document.getElementById("rangeValue");
// // const stopValue = 70;
// // let hasStarted = false;

// // function increaseSliderValue() {
// //     let value = parseInt(rangeSlider.value);

// //     const interval = setInterval(function () {
// //         if (value >= stopValue) {
// //             clearInterval(interval);
// //         } else {
// //             value += 1;
// //             rangeSlider.value = value;
// //             rangeValue.textContent = value;
// //         }
// //     }, 30);
// // }

// // window.addEventListener("scroll", function () {
// //     const scrollPosition = window.scrollY;

// //     const triggerPoint = 300; //

// //     if (scrollPosition >= triggerPoint && !hasStarted) {
// //         hasStarted = true;
// //         increaseSliderValue();
// //     }
// // });
// const inputColor = document.querySelector(".input-color");
// const donateButton = document.querySelector(".donate");
// const readButton = document.querySelector(".read");
// const sec1DivOne = document.querySelector(".div-one");
// const sec3Button = document.querySelector(".sec3 button");
// const sec3line = document.querySelector(".sec3-line");
// const sec4LineOne = document.getElementById("sec4-lineDivOne");
// const sec4LineTwo = document.getElementById("sec4-lineDivTwo");
// const featureButton = document.querySelector(".features-content button");
// const sec5Line = document.querySelector(".sec5-line");
// const iconOne = document.getElementById("icon1");
// const iconTwo = document.getElementById("icon2");
// const iconThree = document.getElementById("icon3");

// const color = window.localStorage.getItem("color");
// inputColor.addEventListener("input", function () {
//     const value = inputColor.value;
//     localStorage.setItem("color", value);
//     donateButton.style.backgroundColor = value;
//     donateButton.style.backgroundColor = value;
//     readButton.style.borderColor = value;
//     sec1DivOne.style.backgroundColor = value;
//     sec3Button.style.backgroundColor = value;
//     sec3line.style.backgroundColor = value;
//     sec4LineOne.style.backgroundColor = value;
//     sec4LineTwo.style.backgroundColor = value;
//     sec5Line.style.backgroundColor = value;
//     featureButton.style.backgroundColor = value;
//     iconOne.style.color = value;
//     iconTwo.style.color = value;
//     iconThree.style.color = value;
// });
// donateButton.style.backgroundColor = color;
// readButton.style.borderColor = color;
// sec1DivOne.style.backgroundColor = color;
// sec3Button.style.backgroundColor = color;
// sec3line.style.backgroundColor = color;
// sec4LineOne.style.backgroundColor = color;
// sec4LineTwo.style.backgroundColor = color;
// sec5Line.style.backgroundColor = color;
// featureButton.style.backgroundColor = color;
// iconOne.style.color = color;
// iconTwo.style.color = color;
// iconThree.style.color = color;
