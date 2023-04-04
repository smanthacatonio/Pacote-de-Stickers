class StickersController {
    constructor() {
        this.bind();
    }

    bind() {
        document.querySelector('#diminuir').addEventListener('click', (e)=>{
            this.diminuir();
        });

        document.querySelector('#aumentar').addEventListener('click', (e)=>{
            this.aumentar();
        });

        document.querySelector("#btnEnviar").addEventListener('click', (e) => {
            this.enviar();
        });

        this.init();

    }

    diminuir(){
        let quantidade = parseInt(document.querySelector('#quantidade box').textContent);
        if (quantidade <= 0) {
           document.querySelector('#diminuir').disabled = true;
           document.querySelector('#diminuir').classList.add('erro');
        }
        quantidade--;
        document.querySelector('#quantidade box').textContent = quantidade;
    }

    aumentar(){
        let quantidade = parseInt(document.querySelector('#quantidade box').textContent);
        quantidade++;
        document.querySelector('#quantidade box').textContent = quantidade;
    }

    enviar() {
        let btnEnviar = document.querySelector('#btnEnviar')
       
        btnEnviar.addEventListener('click', (e)=>{
            alert('Pedido enviado com sucesso')
        })
    }

    init() {
        document.querySelector('#check').value = "";
        document.querySelector('#quantidade box').textContent = 0;
        document.querySelector('#textArea').value = "";
    }

}
