document.getElementById('Enviar').addEventListener('click', validaForm)

function validaForm() {
  let name = document.getElementById('name')
  let mail = document.getElementById('mail')
  let phone = document.getElementById('phone')

  if (name.value != '' && mail.value != '' && phone.value != '') {
    let validPhone = /\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/.test(phone.value)
    if (!validPhone) {
      alert('Telefone inválido!')
    } else {
      alert('Prontinho! Você receberá as novidades por e-mail.')
    }
  } else {
    alert('Por favor, preencha os campos Nome e E-mail.')
  }
}

// function validaForm(){

//   if(document.getElementById("name").value != "" &&
//       document.getElementById("mail").value != "" &&
//       document.getElementById("phone").value != "" ){

//     alert("Prontinho! você receberá as novidades por email.")
//    }else{
//      alert("Por favor, preencha os campos nome e email.")
//    }
//  }
