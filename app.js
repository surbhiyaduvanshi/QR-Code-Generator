const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
const input=document.querySelector(".input-field");
const button=document.querySelector(".button1");
const div=document.querySelector(".code");
const img=document.querySelector("#image")


button.addEventListener("click",()=>{
img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
})
input.value="";