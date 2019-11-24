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
                    <p>${funcionario.squad || 'Sem squad'}</p>
                </td>
                <td><a href="funcionario=${funcionario.id}" class="label theme-bg text-white f-12">
                        Editar
                    </a>
                    <a href="#!" class="label theme-bg2 text-white f-12"
                        data-toggle="modal"
                        data-target="#modalFuncionario" data-id="${funcionario.id}" data-nome="${funcionario.nome}">Excluir</a>
                </td>
            </tr>`
    })
    document.getElementById("funcionariosList").innerHTML = div;
}

let deleteId;
function deletarFuncionario() {
    fetch(`http://localhost:8080/funcionarios?id=${deleteId}`,
    {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'text/plain',
        })
    })
    .then(result => { 
        window;location.reload();
    })
    .catch(err => { 
        console.error(err); 
    });
}

$('#modalFuncionario').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    deleteId = button.data('id');
    const nome = button.data('nome');
    const modal = $(this);
    modal.find('#ModalCenterTitle').text(`Excluir ${nome}`);
})