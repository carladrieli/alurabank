export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (seletor) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
