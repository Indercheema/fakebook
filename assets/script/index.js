'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
import { Subscriber, User } from "./User.js";
import { onEvent, getElement, select } from "./utils.js";



const btn = select('.btn');
const showInfo = select('.info');
const displayUser = select('.displayUser');
const input = select('.text-area');
const bigBox = select('.big-box');
const uploadFile = select('.upload-icon');
const profileClick = select('.profile');
const overlay = select('.overlay');
const profileInfo = select('.profile-info');
const fileName = select('.file-name');


const shapes = [];

const user = new Subscriber(87456, 'Inder', 'Inder123',
    'Inder.123@gmail.com', '3', '5', true);

onEvent('click', btn, function (event) {
    showInfo.innerText = '';
    event.preventDefault();
    if (uploadFile.files.length < 1 && input.value.trim() === "") {
        showInfo.innerText = "This Post Cannot be Empty!";
        return;
    }


    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="post-header">
            <div><img src="./assets/img/profile.jpg" alt="" class="profile"></div>
            <h3 class = "user">${user.name}</h3>  
            </div>
        </div>   `;

    let date = document.createElement('div');
    date.classList.add('date');
    let today = new Date().toLocaleDateString();
    date.innerText = today;
    newDiv.classList.add('square');
    newDiv.style.backgroundColor = "#fff";
    shapes.push(newDiv);
    if (input.value.trim() !== "") {
        newDiv.innerHTML += `<p class="para">${input.value}</p>`;
    }
    onEvent('click' , uploadFile, function() {
        if (uploadFile.files.length > 0) {
            window.URL = window.URL || window.webkitURL;
            let file = uploadFile.files[0];
            let url = URL.createObjectURL(file)
            let img = document.createElement('img');
            img.classList.add('uploaded-pic');
            img.style.display = 'block';
            img.src = url;
            input.vale = '';
            newDiv.appendChild(img);
        }
    })
    

    bigBox.prepend(newDiv);
});

onEvent('click', profileClick, function () {
    overlay.style.visibility = 'visible';
    profileInfo.innerHTML = `
        <div class="div-content">
            <div><img src="./assets/img/profile.jpg" alt="" class="profile-2"></div>
            <h3 class = "user">${user.name}</h3> 
            <div>
            <ul class = "ul-user">
               <li> Id: ${(user.id)}</li>
               <li>${(user.name)}</li>
               <li>${(user.userName)} </li>
               <li>${(user.email)}</li>
               <li>${(user.groups)}</li>
            </ul></div> 
        </div>   `;

});
onEvent('click', uploadFile, function() {
    uploadFile.click();
    fileName.innerText = this.files[0].name.trim();
});

onEvent('click', overlay, function () {
    overlay.style.visibility = 'hidden';

});

