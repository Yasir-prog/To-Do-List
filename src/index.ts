let input= document.querySelector("#input")as HTMLInputElement
let btn= document.querySelector("#save-btn")
let doList= document.querySelector(".task-list")

btn?.addEventListener("click",()=>{
    let inputValue=input?.value
    if(inputValue==""){
        alert("Input is mandatory!")
    }else{
        addList(inputValue)
        input.value=""
    }
})



doList?.addEventListener("click",(e)=>{
    let target=e.target as HTMLElement
    if(target?.classList.contains("fa-trash-can")){
        target.parentElement?.remove()
    }else if(target.tagName==="LI"){
        target.classList.toggle("checked")
    }
    
})

function addList(txt: string){
    let newList=document.createElement("li")
    let newImg=document.createElement("img")
    newImg.src="../unchecked.png"
    newList.innerHTML=`<span>${txt}</span><i class="fa-solid fa-trash-can" id="trash"></i>`
    newList.prepend(newImg)
    doList?.appendChild(newList)
}