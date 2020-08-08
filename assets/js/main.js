    $(document).ready(function() {
        // =============== lazy Load ==============
        var myLazyLoad = new LazyLoad({
            elements_selector: ".photo"
        })
        // =============== Slide Story ==============
        $('.slide__story').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        // ================== Slide feedback ==============
        $('.slide-feeback').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        // =====================================
        //    // Sub menu mobile
        var iconShowSubMenu = $('.icon-subnav')
        var subMenuMobile = $('.subnav-children')
        var liMenuMobile = $('#list-menu-mobile>li')
        iconShowSubMenu.click(function(e) {
            let liClick = $(this).parent()
            let subMenuli = $(this).next()
            if (liMenuMobile.hasClass('active') && liMenuMobile.hasClass('active') != liClick.hasClass('active')) {
                subMenuMobile.slideUp()
                liMenuMobile.removeClass('active')
            }
            liClick.toggleClass("active");
            subMenuli.slideToggle()
        })
        // =====================================
        var buttonShowSearch = $('.button-search')
        var sideSearch = $('.side-search-container')
        var buttonShowMenu = $('#button-menu-show')
        var sideMenu = $('#side-menu-nav')
        var mainBody = $('#main-body')
        var sideWrap = $('.side-menu-wrap')
        var siteOverlay = $("#site-overlay")
        var buttonClose = $("#button-close-menu")
        // function open side-menu-wrap
        function showSideWrap(sideItem) {
            siteOverlay.addClass('active');
            sideWrap.addClass('open');
            mainBody.addClass('move')
            sideItem.addClass('show')
        }
        // function close side-menu-wrap
        function closeSideWrap() {
            siteOverlay.removeClass('active');
            sideWrap.removeClass('open');
            mainBody.removeClass('move')
            sideMenu.removeClass('show')
            liMenuMobile.removeClass('active')
            subMenuMobile.slideUp()
            sideSearch.removeClass('show')
        }
        // Click close side-wrap
        buttonClose.click(function() {
            closeSideWrap();
        })
        // Click show side menu
        buttonShowMenu.click(function() {
            showSideWrap(sideMenu);
        })
        // Click show side search
        buttonShowSearch.click(function() {
            showSideWrap(sideSearch);
        })
    });
    // button scroll to top =====================================
    var buttonScrollTop = {
        init: function() {
            this.scrollTop()
        },
        scrollTop: function() {
            //Get the button
            var mybutton = document.getElementById("srcoll-top");
            // When the user scrolls down 20px from the top of the document, show the button
            window.addEventListener('scroll', scrollFunction);

            function scrollFunction() {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
            // When the user clicks on the button, scroll to the top of the document
            mybutton.addEventListener('click', (function(e) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                e.preventDefault()
            }))
        }
    }
    buttonScrollTop.init();