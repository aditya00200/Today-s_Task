function saveNotes() {
    let editableTexts = document.getElementsByClassName("editable_text");
    let notesArray = [];

    for (let i = 0; i < editableTexts.length; i++) {
        notesArray.push(editableTexts[i].innerHTML);
    }

    localStorage.setItem("savedNotes", JSON.stringify(notesArray));
}

function createNote(content = "") {
    let notes = document.getElementById("notes");
    let n = document.createElement("div");
    n.classList.add('note_content');
    n.innerHTML = `
        <p contenteditable="true" class="editable_text">${content}</p>
        <button class="delete_btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#black">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    `;

    let editable = n.querySelector(".editable_text");
    editable.addEventListener("input", () => {
        saveNotes();
    });


    let delBtn = n.querySelector(".delete_btn");
    delBtn.addEventListener("click", () => {
        n.remove();
        saveNotes();
    });

    notes.prepend(n);
}

window.addEventListener("DOMContentLoaded", () => {
    let saved = localStorage.getItem("savedNotes");

    if (saved) {
        let notesArray = JSON.parse(saved);
        for (let i = 0; i < notesArray.length; i++) {
            createNote(notesArray[i]);
        }
    }
});

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    createNote(); 
    saveNotes();  
});

