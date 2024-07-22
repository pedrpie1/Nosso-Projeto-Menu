let inputEmail = document.querySelector("#exampleFormControlInput1");
let inputNome = document.querySelector("#exampleFormControlInput2");
let btn = document.querySelector("#btn");

let n = ""
let x = "0123456789"

btn.addEventListener("click", function enviar(){
    if (inputNome.value == n || inputNome.value == x){
        alert("Erro! Verifique seu cadastro")
    } else{
        alert("Cadastro concluído!")
    }
})

// MODAL
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })