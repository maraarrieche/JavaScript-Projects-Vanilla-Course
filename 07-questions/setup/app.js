//using selectors inside the element metodo #1

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    btn.addEventListener('click', function(){
        //el parametro item es el mismo que las preguntas (son las mismas preguntas) pero no queremos repetir el nombre del parametro
        questions.forEach(function (item) {
            //console.log(item);
            //article es question
            if(item !== question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
});

//me gusto mas la opcion #2, la vi mas sencilla 


//#opcion2
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function (event) {
//         //current target es el boton que estoy presionando y parent element es el titulo padre de todos los titulos (la pregunta)
//         const question = event.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text');
//     });
// });

//usamos dos parent element para llegar primero al titulo y despues a la pregunta como tal, despues de llegar a la pregunta tenemos el toggle que es para mostrar el texto