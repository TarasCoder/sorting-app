var xhttp = new XMLHttpRequest();
let url = "https://randomuser.me/api?results=50";
xhttp.open("GET", url, true);
xhttp.onload = function () {
  let responce = JSON.parse(this.response);
  responce.results.forEach((element) => {
    let firstName = element.name.first;
    let lastName = element.name.last;
    let picture = element.picture.medium;
    let city = element.location.city;
    let country = element.location.country;

  });

};
xhttp.send();
