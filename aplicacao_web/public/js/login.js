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

if (localStorage.getItem('idConta') > 0) window.location = 'system/';

function efetuar_login(login, senha) {
    fetch(`http://localhost:8080/sessions`,
    {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            login,
            senha
        })
    })
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('idConta',result[0].idConta);
        window.location = 'system/';
    })
    .catch(err => {
        alert("Usuário inválido!");
        console.log(err);
    });
}
