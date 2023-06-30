let totalSlides = document.querySelectorAll('.slider_item').length; // Obtém o número total de slides no carrossel (Get the total number of slides in the carousel)
let currentSlide = 0; // Define o slide atual como o primeiro slide (Set the current slide as the first slide)

document.querySelector('.slider_width').style.width = `calc(100vw * ${totalSlides})`; // Define a largura do elemento de contêiner do carrossel com base no número total de slides (Set the width of the carousel container element based on the total number of slides)
document.querySelector('.slider_controls').style.height = `${document.querySelector('.slider').clientHeight}px`; // Define a altura dos controles do carrossel com base na altura do elemento de carrossel (Set the height of the carousel controls based on the height of the carousel element)

function goPrev() {
    currentSlide--; // Move para o slide anterior - (Moves to the previous slide)
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volta para o último slide se estiver no primeiro slide - (Goes back to the last slide if currently on the first slide)
    }
    updateMargin(); // Atualiza a margem do carrossel para exibir o slide atual - (Updates the carousel margin to display the current slide)
}

function goNext() {
    currentSlide++; // Move para o próximo slide - (Moves to the next slide)
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0; // Volta para o primeiro slide se estiver no último slide - (Goes back to the first slide if currently on the last slide)
    }
    updateMargin(); // Atualiza a margem do carrossel para exibir o slide atual - (Updates the carousel margin to display the current slide)
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider_item').clientWidth; // Obtém a largura de um slide individual - (Gets the width of an individual slide)
    let newMargin = (currentSlide * sliderItemWidth); // Calcula a nova margem com base no slide atual - (Calculates the new margin based on the current slide)
    document.querySelector('.slider_width').style.marginLeft = `-${newMargin}px`; // Define a margem esquerda negativa para exibir o slide atual - (Sets the negative left margin to display the current slide)
}

setInterval(goNext, 5000); // Alterna automaticamente para o próximo slide a cada 5 segundos - (Automatically switches to the next slide every 5 seconds)

