function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var sname = document.forms["myForm"]["sname"].value;
    var link = document.forms["myForm"]["link"].value;
    if (name == null || name == "") {
        alert("Name must be filled out.");
        return false;
    }
    if (sname == "" || sname == null) {
        alert("Shelter must be filled out.")
        return false;
    }
    if (link == "" || link == null) {
        alert("Please add a link to your website.")
        return false;
    }
}