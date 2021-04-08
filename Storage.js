class Storage {
    addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        const newFilmObject = {
            title : newFilm.title.value,
            director : newFilm.director.value,
            bannerUrl : newFilm.bannerUrl.value
        }
        films.push(newFilmObject);
        localStorage.setItem('films',JSON.stringify(films));
    }
    getFilmsFromStorage(){
        let films;
        if(localStorage.getItem('films') === null){
            films = [];
        }else{
            films = JSON.parse(localStorage.getItem('films'));
        }
        return films;
    }
    deleteFilmFromStorage(title){
        let films = this.getFilmsFromStorage();
        films.forEach(function (film,index){
            if(film.title === title){
                films.splice(index,1);
            }
        });
        localStorage.setItem('films',JSON.stringify(films));
    }
}
