openfullscreen.addEventListener("click", () => {
    if (musicplayer.classList.contains("open")) {
        musicplayer.classList.remove("open");
    } else {
        musicplayer.classList.add("open");
    }
})

function marquee(el, text) {
    el.replaceChildren();

    const a = document.createElement("span");
    a.textContent = text;
    el.append(a);

    if (a.offsetWidth <= el.clientWidth) return;

    a.style.paddingRight = "40px";
    const w = a.offsetWidth;
    const b = a.cloneNode(true);
    el.append(b);

    const total = (w / 30) * 1000 + 5000;

    for (const n of [a, b]) {
        n.animate(
            [
                { transform: "none", offset: 0 },
                { transform: "none", offset: 5000 / total },
                { transform: `translateX(-${w}px)` },
            ],
            { duration: total, iterations: Infinity }
        );
    }
}

marquee(htitle, song.title);
marquee(hartist, song.artist);

marquee(title, song.title);
marquee(artist, song.artist);