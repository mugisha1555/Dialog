const clickHereBtn = document.getElementById('click-here');
const outputBox = document.querySelector('output');
const confirmResult = document.querySelector('#confirmBtn');
const selectedItem = document.querySelector('select');


const avatarBtn = document.getElementById('add_new_avatar');


avatarBtn.addEventListener('click', function onOpen() {
    dialog.showModal();
});


const avatarFormElement = document.querySelector("#get_avatar_image_form");
let images = [];
function formSubmitted(event) {
    const fileInput = avatarFormElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if (files.length == 0) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
    const imageUrl = URL.createObjectURL(image);

    addImageToTheDOM(imageUrl);

}
function addImageToTheDOM(imageUrl) {
    let container = document.getElementById('container');
    const check = images.filter(item => item.url == imageUrl);
    if (!check.length > 0) {
        
        let ide = Date.now();
        images.push({ url: imageUrl, id: ide });
        container.innerHTML += `<button class="avatar-img-btn" onClick="removeItem(${ide})">
        <ion-icon class="close-avatar-icon" name="close-outline"></ion-icon>
        <img src=${imageUrl} alt="" class="avatar-img">
         </button>`;
    }
    else{
           return "";
    }

}
function removeItem(id) {
    images = images.filter(item => item.id != id);
    let container = document.getElementById('container');
    container.innerHTML = "";
    images.map((item) => {
        container.innerHTML = `<button class="avatar-img-btn" onClick="removeItem(${item.id})">
        <ion-icon class="close-avatar-icon" name="close-outline"></ion-icon>
        <img src=${item.url} alt="" class="avatar-img">
         </button>`
    })
}
avatarFormElement.addEventListener("submit", formSubmitted);