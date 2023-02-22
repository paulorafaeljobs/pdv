MostrarProdutos()
MostrarProdutoCarrinho();

function MostrarProdutos(){

    if(localStorage.getItem('ProdutosCadastrados') !== null){ 
        var ProdutosJson =  localStorage.getItem('ProdutosCadastrados');
        var Produtos = JSON.parse(ProdutosJson);
            Produtos.forEach((item) => {
                let Flexbox = document.getElementById('products');
                let Flex = document.createElement('div');
                //  let img = document.createElement('img');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                //let btn = document.createElement('button');
                Flex.setAttribute('class','flex') 
                
                //  img.src = item.img_product1
                //  img.style.height = '80px';
                
                p1.innerHTML = item.name_product+ ' ' + item.metrica;
                p1.setAttribute('class','flex-text') 
                p2.innerHTML = '<span style="color:red;">'+ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor_product) + '</span>'
                //btn.innerHTML = 'Add Car'
                Flex.setAttribute('onclick','Car('+item.id+')')   
                //  Flex.appendChild(img);
                Flex.appendChild(p1);
                Flex.appendChild(p2);
                //Flex.appendChild(btn);
                Flexbox.appendChild(Flex);  
            })}            
} 
function MostrarProdutoCarrinho(){
    if(localStorage.getItem('Carrinho') !== null){ 
        var ProdutosJson =  localStorage.getItem('Carrinho');
        var data = JSON.parse(ProdutosJson);
            data.forEach((item) => {
                let Table = document.getElementById('carrinho');
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td'); 
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let img = document.createElement('img'); 
                let btn = document.createElement('button');
                tr.setAttribute('id',item.Identificador);
                td4.setAttribute('class','valor');
                if(item.Dir === 'Bebidas'){
                    img.src = 'produto/'+item.Img1
                    img.style.height = '40px';
                }else{
                    img.src = 'produto/'+item.Img1
                    img.style.height = '40px';
                    //img.setAttribute('class','flex-img') 
                }
                td2.innerHTML = item.Produto;  
                td3.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.Preco);
                td4.innerHTML = item.Preco;  
                btn.innerHTML = 'Excluir';
                btn.setAttribute('class','btnExcluir');
                btn.setAttribute('onclick','DelProdutoCarrinho('+item.Identificador+','+item.Id+')');
                tr.appendChild(td1);
                td1.appendChild(img);
                tr.appendChild(td2);   
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5)
                td5.appendChild(btn);
                Table.appendChild(tr);
            });
    }
    automatic();
}
function Car(idProduto){

    var ProdutosJson =  localStorage.getItem('ProdutosCadastrados');
    var data = JSON.parse(ProdutosJson);

    result = data.find(item => item.id === idProduto);
    let Id = result.id_;
    let Produto = result.name_product+ ' '+ result.metrica;;
    let Preco = result.valor_product;
    let Img1 = result.img_product1
    let Dir =result.category_product
    AddProdutoCarrinho(Id ,Produto,Preco,Img1,Dir)
}
function AddProdutoCarrinho(Id,Produto,Preco,Img1,Dir){
    var ProdutosCar = [];
    let Identificador = Math.floor(Math.random() * 65536)
    if(localStorage.getItem('Carrinho') == null){ 
        var itens = [{ Identificador:Identificador, Id:Id, Produto:Produto, Preco:Preco, Img1:Img1, Dir:Dir }];
        Array.prototype.push.apply(ProdutosCar, itens)
        ProdutosJson = JSON.stringify(ProdutosCar);
        localStorage.setItem('Carrinho',ProdutosJson)
    }else{
        var ProdutosJson =  localStorage.getItem('Carrinho')
        var ProdutosCar = JSON.parse(ProdutosJson);
        var itens = [{ Identificador:Identificador, Id:Id, Produto:Produto, Preco:Preco, Img1:Img1, Dir:Dir }];
        Array.prototype.push.apply(ProdutosCar, itens)
        ProdutosJson = JSON.stringify(ProdutosCar);
        localStorage.setItem('Carrinho',ProdutosJson)
    }
    let Table = document.getElementById('carrinho');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td'); 
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let img = document.createElement('img'); 
    let btn = document.createElement('button');
    td4.setAttribute('class','valor');
    if(Dir === 'Bebidas'){
        img.src = Img1
        img.style.height = '40px';
    }else{
        img.src = Img1
        img.style.height = '40px';
    }
    tr.setAttribute('id',Identificador) 
    td2.innerHTML = Produto
    td3.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Preco)
    td4.innerHTML = Preco
    btn.innerHTML = 'Excluir'
    btn.setAttribute('class','btnExcluir');
    btn.setAttribute('onclick','DelProdutoCarrinho('+Identificador+','+Id+')');
    tr.appendChild(td1);
    td1.appendChild(img);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(btn);
    Table.appendChild(tr);
    automatic();
}
function DelProdutoCarrinho(Identificador,Id){
    if(localStorage.getItem('Carrinho') !== null){ 
        var ProdutosJson =  localStorage.getItem('Carrinho')
        var data = JSON.parse(ProdutosJson);

        removerPorId(data,Id);
        function removerPorId(array, Id) {
            var result = array.filter(function(el) {
            return el.Id == Id;
            });
            
            for(var elemento of result){
            var index = array.indexOf(elemento);    
            array.splice(index, 1);
            }
        }
        localStorage.setItem('Carrinho',JSON.stringify(data))
    }
    let linha = document.getElementById(Identificador);
    linha.remove();
    automatic();
}
function SomaValores(){
    let Soma1 = document.getElementById('car1');
    let Soma2 = document.getElementById('car2');
    let tdsValores = document.querySelectorAll('.valor');
    let total = 0;
    for (let i = 0; i < tdsValores.length; i++) {
        let valor = parseFloat(tdsValores[i].textContent)
        total = total + valor 
    }
    Soma1.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    Soma2.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    //Soma2.innerHTML = total;
    
}
function automatic(){
    SomaValores();
}

function Finalizar(){
    localStorage.clear('Carrinho') 
    location.reload()
}