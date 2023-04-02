class StickersModel {
    constructor(checkbox, quantidade, texto){
        this.checkbox = checkbox;
        this.quantidade = quantidade;
        this.texto = texto;
    }
   
    get getCheckbox(){
        return this.checkbox;
    }

    get getQuantidade(){
        return this.quantidade;
    }

    get getTexto(){
        return this.texto;
    }
    
}