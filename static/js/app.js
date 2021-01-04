//$(document).foundation();

(function() {

    var options = {
      strings: ['<p>!(t){ e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=(t){return t},e.d=(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=(t){var i=t&&t.__esModule?(){ return t.default}:(){return t};return e.d(i,"a",i),i}, e.o=(t,e){ return Object.prototype. call(t,e) },e.p="",e(e.s=35)}([(t,e){t.exports=jQuery},(t,e,i){"use strict"; n(){return"rtl"===r()("html").attr("dir")} s(t,e){ return t=t || 6,Math.round( Math.pow(36,t+1 )-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")} o(t){ var e, i = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend"}, n = document. createElement("div"); for (var s in i) "undefined" != typeof n.style[s] && (e=i[s]); return e?e:( e=setTimeout(() {t.triggerHandler( "transitionend", [t])},1),"transitionend")}i.d(e,"b",(){return n}),i.d(e,"a",(){return s}),i.d(e,"c",(){return o});var a = i(0),r = i.n(a)}, (t,e,i){"use strict"; n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a  as a ")} s(t){ return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()} o(t){ return s("undefined"!=typeof t.constructor.name?t.constructor.name:t.Name)}i.d(e,"a",(){return u}); !(t){ e(n){if(i[n])return i[n].exports; var s=i[n]={i:n,l:!1,exports:{}}; return t[n].call( s.exports,s,s.exports,e ),s.l=!0,s.exports } var i={}; return e.m=t,e.c=i,e.i=(t) { return t },e.d=(t,i,n){e.o(t,i) || Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=(t){var i=t&&t.__esModule?(){ return t.default}:(){return t};return e.d(i,"a",i),i}, e.o=(t,e){ return Object.prototype. call(t,e) },e.p="",e(e.s=35)}([(t,e){t.exports=jQuery},(t,e,i){ "use strict"; n() { return"rtl"===r()("html").attr("dir")} s(t,e){ return t=t || 6, Math.round( Math.pow(36,t+1 ) - Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")} o(t){ var e, i = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend"}, n = document. createElement("div"); for (var s in i) "undefined" != typeof n.style[s] && (e=i[s]); return e?e:( e=setTimeout(() { t.triggerHandler( "transitionend", [t])},1), "transitionend") }i.d(e,"b",(){return n}),i.d(e,"a",(){return s}),i.d(e,"c",(){return o});var a = i(0),r = i.n(a)}, (t,e,i){"use strict"; n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a  as a ")} s(t){ return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()} o(t){ return s("undefined"!=typeof t.constructor.name?t.constructor.name:t.Name)}i.d(e,"a",(){return u});</p>'],
      typeSpeed: 0
    }

    var typed = new Typed(".animated-text", options);


    /*============================================================================
     Contact Form
    ==============================================================================*/
    $('#submit').on('click tap', function(e) {
        e.preventDefault();
        alert('Form is currently not working.')
    });



    /*============================================================================
     Animation on nav links
    ==============================================================================*/
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    const triggers = document.querySelectorAll('.nav-animation');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlightLink() {
        const linkCoords = this.getBoundingClientRect();
        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    triggers.forEach( a => a.addEventListener('mouseenter', highlightLink));


    /*============================================================================
     Animation on name hover
    ==============================================================================*/
    $('.name-animation').each(function() {
        $(this).hover(function() {
            var el = $(this);
            el.addClass('animated rubberBand');
            setTimeout(function() {
                el.removeClass('animated rubberBand');
            }, 1000);
        })
    });


    /*============================================================================
     Fade in on scroll animation
    ==============================================================================*/
    new WOW().init();


    /*============================================================================
     Animate X
    ==============================================================================*/
    $(window).on('scroll', function() {
        if ( $('#about').length != 0 ) {
            $(this).scrollTop() <= $('#about').offset().top ? $('.profile-image').addClass('active') : $('.profile-image').removeClass('active');
        }
    });


    /*============================================================================
    Smooth Scrolling
    ==============================================================================*/
    $('a.page-scroll').bind('click touchstart',function(event){
        var $anchor=$(this);

        $('html, body').stop().animate({
            scrollTop:($($anchor.attr('href')).offset().top-0)
        },1250,'easeInOutExpo');

        event.preventDefault();

    });


    /*============================================================================
     Back To Top Button
    ==============================================================================*/
    $(window).on('scroll', function() {
        if ( $('#expertise').length != 0 ) {
            $(this).scrollTop() >= $('#expertise').offset().top ? $('.back-to-top').addClass('show') : $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').on('click tap', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

})();
