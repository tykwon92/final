const sections = document.querySelectorAll('section');

const nextBtn = document.querySelector('.next');

// let index = 0;
// nextBtn.addEventListener('click', () => {
//     index ++;
//     sections.forEach((section, i) => {
//         if (i== index) {
//             section.scrollIntoView({behavior: 'smooth'});
//         }
//     })
// });
$(document).ready(function() {
    $('.navigation a').on('click', function() {
        e.preventDefault();

        var target = $(this).attr("href");
        
        var targetPosition = $(target).offset().top

        console.log(target);

        $('html, body').animate({
            scrollTop:targetPosision
        }, 800, function(){
            location.hash = target; 
        });
        
        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
        if($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
});
