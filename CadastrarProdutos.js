function CadastrarProduto(){
    var ProdutosCar = [];
    let Identificador = Math.floor(Math.random() * 65536)
    if(localStorage.getItem('ProdutosCadastrados') == null){ 
        var itens = [{
            id:Identificador,
            name_product: document.getElementById('cadastrarprodutotext').value,
            category_product:document.getElementById('cadastrarcategoriatext').value,
            valor_product:document.getElementById('cadastrarvalortext').value,
            descricao_product:document.getElementById('cadastrarprodutotext').value,
            img_product1:document.getElementById('base64').value,
            metrica:document.getElementById('cadastrarmetricatext').value
        }];
        Array.prototype.push.apply(ProdutosCar, itens)
        ProdutosJson = JSON.stringify(ProdutosCar);
        localStorage.setItem('ProdutosCadastrados',ProdutosJson)
    }else{
        var ProdutosJson =  localStorage.getItem('ProdutosCadastrados')
        var ProdutosCar = JSON.parse(ProdutosJson);
        var itens = [{
            id:Identificador,
            name_product: document.getElementById('cadastrarprodutotext').value,
            category_product:document.getElementById('cadastrarcategoriatext').value,
            valor_product:document.getElementById('cadastrarvalortext').value,
            descricao_product:document.getElementById('cadastrarprodutotext').value,
            img_product1:document.getElementById('base64').value,
            metrica:document.getElementById('cadastrarmetricatext').value
        }];
        Array.prototype.push.apply(ProdutosCar, itens)
        ProdutosJson = JSON.stringify(ProdutosCar);
        localStorage.setItem('ProdutosCadastrados',ProdutosJson)
    }
    let Flexbox = document.getElementById('products');
    let Flex = document.createElement('div');
    //let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    //let btn = document.createElement('button');
    Flex.setAttribute('class','flex') 
    
    //  img.src = document.getElementById('base64').value
    //  img.setAttribute('class','flex-img') 
    //  img.style.width =' 200px';
    p1.innerHTML = document.getElementById('cadastrarprodutotext').value;
    

    p1.setAttribute('class','flex-text') 
    p2.innerHTML = '<span style="color:red;">'+ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(document.getElementById('cadastrarvalortext').value) + '</span>'
    //btn.innerHTML = 'Add Car'
    Flex.setAttribute('onclick','Car('+Identificador+')')   
    //  Flex.appendChild(img);
    Flex.appendChild(p1);
    Flex.appendChild(p2);
    //Flex.appendChild(btn);
    Flexbox.appendChild(Flex);  

    tela('page1');
};