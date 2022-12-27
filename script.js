// Ques 4 (Change the heading)

const heading = document.getElementById("h1-hello");
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
  heading.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Hello World";
});

// Ques 5 (Chnage Flex Direction)

const direct = document.querySelector(".maincard");
button = document.getElementsByTagName("button")[1];

button.addEventListener("click", function() {
    direct.style.flexDirection = "column";
});

// Ques 7 (Adding attribute)

const heading2 = document.getElementById("h1-3");
button = document.getElementsByTagName("button")[2];
button.addEventListener("click", function() {
heading2.setAttribute("style", "color: red");
heading2.setAttribute("id", "heading");
});

// Ques 8 (Change text)

const heading3 = document.getElementById("h1-4");
button = document.getElementsByTagName("button")[3];

button.addEventListener("click", function() {
  heading3.innerHTML = "Welcome to Elevation academy";
});

// Ques 9 (Clock)

setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
  }, 1000);

// Ques 10 (Select Dropdown)

const dropdownHere = document.getElementById("dropdown-here");

const selection = document.createElement("Select");

for (let yr = 20; yr <= 30; yr++) {
  const options = document.createElement("Option");
  options.value = yr;
  options.innerHTML = `${yr}-${yr + 1}`;
  selection.appendChild(options);
}

dropdownHere.appendChild(selection);

const res = document.createElement("div");
res.id = "result";
dropdownHere.appendChild(res);

selection.addEventListener("change", function() {
  const selectedVal = selection.options[selection.selectedIndex].innerHTML;
  res.innerHTML = "";
  res.appendChild(document.createTextNode(`Year ${selectedVal} is selected`));
});