// code for hamburger menu for mobile starts
let count = 0;
let hamFlag = false;
const mobileMenuShow = () => {
  let element = document.getElementById("hamBurgerMenu");

  console.log(element);

  if (count == 1) {
    element.classList.toggle('hidden');
    element.classList.toggle('invisible');

  }

  if (count < 1) {
    count++;
    // element.classList.remove('hidden ');
    // element.classList.remove('invisible');
    element.classList.toggle('bg-white');



    console.log("everything working on line last");
    console.log(count);
  }

}

let count2 = 0;
const barTurnedCross = () => {
  let bar1 = document.getElementById('bar1');
  let bar2 = document.getElementById('bar2');
  let bar3 = document.getElementById('bar3');

  if (count2 == 1) {

    bar1.classList.toggle('translate-y-1');
    bar1.classList.toggle('rotate-45');

    bar3.classList.toggle('-translate-y-0.5');
    bar3.classList.toggle('-rotate-45');

    bar2.classList.toggle('hidden');
    bar2.classList.toggle('invisible');
  }

  if (count2 < 1) {
    count2++;

    bar1.classList.add('translate-y-1');
    bar1.classList.add('rotate-45');

    bar3.classList.add('-translate-y-0.5');
    bar3.classList.add('-rotate-45');

    bar2.classList.add('hidden');
    bar2.classList.add('invisible');

    console.log("cross are made");
    console.log(count2);
  }
}
// code for hamburger menu for mobile ends