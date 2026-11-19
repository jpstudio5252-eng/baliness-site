/* BALINESS ITAEWON — small progressive enhancement for the renewed pages. */
(function () {
  'use strict';

  var doc = document.documentElement;

  // Scroll reveal: elements fade/slide in once as they enter the viewport.
  function reveal() {
    var items = document.querySelectorAll('.it-reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    );

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  // Keep the sticky header readable over the dark hero.
  function headerShadow() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      reveal();
      headerShadow();
    });
  } else {
    reveal();
    headerShadow();
  }

  doc.classList.add('it-ready');
})();
