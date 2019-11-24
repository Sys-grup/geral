window.onload = () => {
    conferirUrl()
    .then(id => console.log(id))
    // fetch("http://localhost:8080/funcionarios",
    // {
    //     method: 'GET',
    //     headers: new Headers({
    //       'Content-Type': 'text/plain',
    //     })
    // })
    // .then(response => response.json())
    // .then(result => { 
    //     carregarFuncionarios(result);
    // })
    // .catch(err => { 
    //     console.error(err); 
    // });
}

function conferirUrl() {
    const url = window.location.pathname;
    const id = url.substring(url.indexOf('=')+1);
    return id;
}