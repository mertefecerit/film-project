class Film{
    constructor() {
        this.title = document.getElementById('filmTitle');
        this.director = document.getElementById('filmDirector');
        this.bannerUrl = document.getElementById('filmBannerUrl');
    }
    createNewFilm(){
        const userInterface = new UI();
        const storage = new Storage();
        if(this.title.value !== "" && this.director.value !== "" && this.bannerUrl.value !== ""){
            storage.addFilmToStorage(this);
            UI.getFilmsFromStorageToUI();
            userInterface.clearAllInput(this);
            userInterface.showMessage(true);
        }else{
            userInterface.showMessage(false);
        }
    }
}
