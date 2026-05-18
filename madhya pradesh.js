

        var cards = document.querySelectorAll('.card[data-modal]');

        var modals = document.querySelectorAll('.css-modal');

        function closeAllModals() {
            for (var i = 0; i < modals.length; i++) {
                modals[i].classList.remove('active');
            }
        }

        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function () {
                var modalId = this.getAttribute('data-modal');

                var modal = document.querySelector('#' + modalId);

                if (modal) {
                    closeAllModals();

                    modal.classList.add('active');
                }
            });
        }

        var closeButtons = document.querySelectorAll('.modal-close-btn');

        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function () {
                closeAllModals();
            });
        }

        var closeBgs = document.querySelectorAll('.modal-close-bg');

        for (var i = 0; i < closeBgs.length; i++) {
            closeBgs[i].addEventListener('click', function () {
                closeAllModals();
            });
        }



        //timeline section javascript 

        (function () {
            var root = document.getElementById('mp-timeline');
            if (!root) return;
            var steps = root.querySelectorAll('.tl-step');
            var panels = root.querySelectorAll('.tl-panel');

            function activate(index) {
                var i;
                for (i = 0; i < steps.length; i++) {
                    steps[i].classList.toggle('active', i === index);
                    steps[i].setAttribute('aria-selected', i === index ? 'true' : 'false');
                }
                for (i = 0; i < panels.length; i++) {
                    panels[i].classList.toggle('active', i === index);
                    panels[i].setAttribute('aria-hidden', i === index ? 'false' : 'true');
                }
            }

            for (var j = 0; j < steps.length; j++) {
                steps[j].addEventListener('click', function () {
                    var idx = parseInt(this.getAttribute('data-tl-index'), 10);
                    if (!isNaN(idx)) activate(idx);
                });
            }

            for (var k = 0; k < panels.length; k++) {
                panels[k].setAttribute('aria-hidden', k === 0 ? 'false' : 'true');
            }
        })();
        const backToTopBtn = document.getElementById("backToTop");



        // Show button when scrolling down
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

       
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    