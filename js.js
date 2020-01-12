// JAVASCRIPT
// window.onload = function () {
//     document.querySelector('.tabs-header').addEventListener('click', fTabs);
//     function fTabs(e) {
//         console.log(e);
//         if(e.target.className == 'tab-h') {
//             console.log(e.target.getAttribute('data-tab'));
//             var tabH = document.getElementsByClassName('tab-h');
//             for (var i = 0; i < tabH.length; i++) {
//                 tabH[i].classList.remove('active');
//             }
//             var dataTab = e.target.getAttribute('data-tab');
//             e.target.classList.add('active');
//             var tabBody = document.getElementsByClassName('tab-b');
//             // получаем массив 
//             for (var i = 0; i < tabBody.length; i++) {
//                 if(dataTab ==i) {
//                     tabBody[i].style.display = 'block';
//                 } else {
//                     tabBody[i].style.display = 'none';
//                 }
//             }
//         }
//     }
// }

// JQUERY
$(document).ready(function(){
    $('.tabs-header').on('click', fTabs);
    function fTabs(e) {
        if ($(e.target).is('.tab-h')) {
            $('.tab-h').each(function() {
                $('.tab-h').removeClass('active');
            })
            $(e.target).addClass('active');
        }
        var tabB = $('.tab-b');
        
        $('.tab-b').each(function () {
            tabB.removeClass('able');
            var dataTab = e.target.getAttribute('data-tab');
            console.log(dataTab);
            tabB.eq(dataTab).addClass('able');
        })
    }
});
