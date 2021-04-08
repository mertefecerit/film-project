const form = document.getElementById('form');
const films = document.getElementById('films');

// Dom Loaded Event
document.addEventListener('DOMContentLoaded',function (){
    UI.getFilmsFromStorageToUI();
})
films.addEventListener('click',function (e){
    const storage = new Storage();
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.getFilmsFromStorageToUI();
})
// Film Create Event
form.addEventListener('submit',function (e){
    e.preventDefault();
    const newFilm = new Film();
    newFilm.createNewFilm();
});

