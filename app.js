const notes = document.querySelectorAll(".note");
const openNotes = document.querySelectorAll(".open-note");
const noteName = document.querySelector(".note-name");
const image = document.querySelector("img");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

closeBtn.addEventListener('click', function(){
    modal.classList.add("hidden");
})

for (let note of notes) {
    note.addEventListener('click', function (e) {
        playNote(note);
        changeNoteName(e);
        changePicture(e);
    })
}

function playNote(note) {
    const noteAudio = document.getElementById(note.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    note.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        note.classList.remove('active');
    })
}

function changePicture(e) {
    if (e.target.classList.contains("e1")) {
        image.setAttribute('src', "images/e1.png")
    } else if (e.target.classList.contains("f1")) {
        image.setAttribute('src', "images/f1.png")
    } else if (e.target.classList.contains("f-sharp-1")) {
        image.setAttribute('src', "images/f-sharp-1.png")
    } else if (e.target.classList.contains("g1")) {
        image.setAttribute('src', "images/g1.png")
    } else if (e.target.classList.contains("g-sharp-1")) {
        image.setAttribute('src', "images/g-sharp-1.png")
    } else if (e.target.classList.contains("a1")) {
        image.setAttribute('src', "images/a1.png")
    } else if (e.target.classList.contains("a-sharp-1")) {
        image.setAttribute('src', "images/a-sharp-1.png")
    } else if (e.target.classList.contains("b1")) {
        image.setAttribute('src', "images/b1.png")
    } else if (e.target.classList.contains("c2")) {
        image.setAttribute('src', "images/c2.png")
    } else if (e.target.classList.contains("c-sharp-2")) {
        image.setAttribute('src', "images/c-sharp-2.png")
    } else if (e.target.classList.contains("d2")) {
        image.setAttribute('src', "images/d2.png")
    } else if (e.target.classList.contains("d-sharp-2")) {
        image.setAttribute('src', "images/d-sharp-2.png")
    } else if (e.target.classList.contains("e2")) {
        image.setAttribute('src', "images/e2.png")
    } else if (e.target.classList.contains("f2")) {
        image.setAttribute('src', "images/f2.png")
    } else if (e.target.classList.contains("f-sharp-2")) {
        image.setAttribute('src', "images/f-sharp-2.png")
    } else if (e.target.classList.contains("g2")) {
        image.setAttribute('src', "images/g2.png")
    } else if (e.target.classList.contains("g-sharp-2")) {
        image.setAttribute('src', "images/g-sharp-2.png")
    } else if (e.target.classList.contains("a2")) {
        image.setAttribute('src', "images/a2.png")
    } else if (e.target.classList.contains("a-sharp-2")) {
        image.setAttribute('src', "images/a-sharp-2.png")
    } else if (e.target.classList.contains("b2")) {
        image.setAttribute('src', "images/b2.png")
    } else if (e.target.classList.contains("c3")) {
        image.setAttribute('src', "images/c3.png")
    } else if (e.target.classList.contains("c-sharp-3")) {
        image.setAttribute('src', "images/c-sharp-3.png")
    } else if (e.target.classList.contains("d3")) {
        image.setAttribute('src', "images/d3.png")
    } else if (e.target.classList.contains("d-sharp-3")) {
        image.setAttribute('src', "images/d-sharp-3.png")
    } else if (e.target.classList.contains("e3")) {
        image.setAttribute('src', "images/e3.png")
    } else if (e.target.classList.contains("f3")) {
        image.setAttribute('src', "images/f3.png")
    } else if (e.target.classList.contains("f-sharp-3")) {
        image.setAttribute('src', "images/f-sharp-3.png")
    } else if (e.target.classList.contains("g3")) {
        image.setAttribute('src', "images/g3.png")
    }
}

function changeNoteName(e) {
    if (e.target.classList.contains("e")) {
        noteName.innerHTML = "E"
    } else if (e.target.classList.contains("f")) {
        noteName.innerHTML = "F"
    } else if (e.target.classList.contains("f-sharp")) {
        noteName.innerHTML = "F#/Gb"
    } else if (e.target.classList.contains("g")) {
        noteName.innerHTML = "G"
    } else if (e.target.classList.contains("g-sharp")) {
        noteName.innerHTML = "G#/Ab"
    } else if (e.target.classList.contains("a")) {
        noteName.innerHTML = "A"
    } else if (e.target.classList.contains("a-sharp")) {
        noteName.innerHTML = "A#/Bb"
    } else if (e.target.classList.contains("b")) {
        noteName.innerHTML = "B"
    } else if (e.target.classList.contains("c")) {
        noteName.innerHTML = "C"
    } else if (e.target.classList.contains("c-sharp")) {
        noteName.innerHTML = "C#/Db"
    } else if (e.target.classList.contains("d")) {
        noteName.innerHTML = "D"
    } else if (e.target.classList.contains("d-sharp")) {
        noteName.innerHTML = "D#/Eb"
    }

}

for (let openNote of openNotes) {
    openNote.addEventListener('click', function (e) {
        playOpenNote(openNote);
        changeNoteName(e);
        changePicture(e);
    })
}

function playOpenNote(openNote) {
    const openNoteAudio = document.getElementById(openNote.dataset.note);
    openNoteAudio.currentTime = 0;
    openNoteAudio.play();
    openNote.classList.add('active');
    openNoteAudio.addEventListener('ended', function () {
        openNote.classList.remove('active');
    })

}