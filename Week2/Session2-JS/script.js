console.log("Connected to js")

function changePic(dropdown) {
    // We use document.querySelector() to grab an element from the html document
    console.log(document.querySelector("img")) // You can use the same selectors from css to select elements
    // Ids are usually used for targeting in js
    document.querySelector("#dropdownTarget")
    document.getElementById("dropdownTarget") // The # is not needed because this function assumes you are targeting an id
    // Classes can be used as well 
    document.querySelector(".ffpic") // This will select the first item on the document that has this class

    // You can creatively use string concatonation to get the result you want sometimes

    var picSource = dropdown.value + ".jpg"; // value is basically the selection in the dropdown menu, BUT you can overwrite that by adding the value attribute to each option
    // Select the img element out of the html and save it as a variable
    var imgTarget = document.getElementById("dropdownTarget");

    // Set the new source string
    imgTarget.src = picSource;

}

// This will clear the entire document 
function clearPage(clearBtn) {

    // Select and remove the image 
    document.getElementById("dropdownTarget").remove()
    //Select and remove the button thatmakes an alert
    document.getElementById("alertBtn").remove()
    // Select and remove the dropdown menu
    document.querySelector("#dropdown").remove()
    // Select the container as a whole and make the entire screen black
    document.querySelector(".container").style.backgroundColor = "black"
    // Have the button remove itself
    clearBtn.remove()

}

