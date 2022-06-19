
const scrollUp = document.querySelector('#back-to-top');

const refreshButtonVisibility = () => {
    if( document.documentElement.scrollTop < 150) {
        scrollUp.style.display = "none"
    }else{
        scrollUp.style.display = "block"
    }
}
refreshButtonVisibility();
scrollUp.addEventListener('click' , () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});
document,addEventListener('scroll', (e) => {
   refreshButtonVisibility();

});
// let lists = document.getElementsByClassName('lists');
// let lis = "";
// for(var i = 0; i < lists.length; i++){
//     lis += lists[i].name;
// }
// console.log(lis)
// function getElementsById(ids) {
//     var idList = ids.split(" ");
//     var results = [], item;
//     for (var i = 0; i < idList.length; i++) {
//         item = document.getElementById(idList[i]);
//         if (item) {
//             results.push(item);
//         }
//     }
//     return(results);
// }
let firstList =  document.querySelector('#li-1');
let secondList =  document.querySelector('#li-2');
let thirdList =  document.querySelector('#li-3');
let fourthList =  document.querySelector('#li-4');
let fifthList =  document.querySelector('#li-5');
let sixthList =  document.querySelector('#li-6');
let seventhList =  document.querySelector('#li-7');
console.log(fourthList)

function removeDoubleLine1(){
    firstList.classList.remove('lists');
}
function restoreHoverLine1(){
    firstList.classList.add('lists')
}
function removeDoubleLine2(){
    secondList.classList.remove('lists');
}
function restoreHoverLine2(){
    secondList.classList.add('lists')
}
function removeDoubleLine3(){
    thirdList.classList.remove('lists');
}
function restoreHoverLine3(){
    thirdList.classList.add('lists')
}
function removeDoubleLine4(){
    fourthList.classList.remove('lists');
}
function restoreHoverLine4(){
    fourthList.classList.add('lists')
}
function removeDoubleLine5(){
    fifthList.classList.remove('lists');
}
function restoreHoverLine5(){
    fifthList.classList.add('lists')
}
function removeDoubleLine6(){
    sixthList.classList.remove('lists');
}
function restoreHoverLine6(){
    sixthList.classList.add('lists')
}
function removeDoubleLine7(){
    seventhList.classList.remove('lists');
}
function restoreHoverLine7(){
    seventhList.classList.add('lists')
}
function changeToActive() {
    document.getElementById('li-1').style.cssText = 'border-bottom: 1px solid #111' 
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    removeDoubleLine1();
    restoreHoverLine2();
    restoreHoverLine3();
    restoreHoverLine4();
    restoreHoverLine5();
    restoreHoverLine6();
    restoreHoverLine7();
    
    // lis.style.textDecoration = "none"
    // getElementsById('li-1 li-2 li-3 li-4 li-5 li-6 li-7').style.textDecoration = 'none'
}
 
console.log(changeToActive)


function removeActive(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'border-bottom: 1px solid #111' 
    restoreHoverLine1();
    removeDoubleLine2();
    // restoreHoverLine2();
    restoreHoverLine3();
    restoreHoverLine4();
    restoreHoverLine5();
    restoreHoverLine6();
    restoreHoverLine7();
}
console.log(removeActive)

function removeActive2(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'border-bottom: 1px solid #111' 
    restoreHoverLine2();
    removeDoubleLine3();
    restoreHoverLine2();
    // restoreHoverLine3();
    restoreHoverLine4();
    restoreHoverLine5();
    restoreHoverLine6();
    restoreHoverLine7();

}
function removeActive3(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText ='border-bottom: 1px solid #111' 
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    restoreHoverLine3();
    removeDoubleLine4();
    restoreHoverLine2();
    restoreHoverLine3();
    // restoreHoverLine4();
    restoreHoverLine5();
    restoreHoverLine6();
    restoreHoverLine7();
}
function removeActive4(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'border-bottom: 1px solid #111' 
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    restoreHoverLine4();
    removeDoubleLine5();
    restoreHoverLine2();
    restoreHoverLine3();
    restoreHoverLine4();
    // restoreHoverLine5();
    restoreHoverLine6();
    restoreHoverLine7();
}
function removeActive5(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'border-bottom: 1px solid #111' 
    document.getElementById('li-7').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    restoreHoverLine5();
    removeDoubleLine6();
    restoreHoverLine2();
    restoreHoverLine3();
    restoreHoverLine4();
    restoreHoverLine5();
    // restoreHoverLine6();
    restoreHoverLine7();
}
function removeActive6(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-4').style.cssText = 'text-decoration: none'
    document.getElementById('li-5').style.cssText = 'text-decoration: none'
    document.getElementById('li-6').style.cssText = 'text-decoration: none'
    document.getElementById('li-7').style.cssText ='border-bottom: 1px solid #111' 
    document.getElementById('li-3').style.cssText = 'text-decoration: none'
    restoreHoverLine6();
    removeDoubleLine7();
    restoreHoverLine2();
    restoreHoverLine3();
    restoreHoverLine4();
    restoreHoverLine5();
    restoreHoverLine6();
    // restoreHoverLine7();
}
// removeDoubleLine7();


{/* <div class="element"> This is my element </div>
.element { background-color: red }
.element::before { content: "Before pseudo element"; }
const element = document.querySelector('.element')
pseudoElementStyle = getComputedStyle(element, '::before')

console.log(pseudoElementStyle.content)  */}

{/* <a class="test" name="Name 1"></a>
<a class="test" name="Name 2"></a>
<a class="test" name="Name 3"></a>

// javascript
var elements = document.getElementsByClassName("test");
var names = '';
for(var i=0; i<elements.length; i++) {
    names += elements[i].name;
}
document.write(names); */}




// let outlineDivider = document.querySelector('.outline-divider');
// let list = document.querySelectorAll(' #list')
// let menu = document.querySelector('.menu');

// function divider(menu){
//     let newList= "";
//  menu.forEach(divide =>{
//     newList += `
//         ${list}
//         ${outlineDivider}
//     `
// });
// menu.innerHTML = newList;
// }
// console.log(newlist);
