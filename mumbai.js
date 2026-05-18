
        // ──────────────────────────────────────────────
        // 1. SELECT ALL CARDS AND MODALS
        // ──────────────────────────────────────────────

        // Get every card that has a data-modal attribute
        var cards = document.querySelectorAll('.card[data-modal]');

        // Get every modal overlay on the page
        var modals = document.querySelectorAll('.css-modal');

        // ──────────────────────────────────────────────
        // 2. HELPER FUNCTION — CLOSE ANY OPEN MODAL
        //    Removes the 'active' class from ALL modals
        //    so only one can be visible at a time.
        // ──────────────────────────────────────────────
        function closeAllModals() {
            for (var i = 0; i < modals.length; i++) {
                modals[i].classList.remove('active');
            }
        }

        // ──────────────────────────────────────────────
        // 3. CARD CLICK → OPEN THE MATCHING MODAL
        //    Each card stores the modal's ID in its
        //    data-modal attribute (e.g. "modal-kanha").
        // ──────────────────────────────────────────────
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function () {
                // Read the modal ID from the clicked card
                var modalId = this.getAttribute('data-modal');

                // Find the matching modal element by its ID
                var modal = document.querySelector('#' + modalId);

                // Only open if the modal actually exists
                if (modal) {
                    // Close any other open modal first
                    closeAllModals();

                    // Show this modal by adding the 'active' class
                    modal.classList.add('active');
                }
            });
        }

        // ──────────────────────────────────────────────
        // 4. CLOSE BUTTON (×) → CLOSE THE MODAL
        //    Each modal has a .modal-close-btn element.
        // ──────────────────────────────────────────────
        var closeButtons = document.querySelectorAll('.modal-close-btn');

        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function () {
                closeAllModals();
            });
        }

        // ──────────────────────────────────────────────
        // 5. BACKGROUND CLICK → CLOSE THE MODAL
        //    Each modal has a .modal-close-bg element
        //    that covers the dark backdrop area.
        // ──────────────────────────────────────────────
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

        // Scroll to top when clicked
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    