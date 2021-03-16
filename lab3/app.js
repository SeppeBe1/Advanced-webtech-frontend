class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);
    }

    createElement(title) {
        let newNote = document.createElement("li");

        // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));


        return newNote;
    }

    add() {
        // HINT🤩
        // this function should append the note to the screen somehow
        let taskList = document.getElementById("taskList");
        taskList.appendChild(newNote);
        console.log("yee");
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify
    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        // .removeChild(this)
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");

        this.txtTodo = document.getElementById("taskInput");

        //listens to textfield if a key is pressed inside
        //.bind lets us use this in methods
        this.txtTodo.addEventListener("keyup", this.createNote.bind(this));

        // read up on .bind() -> we need to pass the current meaning of this to the eventListener
        // when the app loads, we can show previously saved noted from localstorage
        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        // HINT🤩
        // load all notes from storage here and add them to the screen
    }

    createNote(e) {
        e.preventDefault();
        const ENTER = 13;

        if (e.keyCode == ENTER) {
            console.log("Het maakt aan");
            //new note creating
            let newNote = new Note(this.txtTodo.value);

            //adding after // append other notes
            //newNote.add();
            // newNote.saveToStorage();

            //clear textfield
            // newNote.reset();
        }

    }

    reset() {
        // this function should reset the form / clear the text field
    }
}

let app = new App();