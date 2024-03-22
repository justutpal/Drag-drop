let left = document.querySelector(".left");
let right = document.querySelector(".right");
let items = document.querySelectorAll(".items");

// function for drag
let selected = null


for (const item of items) {
    item.addEventListener('touchstart', () => {
        
        selected = item
    })
}

        right.addEventListener('touchmove', (e) => {
            e.preventDefault();
        })

        right.addEventListener('touchend', (e) => {
            right.appendChild(selected);
            selected = null
        })

        left.addEventListener('touchmove', (e) => {
            e.preventDefault()
        })
        
        left.addEventListener('touchend', (e) => {
            left.appendChild(selected)
            selected = null;
        })