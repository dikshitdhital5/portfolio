  // ===== TAB NAVIGATION =====
        function opentab(event, tabname) {
            var tablinks = document.getElementsByClassName("tablinks");
            var tabcontents = document.getElementsByClassName("tabcontents");

            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("activelink");
            }
            for (var i = 0; i < tabcontents.length; i++) {
                tabcontents[i].classList.remove("activetab");
            }

            event.currentTarget.classList.add("activelink");
            document.getElementById(tabname).classList.add("activetab");
        }

        // ===== MOBILE MENU =====
        var menuBtn = document.querySelector('.menu-btn');
        var navMenu = document.querySelector('#nav-menu');

        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('show');
                menuBtn.innerHTML = navMenu.classList.contains('show')
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="fas fa-bars"></i>';
            });
        }

        // ===== SMOOTH SCROLL =====
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href');
                if (targetId === '#' || !document.querySelector(targetId)) return;

                var targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // ===== SCROLL EFFECTS =====
        function checkScroll() {
            var scrollPosition = window.scrollY;
            var navbar = document.getElementById('navbar');
            var scrollTopBtn = document.getElementById('scrollTopBtn');

            if (navbar) {
                if (scrollPosition > 100) navbar.classList.add('navbar-scrolled');
                else navbar.classList.remove('navbar-scrolled');
            }

            if (scrollTopBtn) {
                if (scrollPosition > 500) scrollTopBtn.classList.add('active');
                else scrollTopBtn.classList.remove('active');
            }

            document.querySelectorAll('.fade-in, .fade-in-left').forEach(function(el) {
                var elementTop = el.getBoundingClientRect().top;
                var windowHeight = window.innerHeight / 1.3;
                if (elementTop < windowHeight) el.classList.add('visible');
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // ===== SCROLL TO TOP =====
        var scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // ===== CONTACT FORM =====
        var form = document.getElementById('contact-form');
