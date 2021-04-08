class UI {
    constructor() {
        this.failureMessageBlock = document.getElementById("failureMessageBlock");
        this.successMessageBlock = document.getElementById("successMessageBlock");
    }
    clearAllInput(newFilm){
        newFilm.title.value="";
        newFilm.director.value="";
        newFilm.bannerUrl.value="";
    }
    showMessage(type){
        if(type === true){
            this.successMessageBlock.classList.remove("d-none");
            this.failureMessageBlock.classList.add("d-none");
        }else{
            this.successMessageBlock.classList.add("d-none");
            this.failureMessageBlock.classList.remove("d-none");
        }
    }
    static getFilmsFromStorageToUI(){
        const storage = new Storage();
        let films = storage.getFilmsFromStorage();
        const filmsArea = document.getElementById("films");
        filmsArea.innerHTML = "";
        films.forEach(function (film){
            filmsArea.innerHTML += `
            <tr>
                <td class="w-25 aling-middle text-center"><img class="img-fluid" src="${film.bannerUrl}"/></td>
                <td class="align-middle text-center">${film.title}</td>
                <td class="align-middle text-center">${film.director}</td>
                <td class="align-middle text-center">
                <button type="button" class="btn btn-sm btn-danger">x</button>
                </td>
            </tr>
        `;
        })
    }
}
