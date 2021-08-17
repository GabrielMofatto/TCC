/*
    Declaramos os atributos de status
*/
var fome = 100;
var sono = 100;
var diversao = 100;

/*
    Essa função tem a função de atualizar as informações na tela
    de tanto em tanto tempo
*/
function Loop(time = 10) {

    var total = fome + sono + diversao;

    /*
       Se algum dos atributos chegar a 0 nosso pet morre!
       logo a baixo controlamos o nível de satisfação do pet
    */
    if (fome <= 0 || sono <= 0 || diversao <= 0) {
        document.getElementById("pet").src = "img/lolizinha_morta.png";
        document.getElementById('mensagem').innerHTML = 'Você deixou seu pet morrer, atualize a página';
        if(fome <= 0){
            fome = 0;
            time = 0;
        }
        if(sono <= 0){
            sono = 0;
            time = 0;
        }
        if(diversao <= 0){
            diversao = 0;
            time = 0;
        }
    }
    else if (total > 400) {
        document.getElementById("pet").src = "img/fullsaude.png";
    }
    else if (total > 300) {
        document.getElementById("pet").src = "img/Normal.png";
    }
    else if (total > 200) {
        document.getElementById("pet").src = "img/triste.png";
    }
    else if (total > 100) {
        document.getElementById("pet").src = "img/lolizinha_morrendo.png";
    }
    else if (total > 50) {
        document.getElementById("pet").src = "img/preto.jpg";
    }

    fome = fome - parseFloat(time);
    sono = sono - parseFloat(time);
    diversao = diversao - parseFloat(time);

    /*
       Nessa parte nós controlamos a barra de status do pet
    */
    document.getElementById('fome').style.width = fome + 'px';
    document.getElementById('sono').style.width = sono + 'px';
    document.getElementById('diversao').style.width = diversao + 'px';

    /*
       Nessa parte nós controlamos a porcentagem do status do pet
    */
    document.getElementById('fome').innerHTML = fome + '%';
    document.getElementById('sono').innerHTML = sono + '%';
    document.getElementById('diversao').innerHTML = diversao + '%';
}

/*
    Essa função é responsável por começar e chamar o temporizador da função LOOP
*/
function Start() {
    var temporizador = setInterval(Loop, 1000);
}

/*
    Essa função é para recuperar a fome
*/
function Comer() {
    fome = 100;
    document.getElementById('fome').innerHTML = fome + '%';
    document.getElementById('fome').style.width = fome + 'px';
}

/*
    Essa função é para recuperar o sono
*/
function Dormir() {
    sono = 100;
    document.getElementById('sono').innerHTML = sono + '%';
    document.getElementById('sono').style.width = sono + 'px';
}

/*
    Essa função é para recuperar a diversão
*/
function Brincar() {
    diversao = 100;
    document.getElementById('diversao').innerHTML = diversao + '%';
    document.getElementById('diversao').style.width = diversao + 'px';
}


/*
  Executamos o temporizador
*/
Start();
