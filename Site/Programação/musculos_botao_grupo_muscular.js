let numero_Peito = 0
let numero_Braço = 0
let numero_Antebraço = 0
let numero_Ombro = 0
let numero_Costas = 0
let numero_Abdômen = 0
let numero_Glúteos = 0
let numero_Perna = 0

let Botões = window.document.getElementsByClassName('GrupoMuscular')
let Peito = window.document.getElementById('Peito')
let Braço = window.document.getElementById('Braço')
let Antebraço = window.document.getElementById('Antebraço')
let Ombro = window.document.getElementById('Ombro')
let Costas = window.document.getElementById('Costas')
let Abdômen = window.document.getElementById('Abdômen')
let Glúteos = window.document.getElementById('Glúteos')
let Perna = window.document.getElementById('Perna')

let Auxiliar = window.document.getElementById('Auxiliar')
let ArtPeito = window.document.getElementById('ArtPeito')
let ArtBraço = window.document.getElementById('ArtBraço')
let ArtAntebraço = window.document.getElementById('ArtAntebraço')
let ArtOmbro = window.document.getElementById('ArtOmbro')
let ArtCostas = window.document.getElementById('ArtCostas')
let ArtAbdômen = window.document.getElementById('ArtAbdômen')
let ArtGlúteos = window.document.getElementById('ArtGlúteos')
let ArtPerna = window.document.getElementById('ArtPerna')

Peito.addEventListener('click', botao_peito)
Braço.addEventListener('click', botao_braço)
Antebraço.addEventListener('click', botao_antebraço)
Ombro.addEventListener('click', botao_ombro)
Costas.addEventListener('click', botao_costas)
Abdômen.addEventListener('click', botao_abdômen)
Glúteos.addEventListener('click', botao_glúteos)
Perna.addEventListener('click', botao_perna)

Peito.addEventListener('mouseenter', function(){botao_fixo(Peito)})
Braço.addEventListener('mouseenter', function(){botao_fixo(Braço)})
Antebraço.addEventListener('mouseenter', function(){botao_fixo(Antebraço)})
Ombro.addEventListener('mouseenter', function(){botao_fixo(Ombro)})
Costas.addEventListener('mouseenter', function(){botao_fixo(Costas)})
Abdômen.addEventListener('mouseenter', function(){botao_fixo(Abdômen)})
Glúteos.addEventListener('mouseenter', function(){botao_fixo(Glúteos)})
Perna.addEventListener('mouseenter', function(){botao_fixo(Perna)})

Peito.addEventListener('mouseout', function(){botao_normal_atual(Peito ,numero_Peito)})
Braço.addEventListener('mouseout', function(){botao_normal_atual(Braço ,numero_Braço)})
Antebraço.addEventListener('mouseout', function(){botao_normal_atual(Antebraço ,numero_Antebraço)})
Ombro.addEventListener('mouseout', function(){botao_normal_atual(Ombro ,numero_Ombro)})
Costas.addEventListener('mouseout', function(){botao_normal_atual(Costas ,numero_Costas)})
Abdômen.addEventListener('mouseout', function(){botao_normal_atual(Abdômen ,numero_Abdômen)})
Glúteos.addEventListener('mouseout', function(){botao_normal_atual(Glúteos ,numero_Glúteos)})
Perna.addEventListener('mouseout', function(){botao_normal_atual(Perna ,numero_Perna)})

function botao_peito() {
    botao_normal(Braço, Antebraço, Ombro, Costas, Abdômen, Glúteos, Perna)
    botao_fixo(Peito)
    art_invisivel(ArtBraço, ArtAntebraço, ArtOmbro, ArtCostas, ArtAbdômen, ArtGlúteos, ArtPerna)
    ArtPeito.style.display = 'Block' 
    numero_Peito = 1
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
    numero_Perna = 0

}

function botao_braço() {
    botao_normal(Peito, Antebraço, Ombro, Costas, Abdômen, Glúteos, Perna)
    botao_fixo(Braço)
    art_invisivel(ArtPeito, ArtAntebraço, ArtOmbro, ArtCostas, ArtAbdômen, ArtGlúteos, ArtPerna)
    ArtBraço.style.display = 'Block'
    numero_Braço = 1
    numero_Peito = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
    numero_Perna = 0
}

function botao_antebraço() {
    botao_normal(Peito, Braço, Ombro, Costas, Abdômen, Glúteos, Perna)
    botao_fixo(Antebraço)
    art_invisivel(ArtPeito, ArtBraço, ArtOmbro, ArtCostas, ArtAbdômen, ArtGlúteos, ArtPerna)
    ArtAntebraço.style.display = 'Block'
    numero_Antebraço = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
    numero_Perna = 0
}

function botao_ombro() {
    botao_normal(Peito, Braço, Antebraço, Costas, Abdômen, Glúteos, Perna)
    botao_fixo(Ombro)
    art_invisivel(ArtPeito, ArtBraço, ArtAntebraço, ArtCostas, ArtAbdômen, ArtGlúteos, ArtPerna)
    ArtOmbro.style.display = 'Block'
    numero_Ombro = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
    numero_Perna = 0
}

function botao_costas() {
    botao_normal(Peito, Braço, Antebraço, Ombro, Abdômen, Glúteos, Perna)
    botao_fixo(Costas)
    art_invisivel(ArtPeito, ArtBraço, ArtAntebraço, ArtOmbro, ArtAbdômen, ArtGlúteos, ArtPerna)
    ArtCostas.style.display = 'Block'
    numero_Costas = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
    numero_Perna = 0
}

function botao_abdômen() {
    botao_normal(Peito, Braço, Antebraço, Ombro, Costas, Glúteos, Perna)
    botao_fixo(Abdômen)
    art_invisivel(ArtPeito, ArtBraço, ArtAntebraço, ArtOmbro, ArtCostas, ArtGlúteos, ArtPerna)
    ArtAbdômen.style.display = 'Block'
    numero_Abdômen = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Glúteos = 0
    numero_Perna = 0
}

function botao_glúteos() {
    botao_normal(Peito, Braço, Antebraço, Ombro, Costas, Abdômen, Perna)
    botao_fixo(Glúteos)
    art_invisivel(ArtPeito, ArtBraço, ArtAntebraço, ArtOmbro, ArtCostas, ArtAbdômen, ArtPerna)
    ArtGlúteos.style.display = 'Block'
    numero_Glúteos = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Perna = 0
}

function botao_perna() {
    botao_normal(Peito, Braço, Antebraço, Ombro, Costas, Abdômen, Glúteos)
    botao_fixo(Perna)
    art_invisivel(ArtPeito, ArtBraço, ArtAntebraço, ArtOmbro, ArtCostas, ArtAbdômen, ArtGlúteos)
    ArtPerna.style.display = 'Block'
    numero_Perna = 1
    numero_Peito = 0
    numero_Braço = 0
    numero_Antebraço = 0
    numero_Ombro = 0
    numero_Costas = 0
    numero_Abdômen = 0
    numero_Glúteos = 0
}

function botao_normal(Grupo1, Grupo2, Grupo3, Grupo4, Grupo5, Grupo6, Grupo7) {
    Grupo1.style.background = '#553C3A'
    Grupo1.style.color = 'white'
    Grupo1.style.border = 'none'
    Grupo1.style.cursor = 'default'
    Grupo1.style.borderRadius = '0px'

    Grupo2.style.background = '#553C3A'
    Grupo2.style.color = 'white'
    Grupo2.style.border = 'none'
    Grupo2.style.cursor = 'default'
    Grupo2.style.borderRadius = '0px'

    Grupo3.style.background = '#553C3A'
    Grupo3.style.color = 'white'
    Grupo3.style.border = 'none'
    Grupo3.style.cursor = 'default'
    Grupo3.style.borderRadius = '0px'

    Grupo4.style.background = '#553C3A'
    Grupo4.style.color = 'white'
    Grupo4.style.border = 'none'
    Grupo4.style.cursor = 'default'
    Grupo4.style.borderRadius = '0px'

    Grupo5.style.background = '#553C3A'
    Grupo5.style.color = 'white'
    Grupo5.style.border = 'none'
    Grupo5.style.cursor = 'default'
    Grupo5.style.borderRadius = '0px'
    
    Grupo6.style.background = '#553C3A'
    Grupo6.style.color = 'white'
    Grupo6.style.border = 'none'
    Grupo6.style.cursor = 'default'
    Grupo6.style.borderRadius = '0px'

    Grupo7.style.background = '#553C3A'
    Grupo7.style.color = 'white'
    Grupo7.style.border = 'none'
    Grupo7.style.cursor = 'default'
    Grupo7.style.borderRadius = '0px'
}

function botao_normal_atual(BotãoAtual, numero_atual) {
    if (numero_atual == 0) {
        BotãoAtual.style.background = '#553C3A'
        BotãoAtual.style.color = 'white'
        BotãoAtual.style.border = 'none'
        BotãoAtual.style.cursor = 'default'
        BotãoAtual.style.borderRadius = '0px'
    } else if (numero_atual == 1) {
        botao_fixo(BotãoAtual)
    }
}

function botao_fixo(nome_botao_atual) {
    nome_botao_atual.style.background = 'white'
    nome_botao_atual.style.color = 'black'
    nome_botao_atual.style.border = 'solid 5px #804642'
    nome_botao_atual.style.borderBottom = 'none'
    nome_botao_atual.style.borderRadius = '10px 10px 0px 0px'
    nome_botao_atual.style.cursor = 'pointer'
}

function art_invisivel(Art1, Art2, Art3, Art4, Art5, Art6, Art7) {
    Auxiliar.style.display = 'none'
    Art1.style.display = 'none'
    Art2.style.display = 'none'
    Art3.style.display = 'none'
    Art4.style.display = 'none'
    Art5.style.display = 'none'
    Art6.style.display = 'none'
    Art7.style.display = 'none'
}