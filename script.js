// To fit a CraftMan on the site, you need to add <div id="craftMan"></div>
//Create header
const man = document.createElement('div');
man.setAttribute('class', 'emoji happy');
//Create face
const face = document.createElement('div');
face.setAttribute('class', 'face');
//Create eyeLeft
const eyeLeft = document.createElement('div');
eyeLeft.setAttribute('class', 'eye left');
//Create eyeReft
const eyeReft = document.createElement('div');
eyeReft.setAttribute('class', 'eye right');
//Create mouth
const mouth = document.createElement('div');
mouth.setAttribute('class', 'mouth');
//dialog mouth
const dialog = document.createElement('div');
dialog.setAttribute('id', 'dialog');
dialog.setAttribute('class', 'emoji-hide');


// We put craftmea the elements into our CraftMan
document.getElementById('craftMan').appendChild(man);
document.getElementById('craftMan').getElementsByClassName('emoji happy')[0].appendChild(face);
document.getElementById('craftMan').getElementsByClassName('emoji happy')[0].getElementsByClassName('face')[0].appendChild(eyeLeft);
document.getElementById('craftMan').getElementsByClassName('emoji happy')[0].getElementsByClassName('face')[0].appendChild(eyeReft);
document.getElementById('craftMan').getElementsByClassName('emoji happy')[0].getElementsByClassName('face')[0].appendChild(mouth);
document.getElementById('craftMan').getElementsByClassName('emoji happy')[0].getElementsByClassName('face')[0].appendChild(dialog);


const blobCursor = (() => {
    const CURSOR = document.querySelector('#craftMan');
    const DIALOG = document.querySelector('#dialog');


    const veryDissatisfLinks = document.querySelectorAll('.dissatisfied_link');
    const laughLinksLinks = document.querySelectorAll('.laugh_link');
    const speakingLinks = document.querySelectorAll('.speaking_link');
    const evilSaysLinks = document.querySelectorAll('.evilSays_link');
    const veryHappyLinks = document.querySelectorAll('.veryHappy_link');



    const setCursorPos = (e) => {

        const { pageX: posX, pageY: posY } = e;
        CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
        CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;

    };






    x = 0;
    y = 0;
    mousecheck = function (e) {

        if (e.pageX < x) {
            CURSOR.style.marginLeft = "60px";
            CURSOR.style.marginRight = "0px";
            document.getElementsByClassName('emoji')[0].style.transform = "inherit";


        } else if (e.pageX > x) {
            CURSOR.style.marginLeft = "-60px";
            CURSOR.style.marginRight = "0px";
            document.getElementsByClassName('emoji')[0].style.transform = "scale(-1, 1)";
        }


        if (e.pageY < y) {
            CURSOR.style.marginTop = "60px";
            CURSOR.style.marginBottom = "0px";
        } else if (e.pageY > y) {
            CURSOR.style.marginTop = "-60px";
            CURSOR.style.marginBottom = "0px";
        }

        y = e.pageY;
        x = e.pageX;
    }



    document.addEventListener('mousemove', mousecheck);
    document.addEventListener('mousemove', setCursorPos);



    const evilSaysfiedSetCursorHover = () => CURSOR.getElementsByClassName('emoji')[0].className = "emoji evilSays";
    const evilSaysRemoveCursorHover = () => CURSOR.getElementsByClassName('emoji evilSays')[0].className = "emoji";

    const DissatisfiedSetCursorHover = () => CURSOR.getElementsByClassName('emoji')[0].className = "emoji dissatis";
    const DissatisRemoveCursorHover = () => CURSOR.getElementsByClassName('emoji dissatis')[0].className = "emoji";

    const veryHappyfiedSetCursorHover = () => CURSOR.getElementsByClassName('emoji')[0].className = "emoji veryHappy";
    const veryHappyRemoveCursorHover = () => CURSOR.getElementsByClassName('emoji')[0].className = "emoji";

    const laughLinksSetCursorHover = () => CURSOR.getElementsByClassName('emoji')[0].className = "emoji laugh";
    const laughLinksRemoveCursorHover = () => CURSOR.getElementsByClassName('emoji laugh')[0].className = "emoji";



    evilSaysLinks.forEach(link => link.addEventListener('scroll', evilSaysfiedSetCursorHover));
    evilSaysLinks.forEach(link => link.addEventListener('mouseleave', evilSaysRemoveCursorHover));

    veryDissatisfLinks.forEach(link => link.addEventListener('mouseover', DissatisfiedSetCursorHover));
    veryDissatisfLinks.forEach(link => link.addEventListener('mouseleave', DissatisRemoveCursorHover));
    
    veryHappyLinks.forEach(link => link.addEventListener('mouseover', veryHappyfiedSetCursorHover));
    veryHappyLinks.forEach(link => link.addEventListener('mouseleave', veryHappyRemoveCursorHover));

    laughLinksLinks.forEach(link => link.addEventListener('mouseover', laughLinksSetCursorHover));
    laughLinksLinks.forEach(link => link.addEventListener('mouseleave', laughLinksRemoveCursorHover));


    // scary if you scrolling
    var timer = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);  
            CURSOR.getElementsByClassName('emoji')[0].className = "emoji scary";      
        }
        timer = setTimeout(function() {
            CURSOR.getElementsByClassName('emoji')[0].className = "emoji";
        }, 1000);
    }, false);




// we say something, and check whether the click has finished yet or not

var Timer_Started = true; 
speakingLinks.forEach(link => link.addEventListener('click', ev=>{ 
    

    const WhatToSayRandom = ev.target.getAttribute("data-say");
    console.log(WhatToSayRandom);
    DIALOG.setAttribute('data-value', WhatToSayRandom);
    document.getElementById("craftMan").appendChild(DIALOG);


    if (Timer_Started) { 
        CURSOR.getElementsByClassName('emoji')[0].className = "emoji speaking"; 
        document.getElementById('dialog').className = "emoji-show"; 
        // RandomToSay(); 
        setTimeout(function () { 
            console.log('Stop talking'); 
            document.getElementById('dialog').className = "emoji-hide"; 
            CURSOR.getElementsByClassName('emoji')[0].className = "emoji"; 
            Timer_Started = true; 
        }, 3200); 
    } else { 
        let speak = document.getElementById("dialog"); 
        CURSOR.getElementsByClassName('emoji')[0].className = "emoji evilSays"; 
        speak.setAttribute('data-value', 'Do not interrupt!'); 
    } 
    Timer_Started = false; 
}));






})();



