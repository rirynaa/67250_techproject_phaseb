var now = new Date();
var hour = now.getHours();

function greeting(x) {
    if ((document.getElementById("greeting") != null && (window.location.pathname.endsWith("index.html")))) {
        if (x < 5 || x>=20) {
            document.getElementById("greeting").innerHTML = "Good night";
        } else if (x < 12) {
            document.getElementById("greeting").innerHTML = "Good morning";
        } else if (x < 18) {
            document.getElementById("greeting").innerHTML = "Good afternoon";
        } else {
            document.getElementById("greeting").innerHTML = "Good evening";
        }
    }
}
greeting(hour);

function addYear(){
    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
}
addYear();

function ActiveNav(){
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
});
}
ActiveNav();

if (document.getElementById("longIntro") != null) {
    $("#readLess").click(function(){ 
        $("#longIntro").hide(); // Hide the long introduction text
        $("#readLess").hide();  // Hide the "Read Less" button itself
        $("#readMore").show();  // Show the "Read More" button  

    });

    $("#readMore").click(function(){
        $("#longIntro").show();  // Show the long introduction text
        $("#readLess").show();   // Show the "Read Less" button
        $("#readMore").hide();   // Hide the "Read More" button  
    });
}

function toggleNav() {
  const navbar = document.querySelector('.nav_bar');
  navbar.classList.toggle('responsive');
}


//sourced from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
if (document.getElementsByClassName("mySlides").length > 0) {
    showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

if (document.getElementById('map')) {
    var map = L.map('map').setView([38.89, -77.03], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var popup = L.popup()
        .setLatLng([38.89, -77.03])
        .setContent("We are here!")
        .openOn(map);
}

//sourced from https://www.geeksforgeeks.org/javascript/how-to-create-a-dynamic-calendar-in-html-css-javascript/
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();

let calendar = document.getElementById("calendar");

let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let days = [
	"Sun", "Mon", "Tue", "Wed",
	"Thu", "Fri", "Sat"];

$dataHead = "<tr>";
for (dhead in days) {
	$dataHead += "<th data-days='" +
		days[dhead] + "'>" +
		days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear =
	document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
	currentYear = currentMonth === 11 ?
		currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previous() {
	currentYear = currentMonth === 0 ?
		currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ?
		11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
	let firstDay = new Date(year, month, 1).getDay();
	tbl = document.getElementById("calendar-body");
	tbl.innerHTML = "";
	monthAndYear.innerHTML = months[month] + " " + year;

	let date = 1;
	for (let i = 0; i < 6; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				cell = document.createElement("td");
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth(month, year)) {
				break;
			} else {
				cell = document.createElement("td");
				cell.setAttribute("data-date", date);
				cell.setAttribute("data-month", month + 1);
				cell.setAttribute("data-year", year);
				cell.setAttribute("data-month_name", months[month]);
				cell.className = "date-picker";
                cell.onclick = function() {selectDate(this);};
				cell.innerHTML = "<span>" + date + "</span>";

				if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					cell.className = "date-picker selected";
				}

				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}
}


function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

function selectDate(cell){
    var selected = document.querySelector('.date-picker.selected');
    if (selected) {
    selected.classList.remove('selected');
    }
    cell.classList.add('selected');
    var d = cell.getAttribute('data-date').padStart(2, '0');
    var m = cell.getAttribute('data-month').padStart(2, '0');
    var y = cell.getAttribute('data-year');
    showPurchaseForm(y + '-' + m + '-' + d);
}

function showPurchaseForm(selectedDate) {
    if (selectedDate) {
        document.getElementById("date").value = selectedDate;
    }
    document.getElementById("purchaseForm").style.display = "block";
}

function submitPurchase() {
    var valid = true;
    
    validateEmail();
    if (document.getElementById("emailError").textContent !== "") {
        valid = false;
    }
    validateQuantity();
    if (document.getElementById("quantityError").textContent !== "") {
        valid = false;
    }
    validateDate();
    if (document.getElementById("dateError").textContent !== "") {
        valid = false;
    }

    if (valid) {
        window.location.href = "confirmationpage.html";
    }
}

function calculatePrice() {
    var quantity = document.getElementById("tickets").value;
    var total = quantity * 18;
    let output = total;

    localStorage.setItem("total", total);
    document.getElementById("totalPrice").innerHTML = "Total: $" + total;
    return total;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = "";
    }
}

function validateQuantity() {
    var quantity = document.getElementById("tickets").value;
    var quantityError = document.getElementById("quantityError");
    if (quantity < 1 || quantity > 10) {
        quantityError.textContent = "Please enter a quantity between 1 and 10.";
    } else {
        quantityError.textContent = "";
    }
}

function validateDate(){
    var selectedDate = document.getElementById("date").value;
    var dateError = document.getElementById("dateError");
    var today = new Date();
    var selected = new Date(selectedDate);
    if (selected < today) {
        dateError.textContent = "Please select a valid date.";
    } else {
        dateError.textContent = "";
    }
}