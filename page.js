/*
jQuery(document).ready(() => {
   console.log("1")
})
*/
/*
$(() => {
   console.log(3)
})
*/
/*
$(document).ready(() => {
   $('.text').css('color', 'red');
})
document.addEventListener('DOMContentLoaded', () => {
   document.querySelector('.text').style.color = 'red'
})
*/
/*
$(document).ready(() => {
   $('*').css('background', 'black');
   $('*').css('color', 'white');
})
*/
//$("tr:even").css('background', 'red')
/*
$('.test li:odd').css('background', 'green'); // odd не чотне
$('.test li:even').css('background', 'red'); // even четне
*/
/*
$('.test li:eq(1)').css('color', 'red') // eq искать по масиву индексу
 */
/*
$('li:first').css('background', "green");
$('li:last').css('background', "green");
*/
//$('.test li:odd:last').css('color', 'green')

//DZ
/*
$('#age-table').css('background', 'pink');
$('#age-table label').css('color', 'red');
$('#age-table td:first').css('font-size', '40px');

$('[name="search"]').css('background', 'orange');
$('[name="search"]').css('font-size', '30px');
$('[name="search"] input:first').css('background', 'blue');
$('[name="search"] input:last').css('background', 'yellow');
 */



//$('ul li:gt(3)').css('background', 'red');
//$('ul li:lt(3)').css('background', 'green');
//$('ul li:gt(4):even').css('background', 'red');
//$('ul li:lt(5):odd').css('background', 'yellow');

//$('*:header').css('color', 'green')
//$('*:not()').css('color', 'red')

//$('div:contains("")').css('color', 'red')

/*
$(document).ready(() => {
   let checkd = true;
   $('button').click(() => {
      console.log('click')
      if (checkd == true) {
         $('#test').hide(2000)
         checkd = false;
      } else if (checkd == false) {
         $('#test').show(2000);
         checkd = true;
      }
   })
})
*/

/*
const arr = $('tabl').filter("tr")
arr.css('color', 'red');
*/

/*
const lis = $('ul li');
lis.eq(4).css('color', 'blue')
lis.first().css('color', 'red')
lis.last().css('color', 'green')
*

/*
for (let i = 0; i < lis.length; i++) {
   console.log(lis[i])
}
*/
/*
lis.each((idx, item) => {
   console.log(item)
})
*/

/*
$('button').click(() => {
   $('ul li:even').hide();
})
*/
/*
const lis = $('ul li');
const li = lis.last()
idxLi = lis.index(li)
console.log(idxLi) */
/*
const lis = $('ul li');
const lis_two = $('.test')
lis.each((idx, item) => {
   lis_two.each((idx_two, item_two) => {
      if (item == item_two) {
         console.log(idx)
      }
   })
})
*/
//DZ

const text = $('.text');
text.css('margin-bottom', '30px');
text.css('cursor', 'pointer');

let prev;
text.click((e) => {
   if (prev != undefined) {
      prev.style.border = '';
   }
   e.target.style.border = 'solid 2px red';
   prev = e.target;
}); 
