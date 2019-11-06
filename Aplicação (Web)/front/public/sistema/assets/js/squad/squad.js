let listSquads =  [{"nome": "Alpha", "id": 1, "status":"atention"}, {"nome":"Beta", "id": 2, "status":"offline"}];
let divs = "";

listSquads.map(squad => {
        divs += `
            <div class="content col-md-2 ${squad.status}" id= ${squad.id} >
                <span>${squad.nome}</span>
            </div>
        `

    document.getElementById("squads").innerHTML = divs;
});