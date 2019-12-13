let header = document.querySelector('header');
let section = document.querySelector('section');
let requestURL = "https://100037633.github.io/project3_js/weird.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let weirdStuff = request.response;
    //call the below functions with the json parameter
    printCompany(weirdStuff);
    weirdProducts(weirdStuff);
}

function printCompany(jsonObj){
    //function to print the company info to the header
    let titleHead = document.createElement('h1');
    titleHead.textContent = jsonObj['company'] +"-  since: " + jsonObj['since'] + "- " + jsonObj['location'];
    header.appendChild(titleHead);
}
function weirdProducts(jsonObj){
    let weirdProducts = jsonObj['weirdProducts'];
    for(var i = 0;i<weirdProducts.length;i++){
        let art = document.createElement('article');
        let nameHead = document.createElement('h2');
        let img = document.createElement('img');
        let descPara = document.createElement('p');
        let pricePara = document.createElement('p');
        let list = document.createElement('ul');
        img.setAttribute('src', 'https://100037633.github.io/project3_js/images');
        article.appendChild(img);
        article.appendChild(nameHead);
        article.appendChild(descPara);
        article.appendChild(pricePara);
        article.appendChild(list);
        section.appendChild(article);



    }
}
