const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    path: '../Cake/animation/anima.json' 
  });

  animation.play();
