const writtenanimation = document.querySelector('.firstText');
typewriter(writtenanimation);

function typewriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letter, position) => {
        setTimeout(function() {
            element.innerHTML += letter;     
        }, 75 * position)
      
       
    });
        

}
