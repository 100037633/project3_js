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
        nameHead.textContent = weirdProducts[i].name;
        descPara.textContent= weirdProducts[i].description;
        pricePara.textContent =weirdProducts[i].price;
        //img.setAttribute('src', 'images/' + weirdProducts[i].image);
        img.setAttribute('height', '250');
        img.setAttribute('width', '250');
        
        img.setAttribute('src', 'https://100037633.github.io/project3_js/images/' + weirdProducts[i].image);
        art.appendChild(img);
        art.appendChild(nameHead);
        art.appendChild(descPara);
        art.appendChild(pricePara);
        art.appendChild(list);
        section.appendChild(art);
        /*images from:
        hudson-
        my goodest yellow lab
        handitaur-
        https://mcphee.com/products/handitaur
        dogbeak-
        http://www.funcage.com/blog/24-weird-products-that-actually-exist/
        poo hat-
        https://www.partycity.com/ca/poop-icon-hat-627510.html
        handerpants-
        https://www.handerpants.com/


        */



    }

}
function initMap(){
    //google maps integrated using developers.google.com as a major resource
    var kenya = {lat: -1.28333,lng: 36.81667};
    var map = new google.maps.Map(document.getElementById('map'), {zoom:3, center:kenya});
    
    var marker = new google.maps.Marker({position:kenya, map:map});
    

}
