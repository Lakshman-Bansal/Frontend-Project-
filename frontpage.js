
    // quiz code 
        var quizBtn = document.getElementById('quiz-btn');

        if (quizBtn) {

            quizBtn.addEventListener('click', function () {

                var typeVal = document.getElementById('q-type').value;
                var vibeVal = document.getElementById('q-vibe').value;
                var budgetVal = document.getElementById('q-budget').value;

                var resultDiv = document.getElementById('quiz-result');
                var stateTitle = document.getElementById('result-state');
                var reasonText = document.getElementById('result-reason');

                if (typeVal === "" || vibeVal === "" || budgetVal === "") {
                    alert("Please answer all 3 questions to find your perfect destination!");
                    return; 
                }

                var hp = { name: "Himachal Pradesh", score: 0, message: "A perfect mountain getaway with breathtaking views." };
                var uk = { name: "Uttarakhand", score: 0, message: "The 'Land of the Gods', perfect for spiritual seekers and nature lovers." };
                var jk = { name: "Jammu & Kashmir", score: 0, message: "Paradise on Earth with stunning valleys and lakes." };
                var sikkim = { name: "Sikkim", score: 0, message: "A peaceful Himalayan retreat with pristine nature and monasteries." };
                var meghalaya = { name: "Meghalaya", score: 0, message: "The abode of clouds, offering breathtaking waterfalls and living root bridges." };

                var goa = { name: "Goa", score: 0, message: "The ultimate beach destination with vibrant nightlife and adventures." };
                var kerala = { name: "Kerala", score: 0, message: "God's Own Country, offering relaxing backwaters and tropical beaches." };
                var andaman = { name: "Andaman & Nicobar", score: 0, message: "Exotic islands with crystal-clear water and marine adventures." };
                var odisha = { name: "Odisha", score: 0, message: "A beautiful coastal state known for its tribal cultures and grand temples." };

                var rajasthan = { name: "Rajasthan", score: 0, message: "A majestic royal experience full of palaces, forts, and desert luxury." };
                var up = { name: "Uttar Pradesh", score: 0, message: "Home to the Taj Mahal and profound spiritual heritage." };
                var mp = { name: "Madhya Pradesh", score: 0, message: "The Heart of India, famous for stunning wildlife and historic temples." };
                var karnataka = { name: "Karnataka", score: 0, message: "A blend of ancient ruins, lush coffee estates, and vibrant cities." };
                var gujarat = { name: "Gujarat", score: 0, message: "A culturally rich state known for its unique landscapes and festivals." };
                var maha = { name: "Maharashtra", score: 0, message: "A diverse mix of bustling cities, ancient caves, and western ghats." };

                var punjab = { name: "Punjab", score: 0, message: "A vibrant journey filled with warmth, spirituality, and incredible food." };
                var tn = { name: "Tamil Nadu", score: 0, message: "A land of magnificent ancient temple architecture and rich classical culture." };
                var bihar = { name: "Bihar", score: 0, message: "An ancient land where Buddhism began, filled with profound spiritual history." };
                var wb = { name: "West Bengal", score: 0, message: "A hub of art, literature, and mouth-watering culinary delights." };
                var assam = { name: "Assam", score: 0, message: "A lush green state famous for its tea gardens and wildlife." };

                var allStates = [hp, uk, jk, sikkim, meghalaya, goa, kerala, andaman, odisha, rajasthan, up, mp, karnataka, gujarat, maha, punjab, tn, bihar, wb, assam];

                if (typeVal === "mountains") {
                    hp.score = hp.score + 3;
                    uk.score = uk.score + 3;
                    jk.score = jk.score + 3;
                    sikkim.score = sikkim.score + 3;
                    meghalaya.score = meghalaya.score + 3;
                } else if (typeVal === "beaches") {
                    goa.score = goa.score + 3;
                    kerala.score = kerala.score + 3;
                    andaman.score = andaman.score + 3;
                    odisha.score = odisha.score + 2;
                } else if (typeVal === "heritage") {
                    rajasthan.score = rajasthan.score + 3;
                    mp.score = mp.score + 3;
                    karnataka.score = karnataka.score + 3;
                    gujarat.score = gujarat.score + 3;
                    maha.score = maha.score + 2;
                    up.score = up.score + 2;
                } else if (typeVal === "spiritual") {
                    up.score = up.score + 3;
                    tn.score = tn.score + 3;
                    punjab.score = punjab.score + 3;
                    bihar.score = bihar.score + 3;
                    uk.score = uk.score + 2;
                    odisha.score = odisha.score + 2;
                } else if (typeVal === "adventure") {
                    hp.score = hp.score + 3;
                    uk.score = uk.score + 3;
                    goa.score = goa.score + 3;
                    andaman.score = andaman.score + 3;
                    meghalaya.score = meghalaya.score + 2;
                } else if (typeVal === "relaxation") {
                    kerala.score = kerala.score + 3;
                    sikkim.score = sikkim.score + 3;
                    andaman.score = andaman.score + 2;
                    hp.score = hp.score + 2;
                } else if (typeVal === "wildlife") {
                    mp.score = mp.score + 4;
                    assam.score = assam.score + 4;
                    gujarat.score = gujarat.score + 3;
                    rajasthan.score = rajasthan.score + 2;
                } else if (typeVal === "food") {
                    punjab.score = punjab.score + 4;
                    wb.score = wb.score + 4;
                    gujarat.score = gujarat.score + 3;
                    maha.score = maha.score + 2;
                } else if (typeVal === "luxury") {
                    rajasthan.score = rajasthan.score + 4;
                    goa.score = goa.score + 3;
                    kerala.score = kerala.score + 3;
                    jk.score = jk.score + 2;
                } else if (typeVal === "nature") {
                    jk.score = jk.score + 3;
                    sikkim.score = sikkim.score + 3;
                    meghalaya.score = meghalaya.score + 3;
                    assam.score = assam.score + 3;
                    kerala.score = kerala.score + 2;
                } else if (typeVal === "nightlife") {
                    goa.score = goa.score + 4;
                    maha.score = maha.score + 4;
                    karnataka.score = karnataka.score + 2;
                } else if (typeVal === "festivals") {
                    wb.score = wb.score + 4;
                    gujarat.score = gujarat.score + 4;
                    rajasthan.score = rajasthan.score + 3;
                    punjab.score = punjab.score + 2;
                } else if (typeVal === "roadtrips") {
                    jk.score = jk.score + 4;
                    hp.score = hp.score + 3;
                    maha.score = maha.score + 3;
                    rajasthan.score = rajasthan.score + 2;
                } else if (typeVal === "photography") {
                    rajasthan.score = rajasthan.score + 3;
                    jk.score = jk.score + 3;
                    meghalaya.score = meghalaya.score + 3;
                    up.score = up.score + 2;
                    sikkim.score = sikkim.score + 2;
                }

                if (vibeVal === "relaxing") {
                    kerala.score = kerala.score + 3;
                    sikkim.score = sikkim.score + 3;
                    hp.score = hp.score + 2;
                    andaman.score = andaman.score + 2;
                } else if (vibeVal === "adventure") {
                    goa.score = goa.score + 3;
                    hp.score = hp.score + 3;
                    meghalaya.score = meghalaya.score + 3;
                    andaman.score = andaman.score + 3;
                    maha.score = maha.score + 1;
                } else if (vibeVal === "nature") {
                    assam.score = assam.score + 3;
                    mp.score = mp.score + 3;
                    kerala.score = kerala.score + 2;
                    jk.score = jk.score + 2;
                    meghalaya.score = meghalaya.score + 2;
                    uk.score = uk.score + 2;
                } else if (vibeVal === "luxury") {
                    rajasthan.score = rajasthan.score + 4;
                    goa.score = goa.score + 3;
                    kerala.score = kerala.score + 2;
                    maha.score = maha.score + 2;
                    jk.score = jk.score + 2;
                } else if (vibeVal === "culture") {
                    wb.score = wb.score + 4;
                    rajasthan.score = rajasthan.score + 3;
                    gujarat.score = gujarat.score + 3;
                    tn.score = tn.score + 3;
                    karnataka.score = karnataka.score + 2;
                } else if (vibeVal === "food") {
                    punjab.score = punjab.score + 4;
                    wb.score = wb.score + 4;
                    gujarat.score = gujarat.score + 2;
                    maha.score = maha.score + 2;
                } else if (vibeVal === "spiritual") {
                    bihar.score = bihar.score + 4;
                    up.score = up.score + 3;
                    tn.score = tn.score + 3;
                    uk.score = uk.score + 2;
                    punjab.score = punjab.score + 2;
                } else if (vibeVal === "nightlife") {
                    goa.score = goa.score + 4;
                    maha.score = maha.score + 4;
                    karnataka.score = karnataka.score + 2;
                }

                if (budgetVal === "low") {
                    uk.score = uk.score + 2;
                    bihar.score = bihar.score + 2;
                    odisha.score = odisha.score + 2;
                    wb.score = wb.score + 2;
                    assam.score = assam.score + 2;
                    meghalaya.score = meghalaya.score + 2;
                    mp.score = mp.score + 2;
                    up.score = up.score + 2;
                } else if (budgetVal === "medium") {
                    hp.score = hp.score + 2;
                    kerala.score = kerala.score + 2;
                    tn.score = tn.score + 2;
                    karnataka.score = karnataka.score + 2;
                    punjab.score = punjab.score + 2;
                    gujarat.score = gujarat.score + 2;
                    sikkim.score = sikkim.score + 2;
                    maha.score = maha.score + 2;
                } else if (budgetVal === "high") {
                    rajasthan.score = rajasthan.score + 3;
                    andaman.score = andaman.score + 3;
                    kerala.score = kerala.score + 2;
                    jk.score = jk.score + 2;
                    goa.score = goa.score + 2;
                    maha.score = maha.score + 1;
                }

                var highestScore = -1;
                var recommendedState = "";
                var reason = "";

                for (var i = 0; i < allStates.length; i = i + 1) {
                    if (allStates[i].score > highestScore) {
                        highestScore = allStates[i].score;
                        recommendedState = allStates[i].name;
                        reason = allStates[i].message;
                    }
                }

                stateTitle.textContent = "We recommend: " + recommendedState;
                reasonText.textContent = "Why? " + reason;
                resultDiv.style.display = "block"; 
            });
        }
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


    // progress bar 
    const progressBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', function() {
       
        let scrollTop = window.scrollY;
        
       
        let docHeight = document.body.scrollHeight - window.innerHeight;
        
        let scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + "%";
    });

    