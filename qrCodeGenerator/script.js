let inputText=document.getElementById("input-text");
let qrCode=document.getElementById("qr-code");
let generateBtn=document.getElementById("generate-btn");

generateBtn.addEventListener("click",()=>{
    let url=`https://api.qrserver.com/v1/create-qr-code/?data=${inputText.value}&amp;size=150x150`;
    qrCode.src=url;
    qrCode.style.display="block";
})