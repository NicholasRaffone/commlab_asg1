let reversed = false;
const revbutton = document.getElementById('revbutton');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const [left, right] = document.getElementsByClassName('half');
const nicholas = document.getElementById('nicholas');
const nathan = document.getElementById('nathan');
const gridcontent = document.getElementsByClassName('gridcontent');
const cover = document.getElementById('cover');
const desc = document.getElementById('description')
const inspoconent = document.getElementById('inspocontent')

//get kanye quote function
const getQuote = () =>{
    return fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => "\""+data.quote+"\"");
}

const revHandler = () =>{
    //for gridcontent on inspo page
    for(let i =0; i < gridcontent.length; i++){
        if(gridcontent[i].classList.contains('reverse-wrapper')){
            gridcontent[i].classList.remove('reverse-wrapper')
            gridcontent[i].classList.add('reg-wrapper')
        }else{
            gridcontent[i].classList.add('reverse-wrapper')
            gridcontent[i].classList.remove('reg-wrapper')
        }
    }
    if(!reversed){
        //for main inspocontent page
        inspoconent?.classList?.add('reverse-wrapper')

        //for header, footer content
        header.classList.add("rev-header");
        header.classList.remove("header");

        footer.classList.add("rev-footer");
        footer.classList.remove("footer");

        revbutton?.classList.add('buttonrevstate');

        //for homepage left right
        left?.classList?.add("black");
        left?.classList?.remove("white");

        right?.classList?.add("white");
        right?.classList?.remove("black");

        //for cast page
        nathan?.classList?.remove('flex-reverse');
        nathan?.classList?.remove('reverse-wrapper');
        nicholas?.classList?.add('flex-reverse');
        nicholas?.classList?.add('reverse-wrapper');

        //set reversed to true for next time
        reversed = true;
    }else{
        //for main inspocontent page
        inspoconent?.classList?.remove('reverse-wrapper')

        //for header, footer content
        header.classList.remove("rev-header");
        header.classList.add("header");

        footer.classList.remove("rev-footer");
        footer.classList.add("footer");

        revbutton?.classList.remove('buttonrevstate');

        //for homepage left right
        left?.classList?.add("white");
        left?.classList?.remove("black");

        right?.classList?.add("black");
        right?.classList?.remove("white");

        //for cast page
        nathan?.classList?.add('flex-reverse');
        nicholas?.classList?.remove('flex-reverse');
        nathan?.classList?.add('reverse-wrapper');
        nicholas?.classList?.remove('reverse-wrapper');

        //set reversed to false for next time
        reversed = false;
    }
}
//call revHandler on click
revbutton.addEventListener('click', revHandler);

//on load, set cover visibility to 0
window.addEventListener('load', ()=>{
    window.setTimeout(()=>{header.style.opacity=1;cover.style.opacity=0;cover.style.visibility="hidden"},200);
})

//get kanye quote on load
window.addEventListener('load', ()=>{
    getQuote().then((quote)=>{if(quote&&desc) desc.innerHTML=quote});
})
