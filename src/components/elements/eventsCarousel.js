import gsap from 'gsap';
const items = document.querySelectorAll(".item");

const expand = (item, i) => {
    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });
    gsap.to(items, {
        width: item.clicked ? "15vw" : "8vw",
        duration: 1,
        ease: "power2"
    });

    item.clicked = !item.clicked;
    gsap.to(item, {
        width: item.clicked ? "42vw" : "15vw",
        duration: 1,
        ease: "power2"
    });
};

items.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener("click", () => expand(item, i));
});
