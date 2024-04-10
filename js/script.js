$('.owl-carousel').owlCarousel ({
    loop: true, // * Define se vai ficar em loop rolando infinitamente 
    margin: 10, // * Margin entre os elementos
    nav: false, // * Define se vai ter ou nao os chevron para passar paginas
    responsive: { //* Responsividade de como vai se comportar os items para cada tamanho de tela
        0: {
            item:1
        },
        600: {
            item:3
        },
        1000: {
            item:5
        }
    }
})