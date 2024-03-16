const btnsubmit = document.querySelector(".infomation button");
const detail = document.querySelector(".detail");
const btnQuit = detail.querySelector(".buttons #btnQuit");
//if submit button clicked
btnsubmit.onclick = () =>{
    detail.classList.add("activedetail");
}
//if Quit button clicked
btnQuit.onclick = () =>{
    detail.classList.remove("activedetail");
}
// function animatedForm(){
//     const arrows = document.querySelectorAll(".btnsubmit");
//     arrows.forEach(arrow =>{
//         arrow.addEventListener("click", () =>{
//             const input = arrow.previousElementSibling;
//             const parent = arrow.parentElement;
//             const nextForm = parent.nextElementSibling;
//             if (input.type === "text" && validate(input)){
//                 nextslide(parent,nextForm)
//             }
//         });
//     });
// }
// function nextslide(parent,nextForm){
//     parent.classList.add("innactive");
//     parent.classList.remove("active");
//     nextForm.classList.add("innactive");
// }
// function validate(formsubmit){
//     if (formsubmit.value.lenght <6){
//         console.log("not enugh characters");
//     }
//     else{
//         return true;
//     }
// }



// animatedForm();