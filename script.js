let homes = document.getElementById("home");
let packages = document.getElementById("packages");
let packageslg = document.getElementById("packageslg");
let services = document.getElementById("services");
let gallary = document.getElementById("gallary");
let abouts = document.getElementById("about");
let gallarylong = document.getElementById("gallary-long");
let logsign = document.getElementById("log-sign");
let booking = document.getElementById("booking");

function home() {
  homes.style.display = "block";
  packages.style.display = "block";
  packageslg.style.display = "none";
  services.style.display = "block";
  gallary.style.display = "block";
  abouts.style.display = "none";
  gallarylong.style.display = "none";
  logsign.style.display = "none";
  booking.style.display = "none";
  window.scrollTo(0,0);
}

function pack() {
  homes.style.display = "none";
  packages.style.display = "none";
  packageslg.style.display = "block";
  services.style.display = "none";
  gallary.style.display = "none";
  abouts.style.display = "none";
  gallarylong.style.display = "none";
  logsign.style.display = "none";
  booking.style.display = "none";
  window.scrollTo(0,0);
}

function about() {
  homes.style.display = "none";
  packages.style.display = "none";
  packageslg.style.display = "none";
  services.style.display = "none";
  gallary.style.display = "none";
  abouts.style.display = "block";
  gallarylong.style.display = "none";
  logsign.style.display = "none";
  booking.style.display = "none";
  window.scrollTo(0,0);
}

function gallaryImage() {
  homes.style.display = "none";
  packages.style.display = "none";
  packageslg.style.display = "none";
  services.style.display = "none";
  gallary.style.display = "none";
  abouts.style.display = "none";
  gallarylong.style.display = "block";
  logsign.style.display = "none";
  booking.style.display = "none";
  window.scrollTo(0,0);
}

function book() {
  homes.style.display = "none";
  packages.style.display = "none";
  packageslg.style.display = "none";
  services.style.display = "none";
  gallary.style.display = "none";
  abouts.style.display = "none";
  gallarylong.style.display = "none";
  logsign.style.display = "none";
  booking.style.display = "block";
  window.scrollTo(0,0);
}

function login() {
  homes.style.display = "none";
  packages.style.display = "none";
  packageslg.style.display = "none";
  services.style.display = "none";
  gallary.style.display = "none";
  abouts.style.display = "none";
  gallarylong.style.display = "none";
  logsign.style.display = "block";
  booking.style.display = "none";
  window.scrollTo(0,0);
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("logins");
var y = document.getElementById("register");

function logins() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}

const dataForm = document.getElementById("dataForm");
const nameInput = document.getElementById("name");
const placeInput = document.getElementById("place");
const dateInput = document.getElementById("date");
const phoneInput = document.getElementById("phone");
const editIndexInput = document.getElementById("editIndex");
const dataTable = document
  .getElementById("dataTable")
  .getElementsByTagName("tbody")[0];

let data = [];

function renderData() {
  dataTable.innerHTML = "";
  data.forEach((item, index) => {
    const row = dataTable.insertRow();
    row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.place}</td>
                <td>${item.date}</td>
                <td>${item.phone}</td>
                <td>
                    <button class="btn btn-delete" onclick="deleteData(${index})">Delete</button>
                    <button class="btn btn-edit" onclick="editData(${index})">Edit</button>
                </td>
            `;
  });
}

function addData(dataItem) {
  data.push(dataItem);
  renderData();
}

function deleteData(index) {
  data.splice(index, 1);
  renderData();
}

function editData(index) {
  const selectedItem = data[index];
  nameInput.value = selectedItem.name;
  placeInput.value = selectedItem.place;
  dateInput.value = selectedItem.date;
  phoneInput.value = selectedItem.phone;
  editIndexInput.value = index;
}

dataForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const place = placeInput.value.trim();
  const date = dateInput.value.trim();
  const phone = phoneInput.value.trim();
  const editIndex = editIndexInput.value;
  if (name && place && date && phone) {
    if (editIndex === "") {
      addData({ name, place, date, phone });
    } else {
      data[editIndex] = { name, place, date, phone };
      renderData();
      editIndexInput.value = "";
    }
    dataForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
renderData();