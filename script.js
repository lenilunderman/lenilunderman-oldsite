/* function to get the Year for the footer */
let dateInfo = document.querySelector(".dateJS");
function getDate() {
  let d = new Date();
  let n = d.getFullYear();
  dateInfo.innerHTML = n;
}
getDate();
