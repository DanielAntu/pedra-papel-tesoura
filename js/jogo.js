//elementos html
const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const playerimg = document.querySelector('#player-img')
const oponentimg = document.querySelector('#oponent-img')
const resplayer = document.querySelector('.res-player')
const resoponent = document.querySelector('.res-oponent')
const nomeplayer = document.querySelector('.nome-player')
const modal = document.querySelector('.modal')
const reiniciar = document.querySelector('#reiniciar')
const msg = document.querySelector('#msg')

//msg de resultado do jogo
const parabens = `Parabens ${localStorage.getItem('player')} você ganhou`
const perda = `Infelizmente você perdeu`
const empate = 'O jogo ficou empatado'

//contadores do jogo
var itens_img = ['../imagens/pedra.png', '../imagens/papel.png', '../imagens/tesoura.png']
var player_jogada
var oponent_jogada
var ponto_player = 0
var ponto_oponent = 0
var soma = 0

//pega o nome do player no localstorage
const pegarplayer = () => {
    nomeplayer.innerHTML = localStorage.getItem('player')
}

// função que verifica o ganhador
const verifyvictory = () => {
    if (player_jogada == 0) {
        if (oponent_jogada == 1) {
            ponto_oponent++
            resoponent.innerHTML = ponto_oponent
        } else if (oponent_jogada == 2) {
            ponto_player++
            resplayer.innerHTML = ponto_player
        }
    } else if (player_jogada == 1) {
        if (oponent_jogada == 0) {
            ponto_player++
            resplayer.innerHTML = ponto_player
        } else if (oponent_jogada == 2) {
            ponto_oponent++
            resoponent.innerHTML = ponto_oponent
        }
    } else if (player_jogada == 2) {
        if (oponent_jogada == 0) {
            ponto_oponent++
            resoponent.innerHTML = ponto_oponent
        } else if (oponent_jogada == 1) {
            ponto_player++
            resplayer.innerHTML = ponto_player
        }
    }

    //monitora o tanto de jogadas
    soma = ponto_player + ponto_oponent

    if (soma == 10) {
        modal.style.display = 'block'
    }

    //verifica as msg do modal
    if (ponto_player == ponto_oponent) {
        msg.innerHTML = empate
    } else if (ponto_player > ponto_oponent) {
        msg.innerHTML = parabens
    } else {
        msg.innerHTML = perda
    }
}


//jogadas do oponente
const oponentjogada = () => {
    //sorteio de numeros
    var jogadaoponente = Math.floor(Math.random() * 3)
    switch (jogadaoponente) {
        case 0:
            oponentimg.src = itens_img[0]
            oponentimg.style.opacity = 1
            break
        case 1:
            oponentimg.src = itens_img[1]
            oponentimg.style.opacity = 1
            break
        case 2:
            oponentimg.src = itens_img[2]
            oponentimg.style.opacity = 1
            break
    }
    oponent_jogada = jogadaoponente
    verifyvictory()
}

//inicialização do jogo
const initialize_game = () => {
    playerimg.style.opacity = 0
    oponentimg.style.opacity = 0
    ponto_player = 0
    ponto_oponent = 0
    soma = 0
    resplayer.innerHTML = 0
    resoponent.innerHTML = 0
    pegarplayer()
}

//eventos dos componentes
pedra.addEventListener('click', () => {
    playerimg.src = itens_img[0]
    playerimg.style.opacity = 1
    player_jogada = 0
    oponentjogada()
    jogada++
})

papel.addEventListener('click', () => {
    playerimg.src = itens_img[1]
    playerimg.style.opacity = 1
    player_jogada = 1
    oponentjogada()
    jogada++
})

tesoura.addEventListener('click', () => {
    playerimg.src = itens_img[2]
    playerimg.style.opacity = 1
    player_jogada = 2
    oponentjogada()
    jogada++
})

reiniciar.addEventListener('click', () => {
    initialize_game()
    modal.style.display = 'none'
})

initialize_game()