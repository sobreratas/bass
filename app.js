const notes = document.querySelectorAll(".note");
const openNotes = document.querySelectorAll(".open-note");

for(let note of notes){
    note.addEventListener('click', function(){
        playNote(note);
    })
}

function playNote(note){
    const noteAudio = document.getElementById(note.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    note.classList.add('active');
    noteAudio.addEventListener('ended', function(){
        note.classList.remove('active');
    })
}

for(let openNote of openNotes){
    openNote.addEventListener('click', function(){
        playOpenNote(openNote);
    })
}

function playOpenNote(openNote){
    const openNoteAudio = document.getElementById(openNote.dataset.note);
    openNoteAudio.currentTime = 0;
    openNoteAudio.play();
    openNote.classList.add('active');
    openNoteAudio.addEventListener('ended', function(){
        openNote.classList.remove('active');
    })
    
}