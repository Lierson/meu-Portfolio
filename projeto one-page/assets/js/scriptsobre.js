const text1 = document.querySelector('.firstText');
typeWriter(text1);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;     
        }, 75 * i)
      
       
    });
        

}
