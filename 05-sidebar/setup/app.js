const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    //codigo más largo para hacer aparecer la barra lateral:
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }

    //codigo de una sola linea para hacer aparecer la barra lateral
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})