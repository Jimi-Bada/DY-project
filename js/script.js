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