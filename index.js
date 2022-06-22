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
    // password must include capital letter, small letter, number and symbol
    let password = document.querySelector("input[type='password']").value
    console.log(password)
    // use regular expression to check
    let passwordPattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    let passed = passwordPattern.test(password)
    if(!passed){
        alert("Password must contain number, symbol, capital letter and small letter")
        return
    }
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
    // event.preventDefault()
    selectView(1)
})


function selectView(view) {
    switch (view) {
        case 1:
            // make everything hidden except view1
            // hide view2
            // remove display class
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            document.getElementById("asb").classList.remove("bold")
            document.getElementById("asb").classList.add("normal-text")

            // hide view3
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            document.getElementById("rsb").classList.remove("bold")
            document.getElementById("rsb").classList.add("normal-text")

            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            document.getElementById("ssb").classList.remove("bold")
            document.getElementById("ssb").classList.add("normal-text")

            // show view1
            document.getElementById("view1").classList.remove("hidden")
            document.getElementById("view1").classList.add("block")
            document.getElementById("pdsb").classList.add("bold")
             document.getElementById("pdsb").classList.remove("normal-text")
            break;
        case 2:
            // make everything hidden except view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            document.getElementById("pdsb").classList.remove("bold")
            document.getElementById("pdsb").classList.add("normal-text")

            // hide view3
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            document.getElementById("rsb").classList.remove("bold")
            document.getElementById("rsb").classList.add("normal-text")

            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            document.getElementById("ssb").classList.remove("bold")
            document.getElementById("ssb").classList.add("normal-text")

            // show view1
            document.getElementById("view2").classList.remove("hidden")
            document.getElementById("view2").classList.add("block")
            document.getElementById("asb").classList.add("bold")
            document.getElementById("asb").classList.remove("normal-text")

            break;
        case 3:

            // make everything hidden except view3
            // hide view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            document.getElementById("pdsb").classList.remove("bold")
            document.getElementById("pdsb").classList.add("normal-text")

            // hide view3
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            document.getElementById("asb").classList.remove("bold")
            document.getElementById("asb").classList.add("normal-text")

            // hide view4
            document.getElementById("view4").classList.remove("block")
            document.getElementById("view4").classList.add("hidden")
            document.getElementById("ssb").classList.remove("bold")
            document.getElementById("ssb").classList.add("normal-text")

            // show view1
            document.getElementById("view3").classList.remove("hidden")
            document.getElementById("view3").classList.add("block")
            document.getElementById("rsb").classList.add("bold")
            document.getElementById("rsb").classList.remove("normal-text")

            reviewNameForView3()
            reviewEmailForView3()
            reviewAddressForView3()

            break;
        case 4:
            // make everything hidden except view1
            // hide view2
            // remove display class
            document.getElementById("view1").classList.remove("block")
            document.getElementById("view1").classList.add("hidden")
            document.getElementById("pdsb").classList.remove("bold")
            document.getElementById("pdsb").classList.add("normal-text")

            // hide view3
            document.getElementById("view2").classList.remove("block")
            document.getElementById("view2").classList.add("hidden")
            document.getElementById("asb").classList.remove("bold")
            document.getElementById("asb").classList.add("normal-text")

            // hide view4
            document.getElementById("view3").classList.remove("block")
            document.getElementById("view3").classList.add("hidden")
            document.getElementById("rsb").classList.remove("bold")
            document.getElementById("rsb").classList.add("normal-text")

            // show view1
            document.getElementById("view4").classList.remove("hidden")
            document.getElementById("view4").classList.add("block")
            document.getElementById("ssb").classList.add("bold")
            document.getElementById("ssb").classList.remove("normal-text")

            
            break;
        default:
            break;
    }

}



//  let email = document.getElementById('email').value
// let state = document.getElementById('state').value
// let street1 = document.getElementById('street1').value
// let street2 = document.getElementById('street2').value

// function getval() {
//    
//     console.log(main)
// }
function reviewNameForView3() {
    let main = document.getElementById("name").value;
    let reviewname = document.getElementById("name-string");
     reviewname.textContent = `Name : ${main}`;  
}
function reviewEmailForView3() {
    let email = document.getElementById("email").value;
    let reviewemail = document.getElementById("email-string");
     reviewemail.textContent = `Email : ${email}`;  
}

function reviewAddressForView3() {
    let state = document.getElementById("state").value
    let street1 = document.getElementById("street1").value
    let street2 = document.getElementById("street2").value
    let reviewAddress = document.getElementById("address-string");
    reviewAddress.textContent = `Address : ${street1}, ${state}`;
}