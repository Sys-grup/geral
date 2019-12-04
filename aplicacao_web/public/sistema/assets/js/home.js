window.onload = () => {
    fetch(`http://localhost:8080/squad`,
    {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain',
          'id': 1,
        })
    })
    .then(response => response.json())
    .then(result => { 
        carregarSquads(result);
    })
    .catch(err => { 
        console.error(err); 
    });
}

function carregarSquads(listSquads) {
    let divs = "";
    listSquads.map(squad => {
        divs += `
                <div class="col-md-12">
                    <div class="card card-squad">
                        <div class="card-body" onclick="window.location.pathname='/system/squad'">
                            <i class="status" style="background:var(--${squad.online/squad.total*100>50? "success":"danger"})"></i>
                            <span>${squad.nome}</span>
                        </div>
                    </div>
                </div>
            `
    });
    document.getElementById("conteudo").innerHTML = divs;
}