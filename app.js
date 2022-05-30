console.log("Welcome to Notes App");
showNotes();

// If user adds a note, add it to localstorage. 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let floatingTextarea2 = document.getElementById('floatingTextarea2');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else if (floatingTextarea2.textLength == 0) {
        alert('Notes can not be empty');
        button.disabled = true;
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(floatingTextarea2.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    floatingTextarea2.value = "";
    // console.log(notesObj);
    showNotes();
})
// Funtion to show elments from localstorage.
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                    <button id = "${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `;
    });

    let notesEml = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEml.innerHTML = html;
    }
    else {
        notesEml.innerHTML = `Nothing to show! Use "Add a Note" section above to add Notes`
    }
}

// Fucntion to delete node

function deleteNode(index) {
    // console.log("I am deleting", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');

search.addEventListener("input", function() {
    let inputval = search.value.toLowerCase();
    // console.log("Input Event fired",inputval);

    let notecards = document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputval)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
        // console.log(cardTxt);
    })
})