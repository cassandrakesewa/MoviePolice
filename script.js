// /*==================================================
//     Name: Wennus
//     Description: Responsive Coming Soon Page
//     Version: 1.0
//     Author: Esmet

//     TABLE OF CONTENTS
//     ------------------------------------------------
//     1. - Countdown
// 	2. - Text Rotation (cycle slide)
// 	3. - Backstretch for Background
// 	4. - Toggle Menu
// 	5. - Menu show and hide content
// 	6. - Subscribe Ajax Form
// 	7. - Contact Form
// 	8. - Preloader
// 	9. - Youtube BG Player
// ==================================================*/



// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     $(".video-player").hide();
//     $(".player-controls").hide();
//   } 



// ;(function( $ ) {
// 	"use strict";




// /*------------------------------------------------------------------------*/
// /*	1. - Countdown
// /*------------------------------------------------------------------------*/

// 	// edit end date below
// 	var endDate = "june 19, 2015 16:00:00";

// 	$("#countdown").countdown({
//         htmlTemplate: '<div id="countdown_day" class="countdown col-md-3 col-xs-6 col-sm-3"><div><span>%d</span>Days</div></div><div id="coundown_hour" class="countdown col-md-3 col-xs-6 col-sm-3"><div><span>%h</span>Hours</div></div><div id="coundown_min" class="countdown col-md-3 col-xs-6 col-sm-3"><div><span>%i</span>Minutes</div></div><div id="coundown_sec" class="countdown col-md-3 col-xs-6 col-sm-3 c_last"><div><span>%s</span>Seconds</div></div>',
//         date: endDate,
//         hoursOnly: false,
//         leadingZero: true
//     });



// /*------------------------------------------------------------------------*/
// /*	2. - Text Rotation (cycle slide)
// /*------------------------------------------------------------------------*/

//     $('.text-rotator').cycle({
// 		fx : 'scrollVert',
// 		timeout: 4000,
// 		delay: 1000,
// 		speed: 500,
// 		slides: '.text-item'
// 	});



// /*------------------------------------------------------------------------*/
// /*	3. - Backstretch for Background
// /*------------------------------------------------------------------------*/

// 	// $.backstretch("img/image3.jpg");


// 	//uncomment the code below if you want to have slideshow background 

// 	// $("#bg").backstretch([
// 	//     "img/image1.jpg",
// 	//     "img/image2.jpg",
// 	//     "img/image3.jpg"    
// 	//   ], {duration: 4000, fade: 'slow'});



// /*------------------------------------------------------------------------*/
// /*	4. - Toggle Menu
// /*------------------------------------------------------------------------*/

// 	$('.click-menu').click(function(){
//         $('.show-menu').slideToggle();
//         return false;
//     });



// /*------------------------------------------------------------------------*/
// /*	5. - Menu show and hide content
// /*------------------------------------------------------------------------*/

//     $(".main-menu a").click(function(){
// 		var id =  $(this).attr('class');
// 		id = id.split('-');
// 		$('a.active').removeClass('active');
//     	$(this).addClass('active');
// 		$("#page-content .content").slideUp('slow');
// 		$("#page-content #menu-"+id[1]).slideDown('slow');		
// 		$("#page-content .homepage").slideUp('slow');
// 		return false;
// 	});

// 	$(".main-menu a.homebutton").click(function(){
// 		$("#page-content .content").slideUp('slow');
// 		$("#page-content .homepage").slideDown('slow');
// 		return false;
// 	});

// 	$(".main-menu a.subscribebutton").click(function(){
// 		$("#page-content .content").slideUp('slow');
// 		$("#page-content .subscribe-section").slideDown('slow');
// 		return false;
// 	});

// 	$(".main-menu a.contactbutton").click(function(){
// 		$("#page-content .content").slideUp();
// 		$("#page-content .contact-section").slideDown('slow');
// 		return false;
// 	});




// /*------------------------------------------------------------------------*/
// /*	6. - Subscribe Ajax Form
// /*------------------------------------------------------------------------*/

// 	$('#subscribe-form').ajaxChimp({
// 	    language: 'eng',
// 	    url: 'http://esmeth.us10.list-manage.com/subscribe/post?u=d5ef220e51cc695809ef02f3f&amp;id=a15c146085'
// 	});

//     // Mailchimp translation
//     //
//     // Defaults:
//     //'submit': 'Submitting...',
//     //  0: 'We have sent you a confirmation email',
//     //  1: 'Please enter a value',
//     //  2: 'An email address must contain a single @',
//     //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
//     //  4: 'The username portion of the email address is invalid (the portion before the @: )',
//     //  5: 'This email address looks fake or invalid. Please enter a real email address'

// 	$.ajaxChimp.translations.eng = {
// 	    'submit': 'Submitting...',
// 	    0: '<i class="fa fa-check"></i> We will be in touch soon!',
// 	    1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
// 	    2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
// 	    3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
// 	    4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
// 	    5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
// 	}



// /*------------------------------------------------------------------------*/
// /*	7. - Contact Form
// /*------------------------------------------------------------------------*/
// 	$('#ajax-contact').on('submit',function(){
 
//         // Add text 'loading...' right after clicking on the submit button. 
//         $('.output_message').text('Loading...'); 

//         var form = $(this);
//         $.ajax({
//             url: form.attr('action'),
//             method: form.attr('method'),
//             data: form.serialize(),
//             success: function(result){
//                 if (result == 'success'){
//                     $('.output_message').text('Message sent succesfuly!');  
//                 } else {
//                     $('.output_message').text('Error Sending email!');
//                 }
//             }
//         });

//         // Prevents default submission of the form after clicking on the submit button. 
//         return false;   
//     });



// /*------------------------------------------------------------------------*/
// /*	8. - Preloader
// /*------------------------------------------------------------------------*/
// 	var $preloader = $( '.js-preloader' );

// 	$preloader.jpreLoader({
// 		showPercentage: true,
// 		loaderVPos: "50%",
// 		splashVPos: "50%",
// 	}, function() {
// 		$preloader.addClass('preloader-done');
// 		$('body').trigger('preloader-done');
// 		$(window).trigger('resize');
// 	});



// /*------------------------------------------------------------------------*/
// /*	9. - Youtube BG Player
// /*------------------------------------------------------------------------*/

//     $('.video-player').mb_YTPlayer();





// })(jQuery);