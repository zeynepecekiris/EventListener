const button=document.querySelector("button");
// button.addEventListener("click",() =>{
//     console.log("tiklandi");
// })


const liElemanlari=document.querySelectorAll("li");

// liElemanlari.forEach(eleman =>{

//     eleman.addEventListener("click", e=>{
//     console.log(e);
//     console.log(e.target);

//     console.log("liye tiklandi")
//     e.target.style.color="blue"
// })
// })


const ul=document.querySelector("ul");
// ul.remove();


liElemanlari.forEach(eleman =>{

    eleman.addEventListener("click", e=>{
    e.target.remove();
})
})

button.addEventListener("click",() =>{
    const li=document.createElement("li");
    li.textContent="Javascript";
    // ul.append(li);
    ul.prepend(li);

})