
const input = document.querySelector(".input")
const btnCopy = document.querySelector(".btn-copy")
let image = document.querySelector(".img-code")
const btnGenerator = document.querySelector(".btn-generator")

btnGenerator.addEventListener("click", generate)

function generate(){
    let link = input.value
    let url = `http://api.qrserver.com/v1/create-qr-code/?&size=200x200&data=${link}`
    image.src = url
}