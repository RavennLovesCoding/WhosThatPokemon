let myImg = document.getElementById("myImg");
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    // event.preventDefault() 
    let beat = new Audio('sound.mp3');
    beat.play();
    
    



}, { once: true });




myButton.addEventListener("click", function() {
    setTimeout(() => {
      // Code to execute after 6 seconds
      const container = document.getElementById("container");

    container.innerHTML += `<br><img src="images/c2.jpg" class="grid">`;
    }, 6000); 
}, { once: true });