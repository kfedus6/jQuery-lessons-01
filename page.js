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
/*
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
   alert('Words' + ':' + e.target.textContent.length)
});
 */

/*
const text = $('.text');
text.first().hide(3000, () => {
   console.log('hide')
}).show(2000, () => {
   console.log('show')
})
*/

/*
$('h2').hide();
let time = 2000;
$('.text').each((idx, item) => {
   $('.text').eq(idx).hide(time);
   time += 1000
})

$('h2').show(2000);
*/
/*
$('*:header:not(h2)').css('color', 'red')
$('*:not(form)').css('background', 'black')
*//*
const lis = $('ul li').add('<li>7</li>')
console.log(lis)
$('ul').append(lis); */

/*
let res = $('li').not(function () {
   if ($(this).text() != '3') {
      return true
   } else {
      return false
   }
})

res.hide(3000)
*/

//DZ
/*
let collection;
let lastValue = 0;

$('button').click(() => {
   let inp = $('input:first').val();

   if (inp < lastValue) {

   }

   let res = $('li').not(function () {
      if ($(this).text() > inp) {
         return true
      } else {
         return false
      }
   })

   res.hide(2000);
   collection += res
   lastValue = inp
})
*/
//DZ

/*
$('.add').click(() => {
   let text = $('#text').val();
   let newText = $('<div></div>').text(text);
   newText.css('display', 'none')
   $('body').append(newText);
   newText.show(2000)
})

$('.del').click(() => {
   console.log('1')
   $('div').each(function (index, item) {
      if ($(this).text() == $('#del').val()) {
         $(this).hide(2000);
      }
   })
})
*/

//$('ul li').filter(':odd').css('color', 'red')
/*
$('ul li').filter((index, item) => {
   if (index > 3) {
      return true;
   }
}).css('color', 'red')
*/

//$('ul li').filter(idx => idx > 3).css('color', 'red')

//$('*[href$="st"]').css('background', 'red')

/*
$('button').click(() => {
   let text = $('input').val();
   if ($('*[src$="jpg"]').attr('src').includes(text)) {
      $('*[src$="jpg"]').css('border', 'solid 2px red');
   } else if ($('*[src$="jpeg"]').attr('src').includes(text)) {
      $('*[src$="jpeg"]').css('border', 'solid 2px red');
   } else {
      alert('error');
   }
})
*/

//$('ul li').slice(2, 4).css('color', 'red')
//$('ul li').has('ul').css('color', 'red');
/*
const newLi = $('ul li').map(function (index, item) {
   if (item.innerHTML > 2) {
      return $(this)
   }
})

newLi.each((index, item) => {
   item.css('color', 'red');
})
*/
//DZ

$('.show-board').click(() => {
   for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
         if ((i % 2 == 0 && k % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) {
            let oneDiv = $('<div class="block__black"></div>')
            $('#board').append(oneDiv);
         }
         else {
            let twoDiv = $('<div class="block__brown"></div>')
            $('#board').append(twoDiv);
         }
      }
   }

   $('.block__black').each(function (index, item) {
      $(this).append('<img class="block" src="img/black.jpg"></img>')
   })


   $('.block__brown').each(function (index, item) {
      $(this).append('<img class="block" src="img/brown_block.jpg"></img>')
   })
})

$('.checkers').click(() => {
   $('.block__brown').each(function (index, item) {
      if (index <= 12) {
         $(this).append('<img class="shashka" src="img/shashka_brown2.jpg"></img>');
      }
      if (index > 19) {
         $(this).append('<img class="shashka" src="img/shashka.png"></img>');
      }
   })

})

/*
$('.show-board').click(() => {
   for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
         if ((i % 2 == 0 && k % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) {
            $('#board').append('<img src="img/black.jpg"></img>');
         } else {
            $('#board').append('<img src="img/brown_block.jpg"></img>');
         }
      }
   }
})

$('.checkers').click(() => {
   $('#board img').each(function (index, item) {
      if ($(this).attr('src').includes('brown') == true) {
         console.log($(this)[0])
      }
   })

})
 */
/*
let ul = $('ul:first li').find('.menu')
ul.css('color', 'red')
*/

/*
let elem = $('ul.menu')[0]
console.log(elem)

let ul = $('ul:first li').find(elem)
ul.css('color', 'red')
*/


//$('a').first().prop('href', "#qweqweq")

/*
links = ['#1', "#2", '#3', '#4']

$('a').each(function (idx) {
   $(this).prop('href', links[idx]);
})

let a = $('a').first()
a.removeProp('href')
*/

/*
$('a').first().attr('href', 'sdsdv')
$('a').first().removeAttr('href')
*/

//$('.name').data('link', 'qweqwe')
//$('.name').removeData('link')
//console.log($('.name').data('link'))

/* 
$('.main').css({ "background": "grey", "cursor": "pointer", "width": "150px" })
$('.main h1').css('margin-bottom', '20px')

$('.main').animate({
   "border-radius": "100%", "font-size": "28px",
}, 1000)

$('.main div').animate({ 'margin-left': "25px" })
*/
/*
$('.main').click(() => {
  $('.main').css('color', (idx, value) => {
     if (value == 'rgb(255, 0, 0)') {
        return "green"
     } else {
        return 'red'
     }
  })
})
*/
