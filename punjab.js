

        // famous attraction javascript 
        document.addEventListener('DOMContentLoaded', function () {
            // Open modals
            var cards = document.querySelectorAll('.card');
            cards.forEach(function (card) {
                card.addEventListener('click', function () {
                    var modalId = this.getAttribute('data-modal');
                    if (modalId) {
                        var modal = document.getElementById(modalId);
                        if (modal) {
                            modal.classList.add('active');
                            document.body.style.overflow = 'hidden';
                        }
                    }
                });
            });

            // Close modals
            var closeButtons = document.querySelectorAll('.modal-close-bg, .modal-close-btn');
            closeButtons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var modal = this.closest('.css-modal');
                    if (modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        });



        // TIMELINE ACCORDION JS 

        (function () {
            // Get the timeline container
            var root = document.getElementById('pb-timeline');
            if (!root) return;

            // Get all step buttons and all content panels
            var tabs = root.querySelectorAll('.tl-step');
            var panels = root.querySelectorAll('.tl-panel');

            // Function to switch the active tab and panel
            function switchTab(index) {
                // Loop through every tab
                for (var i = 0; i < tabs.length; i++) {
                    if (i === index) {
                        // Mark this tab as selected
                        tabs[i].setAttribute('aria-selected', 'true');
                        // Show its panel
                        panels[i].classList.add('active');
                    } else {
                        // Deselect all other tabs
                        tabs[i].setAttribute('aria-selected', 'false');
                        // Hide all other panels
                        panels[i].classList.remove('active');
                    }
                }
            }

            // Add a click event listener to each tab button
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click', function () {
                    // Read which index this button belongs to
                    var idx = parseInt(this.getAttribute('data-tl-index'));
                    // Switch to that tab
                    switchTab(idx);
                });
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

    