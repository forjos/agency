/* auto height services listimg > img */
type="text/javascript">jQuery(document).ready(function($) {
// $(function(){
	var nav_height = $('.pfrx_header_nav').height();
	// var contactbtn = $('.pfrx_maincover_about_contactbtn').width();
	var portfoliolist_item = $('.pfrx_portfoliolist_shot').width();
	// $('.pfrx_maincover_container').css({'padding-top': nav_height + 20, 'opacity': 1});
	$('.pfrx_maincover_container').css('padding-top', nav_height + 20);
	// $('.pfrx_maincover_about_contactbtn').height(contactbtn);
	$('.pfrx_portfoliolist_shot').height(portfoliolist_item / 1.8);


	// $(window).on('resize', function(e) {
  jQuery(window).resize(function() {
		// $('.pfrx_maincover_about_contactbtn').height(contactbtn);
    var portfoliolist_item = $('.pfrx_portfoliolist_shot').width();
		$('.pfrx_portfoliolist_shot').height(portfoliolist_item / 1.8);
	});

	// $('.height').height($('.sunplace_services_listimg_img').width());
	// $(window).on('resize', function(e) {
	// 	$('.sunplace_services_listimg_img').height($('.sunplace_services_listimg_img').width());
	// });
});


type="text/javascript">jQuery(document).ready(function($) {
	jQuery('.pfrx_maincover_about_contactbtn').height(jQuery('.pfrx_maincover_about_contactbtn').outerWidth());
	// jQuery(window).on('resize', function(e) {
  jQuery(window).resize(function() {
		jQuery('.pfrx_maincover_about_contactbtn').height(jQuery('.pfrx_maincover_about_contactbtn').outerWidth());
	});
});

// hamburger
// type = "text/javascript" > jQuery(document).ready(function(jQuery) {
//     jQuery('.sunplace_hamburger_box').click(function(event) {
//         jQuery('.sunplace_header_nav_box').toggleClass('sunplace_header_nav_active');
//         jQuery('.sunplace_hamburger_box').toggleClass('sunplace_hamburger_box_acive');
//         jQuery('body').toggleClass('body_hidden');
//     });
// });




// type="text/javascript">jQuery(document).ready(function($) {
$(function(){
/* плавный transition меню */
 $('.pfrx_header_nav>li').each(function(index){
          var el = $(this),
              delay = 0.3 + 0.05 * index + 's'
          el.css({
            'transition-delay': delay,
            'opacity' : 1
          });    
        });
 /* плавный transition меню end */

 /* плавный transition cover */
 $('.pfrx_maincover_heading_descr').css('opacity', 1);
 $('.pfrx_maincover_heading>span').each(function(index){
          var el = $(this),
              delay = 0.1 + 0.05 * index + 's'
          el.css({
            'transition-delay': delay,
            'opacity' : 1
          });    
        });
 $('.pfrx_maincover_about_text_wrapper').css('opacity', 1);
 /* плавный transition cover end */

 });



/* menu about */
$(function(){
/* плавный transition меню */
 $('.pfrx_about_nav>li').each(function(index){
          var el = $(this),
              delay = 0.3 + 0.05 * index + 's'
          el.css({
            'transition-delay': delay,
            'opacity' : 1
          });    
        });
 });
/* menu about end */


/* smooth scroll */
$(function() {
  $('.pfrx_about_nav a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 900);
  });
});
/* smooth scroll end */


/* scroll project */

// $('.pfrx_portfoliolist_row').each(function(index){
// 	var el = $(this),
//     	    delay = 0.05 * index + 's'
//     	el.css({
//     	  'transition-delay': delay,
//     	});  
// });

$(function() {
$(".pfrx_portfoliolist_page .pfrx_portfoliolist_row:nth-child(1)").css({
            'opacity' : 1
            });
});

$(window).scroll(function() {
    $(".pfrx_portfoliolist_home .pfrx_portfoliolist_row").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > position - windowHeight - 10) {
            $(this).css({
            'opacity' : 1
            });
        }
    });


    $(".pfrx_portfoliolist_page .pfrx_portfoliolist_row:nth-child(n+2)").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > position - windowHeight - 10) {
            $(this).css({
            'opacity' : 1
            });
        }
    });

});

/* scroll project end */


/* ui animation */
$('.pfrx_el_opacity').each(function(index){
  var el = $(this),
          delay = 0.15 + 0.15 * index + 's'
      el.css({
        'transition-delay': delay,
      });  
});

type="text/javascript">jQuery(document).ready(function($) {
  $('.pfrx_el_opacity').css('opacity', 1);
});
/* ui animation end */

// jQuery('.category_btn_triger').click(function(event){
// });



/* auto height for page about */
type="text/javascript">jQuery(document).ready(function($) {
  var teamitem_height = $('.pfrx_team_photo').width();
  $('.pfrx_team_photo').height(teamitem_height * 1.3);

  // $(window).on('resize', function(e) {
  jQuery(window).resize(function() {
    var teamitem_height = $('.pfrx_team_photo').width();
    $('.pfrx_team_photo').height(teamitem_height * 1.3);
  });

  // $('.height').height($('.sunplace_services_listimg_img').width());
  // $(window).on('resize', function(e) {
  //  $('.sunplace_services_listimg_img').height($('.sunplace_services_listimg_img').width());
  // });
});
/* auto height for page about end */



/* client */
type="text/javascript">jQuery(document).ready(function($) {
 var swiper = new Swiper('.pfrx_swiper_container', {
   spaceBetween: 30,
      effect: 'fade',
      fadeEffect: { crossFade: true },
     autoplay: {
        delay: 250,
        disableOnInteraction: true,
      },
      loop: true,
    });
});
 /* client end*/




 /* time */
type="text/javascript">jQuery(document).ready(function($) {

	var hours2 = document.getElementById("pfrx_contacts_local_time_hours");
    var minutes2 = document.getElementById("pfrx_contacts_local_time_min");

    function getNewTimezone (z) {

        var zone = z || 0;
        var localTime = new Date(); // получаем дату
        var UTCTime = localTime.toUTCString(); // получаем дату по гринвичу
        var dateArr = UTCTime.split(" ");
        var timeArr = dateArr[dateArr.length-2].split(":");

        // новое время согласно
        return new Date(dateArr[3],localTime.getMonth(),dateArr[1],timeArr[0],(+timeArr[1] + zone),timeArr[2]);
    }
    setInterval(function () {
        var time = getNewTimezone();
        var time2 = getNewTimezone(420);
        var h = time.getHours();
        var h2 = time2.getHours();
        var m = time.getMinutes();
        var m2 = time2.getMinutes();

        hours2.innerHTML = (h2.toString().length == 1) ? "0" + h2.toString() + " : " : h2.toString() + " : ";
        minutes2.innerHTML = (m2.toString().length == 1) ? "0" + m2.toString() : m2.toString();
    },300);

});
  /* time end */