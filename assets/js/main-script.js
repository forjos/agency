/* auto height services listimg > img */
$(function(){
	var nav_height = $('.pfrx_header_nav').height();
	var contactbtn = $('.pfrx_maincover_about_contactbtn_box').width();
	var portfoliolist_item = $('.pfrx_portfoliolist_shot').width();
	$('.pfrx_maincover_container').css({'padding-top': nav_height + 20, 'opacity': 1});
	$('.pfrx_maincover_about_contactbtn').height(contactbtn);
	$('.pfrx_portfoliolist_shot').height(portfoliolist_item / 1.8);


	$(window).on('resize', function(e) {
		$('.pfrx_maincover_about_contactbtn').height(contactbtn);
		$('.pfrx_portfoliolist_shot').height(portfoliolist_item / 1.8);
	});

	// $('.height').height($('.sunplace_services_listimg_img').width());
	// $(window).on('resize', function(e) {
	// 	$('.sunplace_services_listimg_img').height($('.sunplace_services_listimg_img').width());
	// });
});


// hamburger
// type = "text/javascript" > jQuery(document).ready(function(jQuery) {
//     jQuery('.sunplace_hamburger_box').click(function(event) {
//         jQuery('.sunplace_header_nav_box').toggleClass('sunplace_header_nav_active');
//         jQuery('.sunplace_hamburger_box').toggleClass('sunplace_hamburger_box_acive');
//         jQuery('body').toggleClass('body_hidden');
//     });
// });