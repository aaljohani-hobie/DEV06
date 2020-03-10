const jsName = "script.js";
const jsVersion = "1.0.0";
// First, Middle, and Last Name/ Function
function getFullNameInput() {
    var fni = document.getElementById("firstName");
    var mni = document.getElementById("middleName");
    var lni = document.getElementById("lastName");

    var firstName = fni.value;
    var middleName = mni.value;
    var lastName = lni.value;

    return { 
        firstName : firstName, 
        middleName : middleName, 
        lastName : lastName 
    };
};
// Submit/ Function
function clickedSubmitButton() {

    // log to console
    console.log(`[${jsName}] User clicked submit ... `);
	///// Output
    var outputTextTitle = document.getElementById("outputTextTitle");
    var outputText = document.getElementById("outputText");
	// NAME (first, middle, last)
    var fullnameArr = getFullNameInput();
    var firstName = fullnameArr.firstName;
    var middleName = fullnameArr.middleName;
    var lastName = fullnameArr.lastName;
    var fullname = (firstName + " " + lastName);
    var fullNameWMiddle = (firstName + middleName + lastName);
	///// output text & title
    outputTextTitle.innerText = "THE ANSWER IS:";

    outputText.innerHTML = (
        "<ul>" +
        `<li>There are <b>${firstName.length}</b> characters in your <b> first name!</b> </li>` +
		`<li>There are <b>${middleName.length}</b> characters in your<b> middle name!</b></li>` +
		`<li>There are <b>${lastName.length}</b> characters in your <b> last name!</li></b>` +
		`<li>There are <b>${fullNameWMiddle.length}</b> characters in your <b> full name! </b></li>` +
        "</ul>"
    );

    // log to console
    console.log(`[${jsName}] Output updated from input values ... `);

    // Make the Results page (reload) button visible
    document.getElementById("reloadButton").style.visibility="visible";
};