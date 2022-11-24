const botaoenviar = document.querySelector('#enviar')
const form_player = document.querySelector('#player')
const player = document.querySelector('#nome')


form_player.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorage.setItem('player', player.value)
    window.location.href = '../pages/jogo.html'
})

player.addEventListener('input', () => {
    if (player.value.length >= 3) {
        botaoenviar.removeAttribute('disabled')
    } else {
        botaoenviar.setAttribute('disabled', '')
    }
})