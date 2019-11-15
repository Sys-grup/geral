window.onload = () => {
    fetch("http://localhost:8080/funcionarios",
    {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain',
        })
    })
    .then(response => response.json())
    .then(result => { 
        carregarFuncionarios(result);
    })
    .catch(err => { 
        console.error(err); 
    });
}

function carregarFuncionarios(lista) {
    div = ''
    lista.map(funcionario => {
        div += 
            `<tr class="unread">
                <td><img class="rounded-circle" style="width:40px;"
                        src="../assets/images/user/avatar-${funcionario.sexo=='F'? 1 : 2}.jpg"
                        alt="activity-user">
                </td>
                <td>
                    <h6 class="mb-1">${funcionario.nome}</h6>
                    <p class="m-0">${funcionario.cargo}</p>
                </td>
                <td>
                    <h6 class="text-muted">
                    <i data-feather="bookmark" color="#32CD32"></i>
                        ${'11 MAY 12:56'}
                    </h6>
                    <p>${funcionario.squad}</p>
                </td>
                <td><a href="editar-funcionario.html" class="label theme-bg text-white f-12">
                        Editar
                    </a>
                    <div id="exampleModalCenter" class="modal fade" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title"
                                        id="exampleModalCenterTitle">
                                        Excluir  ${funcionario.nome}</h5>
                                    <button type="button" class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"><span
                                            aria-hidden="true">×</span></button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                    Essa ação não pode ser revertida.
                                    Tem certeza que deseja excluir esse funcionário?</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal">Cancelar</button>
                                    <button type="button"
                                        class="btn btn-primary">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#!" class="label theme-bg2 text-white f-12"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"> Excluir</a>
                </td>
            </tr>`
    })
    document.getElementById("funcionariosList").innerHTML = div;
}