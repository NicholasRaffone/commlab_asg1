let reversed = false;
const revbutton = document.getElementById('revbutton');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const [left, right] = document.getElementsByClassName('half');
const nicholas = document.getElementById('nicholas');
const nathan = document.getElementById('nathan');
const gridcontent = document.getElementsByClassName('gridcontent');

const revHandler = () =>{
    for(let i =0; i < gridcontent.length; i++){
        if(gridcontent[i].classList.contains('reverse-wrapper')){
            gridcontent[i].classList.remove('reverse-wrapper')
        }else{
            gridcontent[i].classList.add('reverse-wrapper')
        }
    }
    if(!reversed){
        header.classList.add("rev-header");
        header.classList.remove("header");

        footer.classList.add("rev-footer");
        footer.classList.remove("footer");

        left?.classList?.add("black");
        left?.classList?.remove("white");

        right?.classList?.add("white");
        right?.classList?.remove("black");

        nathan?.classList?.remove('flex-reverse');
        nathan?.classList?.remove('reverse-wrapper');
        nicholas?.classList?.add('flex-reverse');
        nicholas?.classList?.add('reverse-wrapper');

        revbutton?.classList.add('buttonrevstate');

        reversed = true;
    }else{
        header.classList.remove("rev-header");
        header.classList.add("header");

        footer.classList.remove("rev-footer");
        footer.classList.add("footer");

        left?.classList?.add("white");
        left?.classList?.remove("black");

        right?.classList?.add("black");
        right?.classList?.remove("white");

        nathan?.classList?.add('flex-reverse');
        nicholas?.classList?.remove('flex-reverse');
        nathan?.classList?.add('reverse-wrapper');
        nicholas?.classList?.remove('reverse-wrapper');

        revbutton?.classList.remove('buttonrevstate');

        reversed = false;
    }
}
revbutton.addEventListener('click', revHandler);
