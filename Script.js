function tela(tela) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("Menu");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    };
    document.getElementById(tela).style.display = "block";
};
tela('page1');


function Convert() {
    var receberArquivo = document.getElementById("img-convert").files;
    if (receberArquivo.length > 0) {
        var carregarImagem = receberArquivo[0];
        var lerArquivo = new FileReader();
        lerArquivo.onload = function(arquivoCarregado) {
            document.getElementById("base64").innerHTML = ''
            var imagemBase64 = arquivoCarregado.target.result; 
            document.getElementById("base64").value = imagemBase64

            document.getElementById('base64img').src = imagemBase64
        }
        lerArquivo.readAsDataURL(carregarImagem);
    }
}