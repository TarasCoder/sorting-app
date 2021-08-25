let xhttp = new XMLHttpRequest();
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

    let div = document.createElement("div");
    div.classList.add("textWrap");

    let li = document.createElement("li");
    li.classList.add("listItem");

    let img = document.createElement("img");
    img.classList.add("userPicture");
    img.setAttribute("src", picture);

    let p1 = document.createElement("p");
    p1.classList.add("userName");
    p1.innerText = firstName + " " + lastName;

    let p2 = document.createElement("p");
    p2.classList.add("userLocation");
    p2.innerText = city + " " + country;

    li.append(img);
    li.append(div);
    div.append(p1);
    div.append(p2);
    document.querySelector(".list").append(li);
});
};
xhttp.send();
