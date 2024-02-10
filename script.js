// Function to get the parameter from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to set the message in the input field
function setMessage(message) {
    var inputField = document.querySelector('.st-c5.st-ct.st-cu.st-cv.st-cw.st-cx.st-cy.st-cz.st-d0.st-d1.st-ba.st-c7.st-d2.st-d3.st-d4.st-d5.st-d6.st-d7.st-d8.st-d9.st-bt.st-bu.st-bv.st-da.st-bx.st-by.st-bs.st-db.st-dc.st-dd');

    if (inputField) {
        inputField.value = message;
    }
}

// Get the message parameter from the URL
var message = getParameterByName('name');

// Set the message in the input field
setMessage(message);
