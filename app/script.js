(function(){
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay");
    const drDown = document.querySelector(".nav__dr-down");
    const icnMenu = document.querySelector(".nav__burger-icn");
    const icnX = document.querySelector(".nav__x-icn");
    const greetPage = document.querySelector(".greet");
    const navHeight = nav.getBoundingClientRect().height;
    greetPage.style.height = `${window.innerHeight - 54}px`;
    function toggleDrDown(){
        drDown.classList.toggle("show");
        overlay.classList.toggle("hidden");
        icnMenu.classList.toggle("hidden");
        icnX.classList.toggle("hidden");
    }
    const revealSection = function(entries, observe){
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        if(!isIntersecting) nav.classList.add("nav--sticky"); 
        else nav.classList.remove("nav--sticky");
    }
    const aboutObserver = new IntersectionObserver(revealSection, {
        root : null,
        threshold : 0,
        rootMargin : `-${navHeight}px`
    })
    aboutObserver.observe(greetPage);
    icnMenu.addEventListener("click",toggleDrDown);
    icnX.addEventListener("click",toggleDrDown);
    overlay.addEventListener("click", toggleDrDown);
    drDown.addEventListener("click", function(e){
        const pageCoords = document.querySelector(e.target.getAttribute("href"));
        if(!e.target.classList.contains("nav__dr-down-item")) return;
        console.log(pageCoords.getBoundingClientRect().top + window.scrollY - navHeight);
        window.scrollTo({
            top :(pageCoords.getBoundingClientRect().top + window.scrollY) - navHeight,
            behavior : "smooth"
        })
        e.preventDefault();
        toggleDrDown();
    })
    document.addEventListener("scroll",function(){
        if(drDown.classList.contains("show")) toggleDrDown();
    });
})();

