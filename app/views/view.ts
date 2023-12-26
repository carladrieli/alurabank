export abstract class View<T> {
    
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (seletor) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error (`Seletor ${seletor} não existe`);
        }        
    }

    protected abstract template(model: T): string;
    
    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }


}