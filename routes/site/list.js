let itemList = document.getElementById('itemList');
let qtd = document.getElementById('qtd');
let price = document.getElementById('price');
let list = document.getElementById('list');
let totField = document.getElementById('total');//Capo que aparece os totais 
//let totprice =0;
let vetItem = []; //Array dos itens adicionados
let vetQtd = []; // Array das quantidades adicionadas
let vetPrice = []; //Array dos preços adicionados


//Tela de adicionar novo item

let newitem = document.getElementById('addnewinput')//input 
let addnew = document.getElementById('addnew')//lista


//Fim de tela de adicionar novo item


//Elementos das divs que irão ter as cores alteradas! 
let div1 = document.getElementById('1');
let div2 = document.getElementById('2');
let div3 = document.getElementById('3');
let div4 = document.getElementById('4');
let div5 = document.getElementById('5');
let div6 = document.getElementById('6');
let divO = document.getElementById('DivOrc')
let bebO = document.getElementById('BebOrc')
let uorc = document.getElementById('UOrc')
let horc = document.getElementById('HOrc')
let torc = document.getElementById('TOrc')
let carc = document.getElementById('CarOrc')




//Fim elementos div

//Alimentos
let food = ['ARROZ','FEIJÃO', 'FEIJAO', 'AÇUCAR', 'AÇÚCAR', 'CAFÉ', 'CAFE','CHA','CHÁ', 'ACHOCOLATADO', 'TODDY', 'NESCAU','LEITE', 'PÃO', 'PAO','FARINHADETRIGO', 'FARINHADEROSCA', 'AMIDODEMILHO','FERMENTO', 'MACARRAO', 'MACARRÃO', 'MOLHODETOMATE', 'LEITECONDENSADO', 'CREMEDELEITE', 'GELATINA','KETCHUP','MAIONESE','ÓLEO', 'OLEO', 'AZEITE', 'VINAGRE', 'TEMPERO PRONTO', 'SAL','arroz','feijão', 'feijao', 'açucar', 'açúcar', 'café', 'cafe','cha','chá', 'achocolatado', 'toddy', 'nescau','leite', 'pão', 'pao','farinhadetrigo', 'farinhaderosca', 'amidodemilho','fermento', 'macarrao', 'macarrão', 'molhodetomate', 'leitecondensado', 'cremedeleite', 'gelatina','ketchup','maionese','óleo', 'oleo', 'azeite', 'vinagre', 'temperopronto', 'sal'
];
let foods = 0;
let foodsPrice = 0;
//Fim Alimentos

//Carnes

let meat =['BIFE', 'CARNEMOÍDA','CARNEMOIDA','FRANGO','ASADEFRANGO', 'PRESUNTO','MORTADELA','SALSICHA','LINGUIÇA','LINGUICA','PORCO','CARNEDEPORCO','CARNE','CARNES','bife', 'carnemoída','carnemoida','frango','asadefrango', 'presunto','mortadela','salsicha','linguiça','linguica','porco','carnedeporco','carne','carnes']
let meats = 0;
let meatsPrice = 0;

//Fim Carnes

//Bebidas
let beverage = ['AGUA','ÁGUA','REFRIGERANTE','COCACOLA','PEPSI','CERVEJA','SUCO','VINHO','agua','água','refrigerante','cocacola','pepsi','cerveja','suco','vinho'
];
let beverages = 0;
let beveragesPrice = 0;
//Fim bebidas

//PRODUTOS DE LIMPEZA E UTILIDADES
let cleanProduct = ['DETERGENTE','DESINFETANTE','ÁGUASANITÁRIA','AGUASANITÁRIA','AGUASANITARIA', 'SABÃOEMPÓ','SABAOEMPÓ','SABAOEMPO','AMACIANTE','ALCOOL','ÁLCOOL','LUSTRAMÓVEIS', 'LUSTRAMOVEIS','INSETICIDA','SACODELIXO','PAPELTOALHA','GUARDANAPO','PAPELALUMÍNIO','PAPELALUMINIO','FILMEPLASCITO','FILMEPLÁSTICO','ESPONJADEACO','ESPONJADEAÇO','FÓSFORO','FOSFORO','PALITODEDENTE','detergente','desinfetante','águasanitária','aguasanitária','aguasanitaria', 'sabãoempó','sabaoempó','sabaoempo','amaciante','alcool','álcool','lustramóveis', 'lustramoveis','inseticida','sacodelixo','papeltoalha','guardanapo','papelalumínio','papelaluminio','filmeplascito','filmeplástico','esponjadeaco','esponjadeaço','fósforo','fosforo','palitodedente'];

let cleanProducts = 0;
let cleanProductsPrice = 0;

//FIM PRODUTOS DE LIMPEZA

//higiene

let hig = ['SHAMPOO','CONDICIONADOR','SABONETE','DESODORANTE','CREMEDENTAL','PAPELHIGIÊNICO','PAPELHIGIENICO','FIODENTAL','ESCOVADEDENTES','COTONETE','ALGODÃO','ALGODAO','ABSORVENTE','shampoo','condicionador','sabonete','desodorante','cremedental','papelhigiênico','papelhigienico','fiodental','escovadedentes','cotonete','algodão','algodao','absorvente'
];
let higs = 0;
let higsPrice = 0;


function adds(){
    if(itemList.value == '' || qtd.value == '' || price.value == ''){
        
       alert("Preencha os campos em branco")
   
         
    }else if(qtd.value <1){
        alert("Quantidade inválida.")
        qtd.focus()
       

    }else if(price.value <=0){
        alert("Preço inválido.")
        price.focus()
        
    }
    else {

    
        vetItem.push(itemList.value);
        vetQtd.push(Number(qtd.value))
        vetPrice.push(Number(price.value))
   
        let totprice = price.value * qtd.value;
        let item = document.createElement('option');
        item.innerHTML = `[${qtd.value}] ${itemList.value} |Un. R$ ${price.value} |Total: R$ ${totprice.toFixed(2)}`;
        list.appendChild(item)
        
        
        if(food.indexOf(itemList.value.replace(/\s/g, ''))!== -1){
            foods+= Number(qtd.value);
            foodsPrice+= (price.value) * (qtd.value);
            
        }
    
        if(meat.indexOf(itemList.value.replace(/\s/g, ''))!== -1){
            meats+= Number(qtd.value);
            meatsPrice += (price.value) * (qtd.value);
            
        }
    
        if(beverage.indexOf(itemList.value.replace(/\s/g, ''))!== -1){
            beverages+= Number(qtd.value);
            beveragesPrice += (price.value) * (qtd.value);
            
        }
    
        if(cleanProduct.indexOf(itemList.value.replace(/\s/g, ''))!== -1){
            cleanProducts+= Number(qtd.value);
            cleanProductsPrice += (price.value) * (qtd.value);
            
        }
        if(hig.indexOf(itemList.value.replace(/\s/g, ''))!== -1){
            higs+= Number(qtd.value);
            higsPrice += (price.value) * (qtd.value);
            
        }
        refresh();    
       
       
    }
    
}

function refresh(){

    var soma = 0;
    for (let i = 0; i < list.length; i++){
      

        soma += vetQtd[i] * vetPrice[i];

        
    }
//alimentos div de cor

    if(divO.value === ''){
        div1.style.backgroundColor = 'lime'
    }else{
    if(foodsPrice <=(divO.value/4)){
    div1.style.backgroundColor = 'lime'
    }
    else if(foodsPrice <(divO.value/1.5)){
    div1.style.backgroundColor = 'yellow'
    }
    else if(foodsPrice <(divO.value/1.2)){
    div1.style.backgroundColor = 'red'
    }
    else if(foodsPrice >= divO.value){
    div1.style.backgroundColor = ' rgb(85, 2, 2)'
    }
}

//bebidas div de cor
    if(bebO.value === ''){
        div2.style.backgroundColor = 'lime'
    }else{
    if(beveragesPrice <=(bebO.value/4)){
    div2.style.backgroundColor = 'lime'
    }
    else if(beveragesPrice <(bebO.value/1.5)){
    div2.style.backgroundColor = 'yellow'
    }
    else if(beveragesPrice <(bebO.value/1.2)){
    div2.style.backgroundColor = 'red'
    }
    else if(beveragesPrice >= bebO.value){
    div2.style.backgroundColor = ' rgb(85, 2, 2)'
    }
}

//Carnes div de cor
    if(carc.value === ''){
        div3.style.backgroundColor = 'lime'
    }else{
    if(meatsPrice <=(carc.value/4)){
    div3.style.backgroundColor = 'lime'
    }
    else if(meatsPrice <(carc.value/1.5)){
    div3.style.backgroundColor = 'yellow'
    }
    else if(meatsPrice <(carc.value/1.2)){
    div3.style.backgroundColor = 'red'
    }
    else if(meatsPrice >= carc.value){
    div3.style.backgroundColor = ' rgb(85, 2, 2)'
    }
}

//Utilidades div de cor
    if(uorc.value === ''){
        div4.style.backgroundColor = 'lime'
    }else{
    if(cleanProductsPrice <=(uorc.value/4)){
    div4.style.backgroundColor = 'lime'
    }
    else if(cleanProductsPrice <(uorc.value/1.5)){
    div4.style.backgroundColor = 'yellow'
    }
    else if(cleanProductsPrice <(uorc.value/1.2)){
    div4.style.backgroundColor = 'red'
    }
    else if(cleanProductsPrice >= uorc.value){
    div4.style.backgroundColor = ' rgb(85, 2, 2)'
    }
}

//Higiene div de cor
    if(horc.value === ''){
    div5.style.backgroundColor = 'lime'
    }else{
    if(higsPrice <=(horc.value/4)){
    div5.style.backgroundColor = 'lime'
    }
    else if(higsPrice <(horc.value/1.5)){
    div5.style.backgroundColor = 'yellow'
    }
    else if(higsPrice <(horc.value/1.2)){
    div5.style.backgroundColor = 'red'
    }
    else if(higsPrice >= horc.value){
    div5.style.backgroundColor = ' rgb(85, 2, 2)'
    }
}

    

//total div de cor tot

if(torc.value === ''){
    div6.style.backgroundColor = 'lime'
}else{
    if(soma <=(torc.value/4)){
        div6.style.backgroundColor = 'lime'
    }
    else if(soma <(torc.value/1.5)){
    div6.style.backgroundColor = 'yellow'
    }
    else if(soma <(torc.value/1.2)){
    div6.style.backgroundColor = 'red'
    }
    else if(soma >= torc.value){
    div6.style.backgroundColor = ' rgb(85, 2, 2)'
    }

}


    totField.innerHTML = `Diversos: ${foods}.                Total: R$ ${foodsPrice}</br></br>`
    totField.innerHTML += `Carnes: ${meats}.                 Total: R$ ${meatsPrice} </br></br>`
    totField.innerHTML += `Bebidas: ${beverages}.            Total: R$ ${beveragesPrice} </br></br>`
    totField.innerHTML += `Utilidades e Limpeza: ${cleanProducts}. Total: R$ ${cleanProductsPrice} </br></br>`
    
    totField.innerHTML += `Higiene: ${higs}.                 Total: R$ ${higsPrice}</br></br>`
    
    totField.innerHTML += `Total: R$ ${soma.toFixed(2)} </br></br>`

   
}



function delts(){
    let selecteds = list.selectedIndex;
    if(selecteds === -1){
        alert("Selecione uma opção.")
    }
 
    list.removeChild(list.childNodes[selecteds])
       

        if(food.indexOf(vetItem[selecteds]) !== -1){
            foods-= vetQtd[selecteds]
            foodsPrice -= (vetQtd[selecteds]) * (vetPrice[selecteds])

                  
        }
        else if(beverage.indexOf(vetItem[selecteds]) !== -1){
          
            beverages-= vetQtd[selecteds]
            beveragesPrice -= (vetQtd[selecteds]) * (vetPrice[selecteds])
           
            
        }
        else if(meat.indexOf(vetItem[selecteds]) !== -1){
            meats-= vetQtd[selecteds]
            meatsPrice -= (vetQtd[selecteds]) * (vetPrice[selecteds])
            
        }
        else if(hig.indexOf(vetItem[selecteds]) !== -1){
            higs-= vetQtd[selecteds]
            higsPrice -= (vetQtd[selecteds]) * (vetPrice[selecteds])
            
        }
            vetItem.splice(selecteds,1)
            vetPrice.splice(selecteds,1)
            vetQtd.splice(selecteds,1)
      

       

        refresh()

        if(list.innerHTML === ''){

            totField.innerHTML = ''
        }
        
        
    }

   
//Funçao para adicionar novo item à lista de itens aceitos para contagem.

function addsnew(){

    if(newitem.value === ''){
        alert('Digite um item a ser adicionado.')
    }
    if(addnew.selectedIndex === 0 ){
        alert("Escolha uma categoria.")
    }
    if(addnew.selectedIndex === 1){//se for selecionado o campo Diversos
        if(food.indexOf(newitem.value) === -1){
            food.push(newitem.value.replace(/\s/g, ''));
            alert(newitem.value + " foi adicionado.")
        }else if (food.indexOf(newitem.value) !== -1){
            alert('Item já se encontra na lista.')
        }
    }

    if(addnew.selectedIndex === 2){
        if(beverage.indexOf(newitem.value) === -1){//se for selecionado campo Bebidas
            beverage.push(newitem.value.replace(/\s/g, ''));
            alert(newitem.value + " foi adicionado.")
        }else if (beverage.indexOf(newitem.value) !== -1){
            alert('Item já se encontra na lista.')
        }
    }

    if(addnew.selectedIndex === 3){
        if(meat.indexOf(newitem.value) === -1){//se for selecionado campo Carnes
            meat.push(newitem.value.replace(/\s/g, ''));
            alert(newitem.value + " foi adicionado.")
        }else if (meat.indexOf(newitem.value) !== -1){
            alert('Item já se encontra na lista.')
        }
    }

    if(addnew.selectedIndex === 4){
        if(cleanProduct.indexOf(newitem.value) === -1){//se for selecionado campo Utilidades Limpeza
            cleanProduct.push(newitem.value.replace(/\s/g, ''));
            alert(newitem.value + " foi adicionado.")
        }else if (cleanProduct.indexOf(newitem.value) !== -1){
            alert('Item já se encontra na lista.')
        }
 
   }
   if(addnew.selectedIndex === 5){
    if(hig.indexOf(newitem.value) === -1){//se for selecionado campo Higiene
        hig.push(newitem.value.replace(/\s/g, ''));
        alert(newitem.value + " foi adicionado.")
    }else if (hig.indexOf(newitem.value) !== -1){
        alert('Item já se encontra na lista.')
    }
}
    
   
}

function clears(){

    if(list.innerHTML === ''){
        alert('Lista vazia.')
    }
    list.innerHTML = ''
    vetItem = []; //Array dos itens adicionados
    vetQtd = []; // Array das quantidades adicionadas
    vetPrice = []; //Array dos preços adicionados
    foods=0
    meats=0
    beverages=0
    higs=0
    soma=0
    foodsPrice=0
    meatsPrice=0
    beveragesPrice=0
    higsPrice=0
    
    refresh()
    totField.innerHTML = ''
    itemList.value = ''
    qtd.value=''
    price.value = ''




}
