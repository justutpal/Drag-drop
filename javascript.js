let left = document.querySelector(".left");
let right = document.querySelector(".right");
let items = document.querySelectorAll(".items");

// function for drag
let selected = null


for (const item of items) {
    item.addEventListener('dragstart', () => {
        
        selected = item
    })
}

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