let left = document.querySelector(".left");
let right = document.querySelector(".right");
let items = document.querySelectorAll(".items");

// function for drag

for (const item of items) {
    item.addEventListener('dragstart', (e) => {
        
        let selected = e.target

        right.addEventListener('dragover', (e) => {
            e.preventDefault();
        })
        right.addEventListener('drop', (e) => {
            right.appendChild(selected);
            selected = null
        })
        left.addEventListener('dragover', (e) => {
            e.preventDefault()
        })
        left.addEventListener('drop', (e) => {
            left.appendChild(selected)
            selected = null;
        })
    })
}