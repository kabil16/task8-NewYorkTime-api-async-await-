//apiURL=""
//Date

let date = new Date();
let year =date.getFullYear();
let day =date.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let month =monthNames[date.getMonth()];
let cdate = year+" "+month+" "+day;
//console.log(cdate);
//document.querySelector(".col-2").innerHTML=month;
let ccdate = document.querySelector('.col-2');
ccdate.innerHTML=cdate;
//default data home
let home ='home';
apiData(home);

let navSelector = document.querySelectorAll('.nav-link')
console.log(navSelector);
navSelector.forEach((event)=>{
    event.addEventListener("click",function(){
            let removeCard = document.querySelectorAll('.card');
            removeCard.forEach(function(){
                document.getElementById("deleteData").remove();
            })
            console.log(event.innerHTML)
            apiData(event.innerHTML);
    })
})



async function apiData(value){
    try{
        let apiKey="wFsyHJlpAdJAxfBX1O8GwyrNljSFNJpW";
        let apiURL="https://api.nytimes.com/svc/topstories/v2/"+value+".json?api-key="+apiKey;
        const response = await fetch(apiURL);
        const data = await response.json();
        //console.log(data.results)
        const dResult = data.results;
        dResult.forEach(element => {
            let nTitle = element.title;
            let nImg = element.multimedia[2].url;
            let nPara = element.abstract;
            let nDate = element.published_date;
            let nUrl =element.url;
            //console.log(nPara)
            let card = document.createElement('div');
            card.id='deleteData'
            card.className='card mb-3 head';
            document.querySelector('.container').appendChild(card);

            let cardBody = document.createElement('div');
            cardBody.className="row g-0";
            card.appendChild(cardBody);
            //cara data colomn 8
            let cardText =document.createElement('div');
            cardText.className="col-md-8";
            cardBody.appendChild(cardText);

            let cardTextBody =document.createElement('div');
            cardTextBody.className='card-body';
            cardText.appendChild(cardTextBody);

            let cardTitle = document.createElement('h5');
            cardTitle.className='card-title';
            let ctitle = document.createTextNode(nTitle);
            cardTitle.appendChild(ctitle)
            cardTextBody.appendChild(cardTitle);

            let cardPara = document.createElement('p');
            cardPara.className='card-text';
            let cardp = document.createTextNode(nPara)
            cardPara.appendChild(cardp);
            cardTextBody.appendChild(cardPara);

            let continueRead = document.createElement('a');
            continueRead.className='continue';
            continueRead.setAttribute("href",nUrl);
            continueRead.innerText='continue';
            cardPara.appendChild(continueRead);


            let cardPara2 = document.createElement('p');
            cardPara2.className='card-text';
            cardTextBody.appendChild(cardPara2);

            let cardSmall =document.createElement('small');
            cardSmall.className='text-muted';
            let cardp1 = document.createTextNode(nDate)
            cardSmall.appendChild(cardp1);
            cardPara2.appendChild(cardSmall);


            //card image colomn 4
            let cardImgdiv = document.createElement('div');
            cardImgdiv.className='col-md-4';
            cardBody.appendChild(cardImgdiv);

            let cardImg = document.createElement('img');
            cardImg.setAttribute("src",nImg);
            cardImg.setAttribute("alt","noimage");
            cardImgdiv.appendChild(cardImg);
        });
        //use forEach for modal
        //return console.log(dta)
    }
    catch(err){
            console.log(err)
    }    
}















