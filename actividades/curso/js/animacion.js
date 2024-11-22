window.addEventListener("load", () => {
    //Animar chincheta1
    const chincheta1 = document.getElementById("chincheta1");
    chincheta1.style.animation = "mueveChincheta1 1s forwards";

    //Animar article1
    chincheta1.addEventListener("animationend", () => {
        const article1 = document.getElementById("article1");
        article1.style.animation = "animArticle1 0.5s forwards";

        //Animar chincheta2
        article1.addEventListener("animationend", () => {
            const chincheta2 = document.getElementById("chincheta2");
            chincheta2.style.animation = "mueveChincheta2 1s forwards";

            //Animar chincheta3
            chincheta2.addEventListener("animationend", () => {
                const chincheta3 = document.getElementById("chincheta3");
                chincheta3.style.animation = "mueveChincheta3 1s forwards";

                //Animar article3
                chincheta3.addEventListener("animationend", () => {
                    const article3 = document.getElementById("article3");
                    article3.style.animation = "animArticle3 0.5s forwards";
                });
            });
        });
    });
});