

// function Efetuar_login() {
//   var reg_name = getElementById('reg-senha');
//   var reg_email = getElementById("reg-email");

//   if (reg-name=="grupo.sys@gmail.com" && regemail=="1234") {
    //       window.location.href = '/system/';
//   }
//   else {
//     alert("Usuário inválido!")
//   }
// }

function efetuar_login(nome, email) {
    if (nome == "grupo.sys@gmail.com" && email == "1234") {
        window.location = 'system/';
    }
    else {
        alert("Usuário inválido!")
    }
}
