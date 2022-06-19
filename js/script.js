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
let lists = document.getElementsByClassName('lists');
let lis = "";
for(var i = 0; i < lists.length; i++){
    lis += lists[i].name;
}
console.log(lists)
function changeToActive() {
    document.getElementById('li-1').style.cssText = 'text-decoration:underline'
    document.querySelectorAll('lists') = 'text-decoration: none'
}
 
console.log(changeToActive)


function removeActive(){
    document.getElementById('li-1').style.cssText = 'text-decoration: none'
    document.getElementById('li-2').style.cssText = 'text-decoration: underline'
}
console.log(removeActive)

function removeActive2(){
    document.getElementById('li-2').style.cssText = 'text-decoration: none'
    document.getElementById('li-3').style.cssText = 'text-decoration: underline'
}



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
