const img1 = document.querySelector('#avatar1')
const input = document.getElementById('image-selector')
img1.addEventListener('click', () => input.click())
input.addEventListener('change', updateImage)

// event listeners for sidebar
document.getElementById("pdsb").addEventListener('click', () => selectView(1))
document.getElementById("asb").addEventListener('click', () => selectView(2))
document.getElementById("rsb").addEventListener('click', () => selectView(3))
document.getElementById("ssb").addEventListener('click', () => selectView(4))

function updateImage() {
    if (!input.files || !input.files[0]) {
        return
    }
    let FR = new FileReader()
    FR.addEventListener('load', (e) => {
        img1.src = e.target.result
    })
    FR.readAsDataURL(input.files[0])

}

view1.addEventListener("submit", function(event) {
    event.preventDefault()
    selectView(2)
})
view2.addEventListener("submit", function(event) {
    event.preventDefault()
    selectView(3)
})
view3.addEventListener("submit", function(event) {
    event.preventDefault()
    selectView(4)
})
view4.addEventListener("submit", function(event) {
    event.preventDefault()
    
})


function selectView(view) {
    switch (view) {
        case 1:
            // make everything hidden except view1
            // hide view2
            // remove display class
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            // hide view3
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            // show view1
            document.getElementById("view1").classList.remove("hidden")
            document.getElementById("view1").classList.add("block")
            break;
        case 2:
            // make everything hidden except view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            // hide view3
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            // show view1
            document.getElementById("view2").classList.remove("hidden")
            document.getElementById("view2").classList.add("block")
            break;
        case 3:
            // make everything hidden except view3
            // hide view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            // hide view3
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            // show view1
            document.getElementById("view3").classList.remove("hidden")
            document.getElementById("view3").classList.add("block")
            break;
        case 4:
            // make everything hidden except view1
            // hide view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            // hide view3
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            // hide view4
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            // show view1
            document.getElementById("view4").classList.remove("hidden")
            document.getElementById("view4").classList.add("block")
            break;
        default:
            break;
    }

}

