const prompt = require('prompt-sync')();

function determinarPatente(nivelPersonagem) {
    let patentePersonagem = '';

    switch (true) {
        case (nivelPersonagem <= 1000):
            patentePersonagem = "Ferro";
            break;
        case (nivelPersonagem >= 1001 && nivelPersonagem <= 2000):
            patentePersonagem = "Bronze";
            break;
        case (nivelPersonagem >= 2001 && nivelPersonagem <= 5000):
            patentePersonagem = "Prata";
            break;
        case (nivelPersonagem >= 5001 && nivelPersonagem <= 7000):
            patentePersonagem = "Ouro";
            break;
        case (nivelPersonagem >= 7001 && nivelPersonagem <= 8000):
            patentePersonagem = "Platina";
            break;
        case (nivelPersonagem >= 8001 && nivelPersonagem <= 9000):
            patentePersonagem = "Ascendente";
            break;
        case (nivelPersonagem >= 9001 && nivelPersonagem <= 10000):
            patentePersonagem = "Imortal";
            break;
        case (nivelPersonagem > 10001):
            patentePersonagem = "Radiante";
            break;
        default:
            patentePersonagem = "Inválida";
            break;
    }

    return patentePersonagem;
}

function validarSexoPersonagem() {
    let sexo;
    while (!sexo) {
        sexo = prompt('Qual é o sexo do seu personagem? (M ou F) ').toLowerCase();
        if (!['m', 'f'].includes(sexo)) {
            console.log('Por favor, escolha o sexo entre Masculino (M) ou Feminino (F).');
            sexo = '';
        }
    }
    return sexo;
}

let sexoPersonagem = validarSexoPersonagem();
let generoArtigo = (sexoPersonagem === 'm') ? 'O' : 'A';
let ligacao = (sexoPersonagem === 'm') ? 'do seu' : 'da sua';
let generoPersonagem = (sexoPersonagem === 'm') ? 'herói' : 'heroína';

function validarNomePersonagem() {
    let nome;
    while (!nome) {
        nome = prompt(`Qual é o nome ${ligacao} ${generoPersonagem}? `);
        if (!nome || !isNaN(nome)) {
            console.log('Por favor, insira um nome válido que não seja apenas um número.');
            nome = '';
        }
    }
    return nome;
}
let nomePersonagem = validarNomePersonagem();

function validarNivelPersonagem() {
    let nivel;
    while (!nivel) {
        nivel = prompt(`E qual o nível de XP ${ligacao} ${generoPersonagem}? `);
        if (isNaN(nivel) || nivel < 0) {
            console.log('Por favor, insira um número inteiro positivo para o nível de XP.');
            nivel = '';
        }
    }
    return parseInt(nivel);
}
let nivelPersonagem = validarNivelPersonagem();

try {
    let patentePersonagem = determinarPatente(nivelPersonagem);
    let frasePadrao = `${generoArtigo} ${nomePersonagem} está no elo ${patentePersonagem} com ${nivelPersonagem} de XP!`;
    console.log(frasePadrao);
} catch (erro) {
    console.log('Erro:', erro.message);
}