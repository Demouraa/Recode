let form = document.getElementById("myForm");

function forma(e) {
    e.preventDefault();

    let iAuthor = document.getElementById("author");
    let iTitle = document.getElementById("title");
    let iEdition = document.getElementById("edition");
    let iSite = document.getElementById("site");
    let pName = document.getElementById("pname");
    let yPublication = document.getElementById("ypublication");
    let fAuthor = iAuthor.value.split(" ");

    console.log(iAuthor.value);
    console.log(iTitle.value);
    console.log(iEdition.value);
    console.log(iSite.value);
    console.log(pName.value);
    console.log(yPublication.value);
    console.log(fAuthor);

    return document.getElementById("format").innerHTML = `${fAuthor[1].toUpperCase()}, ${fAuthor[0][0]}. ${iTitle.value}: ${iEdition.value}, ed. ${iSite.value}: ${pName.value}, ${yPublication.value}`;
};

form.addEventListener("submit", forma);

{ 
    "funcionarios": [{ "nome": "João da Silva","projeto": "WebSite", "atividades": [{ "tarefa": "Criar formulário", "prazo": "4" }, { "tarefa": "Criar página de contatos", "prazo": "3" }, { "tarefa": "Criar página principal", "prazo": "9" }] }, { "nome": "Renata Souza", "projeto": "Aplicativo", "atividades": [{ "tarefa": "Criar aplicativo", "prazo": "40" }, { "tarefa": "Publicar no AppStore", "prazo": "12" }] }, { "nome": "Rodrigo Campos", "projeto": "Gestão", "atividades": [{ "tarefa": "Contratação de pessoal", "prazo": "31" }, { "tarefa": "Alocação de recursos", "prazo": "2" }] }, { "nome": "Tarcisio Moura", "projeto": "Publicidade", "atividades": [{ "tarefa": "Elaboração de campanha", "prazo": "15" }] }] }