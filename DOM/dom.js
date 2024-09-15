const getText = document.getElementById("text").style.backgroundColor = "red";
// console.log(getText);
// // // const fruits = document.getElementById("fruits");
// // // console.log(fruits);
// // const fruits = document.querySelectorAll("#fruits");
// // console.log(fruits);

// const image = document.getElementById("image");
// const picture = image.getAttribute('src');
// image.classList.add("pic1", "pic2");
// console.log(image.classList);

// const image1 = document.getElementById("picture");
// image1.setAttribute("alt", "personal images")
// console.log(image1)
const dress = document.createElement("section")
dress.innerHTML =` <h1>My dress list</h1>
<ul>
<li>shirt</li>
<li>pant</li>
<li>sandogenji</li>
<li>payjama</li>
</ul>`
document.body.appendChild(dress);
