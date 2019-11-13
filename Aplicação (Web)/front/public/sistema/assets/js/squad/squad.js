let listSquads =  [{"nome": "Alpha", "id": 1, "status":"atention"}, {"nome":"Beta", "id": 2, "status":"offline"}];
let divs = `<div class="content col-md-2 " id= 'squad-0' >
                <span class ="add" href="../../../src/cadastrar-squad.html">+</span>
            </div>`;

listSquads.map(squad => {
        divs += `
            <div class="content col-md-2 ${squad.status}" id='squad-${squad.id}' >
                <span>${squad.nome}</span>
            </div>
        `

    document.getElementById("squads").innerHTML = divs;
});