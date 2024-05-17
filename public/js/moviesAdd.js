window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", (e) => {
        titulo.style.color = "blue"
    })

    titulo.addEventListener("mouseout", (e) => {
        titulo.style.color = "black"
    })

    const tituloInput = document.querySelector("#titulo")

    tituloInput.addEventListener("keyup", (e) => {
        // console.log(tituloInput.value)

        let estadoSecreto = 0

        const value = tituloInput.value

        switch (true) {
            case value == "s":
                estadoSecreto = 1
                console.log(estadoSecreto);
                break;
            case value == "se":
                estadoSecreto = 2
                console.log(estadoSecreto);
                break;
            case value == "sec":
                estadoSecreto = 3
                console.log(estadoSecreto);
                break;
            case value == "secr":
                estadoSecreto = 4
                console.log(estadoSecreto);
                break;
            case value == "secre":
                estadoSecreto = 5
                console.log(estadoSecreto);
                break;
            case value == "secret":
                estadoSecreto = 6
                console.log(estadoSecreto);
                break;
            case value == "secreto":
                estadoSecreto = 0
                alert("SECRETO MAGICO")
                break;

            default:
                estadoSecreto = 0
                console.log(estadoSecreto);
                break;
        }
    })

}