// Output the copyright year (the current year) in the footer's first paragraph
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

// Output the date the document was last modified in the second paragraph
const text = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${text}`;

