//ejercicio para practicar funciones event

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(event){
    //console.log(event.target.dataset.id);

    const id = event.target.dataset.id;

    //si id existe, entonces quiero hacer ...
    if(id){
        //remove "active" from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            // agrego "active" al boton que seleccione
            event.target.classList.add('active');
        });
        // hide other articles and display the one i'm clicking
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        //funcion para agregar "active" al article que estoy seleccionando
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});