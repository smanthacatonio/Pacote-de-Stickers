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
            document.querySelector('#diminuir').disable = true;
            return;
        }

        document.querySelector('#diminuir').classList.remove('desabilitado');
        quantidade--;
        document.querySelector('#quantidade box').textContent = quantidade;
    }

    aumentar(){
        let quantidade = parseInt(document.querySelector('#quantidade box').textContent);
        quantidade++;
        document.querySelector('#quantidade box').textContent = quantidade;
    }

    enviar() {
        let texto = document.querySelector('#textoObs').value;
        let qtd = parseInt(document.querySelector('#cont').textContent);

        let sticker = document.getElementsByName('tipo');
        let stickerSelecionado;
        for(let i = 0; i < sticker.length; i++) {
            if(sticker[i].checked) {
                stickerSelecionado = sticker[i].nextElementSibling.textContent;
                break;
            }
        }

        let novaModel = new StickersModel(stickerSelecionado, qtd, texto);
        let novaView = new StickersView(novaModel);
        document.querySelector('#mensagem').innerHTML = novaView.template();
        this.init();

       
    }

    init() {
        document.querySelector('#checkbox1').value = "";
        document.querySelector('#cont').textContent = 0;
        document.querySelector('#textoObs').value = "";
    }

}
