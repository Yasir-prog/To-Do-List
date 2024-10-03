"use strict";
let input = document.querySelector("#input");
let btn = document.querySelector("#save-btn");
let doList = document.querySelector(".task-list");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    let inputValue = input === null || input === void 0 ? void 0 : input.value;
    if (inputValue == "") {
        alert("Input is mandatory!");
    }
    else {
        addList(inputValue);
        input.value = "";
    }
});
doList === null || doList === void 0 ? void 0 : doList.addEventListener("click", (e) => {
    var _a;
    let target = e.target;
    if (target === null || target === void 0 ? void 0 : target.classList.contains("fa-trash-can")) {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }
});
function addList(txt) {
    let newList = document.createElement("li");
    let newImg = document.createElement("img");
    newImg.src = "../unchecked.png";
    newList.innerHTML = `<span>${txt}</span><i class="fa-solid fa-trash-can" id="trash"></i>`;
    newList.prepend(newImg);
    doList === null || doList === void 0 ? void 0 : doList.appendChild(newList);
}
//# sourceMappingURL=index.js.map