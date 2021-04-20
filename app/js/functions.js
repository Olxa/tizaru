document.addEventListener("DOMContentLoaded", function () {
        
	$('.persons-slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.content-slider').slick({
		infinite: false,
		dots: false,
		autoplay: false
	});

	$('.content-carusel-4').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.content-carusel-3').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('body').on('click', '.password-visible', function () {
		if ($('.password').attr('type') == 'password') {
			$(this).addClass('view');
			$('.password').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('.password').attr('type', 'password');
		}
		return false;
	});

	$(".login__btn").on('click', function () {
        $(".login").removeClass('active');
        $(".recovery").removeClass('active');
		$(".registrations").addClass('active');
    });

    $(".share-block__btn-share").on('click', function () {
        $(".share-popup").addClass('active');
    });

    $(".share-popup__close").on('click', function () {
        $(".share-popup").removeClass('active');
    });

	$(".registrations__btn").on('click', function () {
        $(".registrations").removeClass('active');
        $(".recovery").removeClass('active');
        $(".login").addClass('active');       
    });

    $(".recovery-link").on('click', function () {
        $(".registrations").removeClass('active');
        $(".login").removeClass('active');
        $(".recovery-send").removeClass('active');
        $(".recovery").addClass('active');
        $(".recovery-form").addClass('active');
    });

	$(".btn-login-franchisees").on('click', function () {
		$(".login-user").removeClass('active');
		$(".login-franchisees").addClass('active');
	});

	$(".btn-login-user").on('click', function () {
		$(".login-franchisees").removeClass('active');
		$(".login-user").addClass('active');
	});

	$(".btn-registrations-franchisees").on('click', function () {
		$(".registrations-user").removeClass('active');
		$(".registrations-franchisees").addClass('active');
	});

	$(".btn-registrations-user").on('click', function () {
        $(".registrations-franchisees").removeClass('active');
        $(".recovery").removeClass('active');
        $(".registrations").addClass('active');
		$(".registrations-user").addClass('active');
    });

    $(".btn-recovery-send").on('click', function () {
        $(".recovery-form").removeClass('active');
        $(".recovery-send").addClass('active');
    });

	$('.city-slroller-btn1').click(function () {
		$('.city-slroller-btn1').removeClass('active');
		$(this).addClass('active');
		$('.city-slroller-lvl1')
			.hide()
			.filter('[data-con-lvl1="' + $(this).data('btn1') + '"]')
			.show();
	});

	$('.city-slroller-btn2').click(function () {
		$('.city-slroller-btn2').removeClass('active');
		$(this).addClass('active');
		$('.city-slroller-lvl2')
			.hide()
			.filter('[data-con-lvl2="' + $(this).data('btn2') + '"]')
			.show();
	});

	$('.tab-data-btn').click(function () {
		$('.tab-data-content')
			.hide()
			.filter('[data-content="' + $(this).data('btn') + '"]')
			.show();
	});

	$('.tabs-nav').on('click', '.tabs-btn:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    //$(".collapse .collapse-link").click(function () {
    //    $(this).toggleClass('hide').siblings('.collapse-content').slideToggle();
    //    return false;
    //});

    $(".collapse .collapse-link").click(function () {
        $(this)
            .toggleClass('hide')
            .siblings('.collapse-content').addClass('visible')
            .siblings('.collapse-link-close').addClass('visible');
        return false;
    });

    $(".collapse .collapse-link-close").click(function () {
        $(this)
            .toggleClass('visible')
            .siblings('.collapse-link').removeClass('hide')
            .siblings('.collapse-content').removeClass('visible');
        return false;
    });

	$(".services-all").on('click', function () {
		$(".home-services__modal").toggleClass('active');
	});

	$(".home-services__close").on('click', function () {
		$(".home-services__modal").removeClass('active');
	});

	$(".btn-languages").on('click', function () {
		$(".header__languages").toggleClass('active');
    });

    $(".js-dropdown-toogle").on('click', function () {
        $(this).toggleClass('active');
    });

	$(".header__city-btn").on('click', function () {
		$(".header__city").toggleClass('active');
	});

	$(".header__reg-btn").on('click', function () {
		$(".login-wrapper").toggleClass('active');
	});

	$(".categoty-bar__btn").on('click', function () {
		$(".categoty-bar").toggleClass('categoty-modal-active');
	});

	$(".city-search__btn").on('click', function () {
		$(".city-search").toggleClass('active');
	});

	//Mobil filter

	$(".mobil-bar__btn").on('click', function () {
		$(".mobil-filter").addClass('active');
	});

	$(".mobil-filter__close").on('click', function () {
		$(".mobil-filter").removeClass('active');
	});

	//

	$(".mobil-filter__btn-category").on('click', function () {
		$(".categoty-modal-mobil").addClass('active');
	});

	$(".mobil-filter__back").on('click', function () {
		$(".mobil-filter__wrapper").removeClass('active');
	});

	$(".categoty-modal-mobil__cancel").on('click', function () {
		$(".categoty-modal-mobil").removeClass('active');
	});

	$(".categoty-modal-mobil__ok").on('click', function () {
		$(".categoty-modal-mobil").removeClass('active');
	});
	
	$(".mobil-filter__btn-country").on('click', function () {
		$(".mobil-filter__country").addClass('active');
	});

	$(".mobil-filter__btn-region").on('click', function () {
		$(".mobil-filter__region").addClass('active');
	});

});

$(document).on('mouseup', function (e) {
	let hsm = $('.home-services__modal');
	if (!hsm.is(e.target) && hsm.has(e.target).length === 0) {
		hsm.removeClass('active');
	};

	let lang = $('.header__languages');
	if (!hsm.is(e.target) && lang.has(e.target).length === 0) {
		lang.removeClass('active');
	}

	let city = $('.header__city');
	if (!hsm.is(e.target) && city.has(e.target).length === 0) {
		city.removeClass('active');
	}

	let login = $('.login-wrapper');
	if (!hsm.is(e.target) && login.has(e.target).length === 0) {
		login.removeClass('active');
		$(".header").removeClass("log-active")
	}

	let ctm = $('.categoty-bar');
	if (!hsm.is(e.target) && ctm.has(e.target).length === 0) {
		ctm.removeClass('categoty-modal-active');
	}

	let csh = $('.city-search');
	if (!hsm.is(e.target) && csh.has(e.target).length === 0) {
		csh.removeClass('active');
    }

    let drop = $('.dropdown');
    if (!hsm.is(e.target) && drop.has(e.target).length === 0) {
        drop.removeClass('active');
    }
});

if (document.documentElement.clientWidth > 1201) {
	$(".header__btn-menu").on('click', function () {
        $(this).toggleClass('active');
        $(".burger-btn").toggleClass('active');
		$(".main-menu").toggleClass('active');
	});
};

if (document.documentElement.clientWidth < 1200) {

	$(".header__btn-menu").on('click', function () {
		$(".mobil-header-wrapper").addClass("active")
	});

	$(".header__btn-menu-close").on('click', function () {
		$(".mobil-header-wrapper").removeClass("active")
	});

	$('.main-menu__tabs-btn').click(function () {
		$('.main-menu__tabs-btn').removeClass('active');
		$(this).addClass('active');
		$('.main-menu__col')
			.hide()
			.filter('[data-col="' + $(this).data('btn') + '"]')
			.show();
	});

	$(".city-wrapper__back").on('click', function () {
		$(".header__city").removeClass("active")
	});

	$(".footer__mobil-wrap .footer__sub").click(function () {
		$(this).toggleClass('active').siblings('.footer__mobil-wrap .footer__sub-menu').slideToggle();
		return false;
	});

};

if (document.documentElement.clientWidth < 768) {

	$(".header__reg-btn").on('click', function () {
		$(".header").toggleClass("log-active")
	});

	$(".login-reg__close").on('click', function () {
		$(".header").removeClass("log-active")
		$(".login-wrapper").removeClass("active")
	});
};

document.addEventListener("DOMContentLoaded", function () {
	$('.popup-link').magnificPopup({
		type: 'inline' // к поп апу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
	});
});