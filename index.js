function new_movie() {
    console.log ("movie picked");
    var random_number = Math.round(Math.random() * 4 + 1);
    console.log (random_number);
    var image="";
    if(random_number == 1) {
        image="minions.jpg"
    }
    if(random_number == 2) {
        image="dinosaur.jpg"
    }
    if(random_number == 3) {
        image="movie.jpg"
    }
    if(random_number == 4) {
        image="th.jpg"
    }
    if(random_number == 5) {
        image="73509.jpg"
    }
    document.querySelector("img").src = image
}