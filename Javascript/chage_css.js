
console.log("console log is working" );

const box_1 = document.querySelector('.box2');
console.log("selected item is = ", box_1 );

let menuOpen = false;

box_1.addEventListener('click', () =>{
    if(menuOpen==false){
        box_1.classList.add('change');
        menuOpen = true;
        console.log("menuOpen is = ", menuOpen );
    }
    else{
        box_1.classList.remove('change');
        menuOpen = false;
        console.log("menuOpen is = ", menuOpen );
    }
});

function changColor() {
    
}
