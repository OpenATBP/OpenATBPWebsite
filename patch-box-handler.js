document.getElementById('patch-notes-section').addEventListener('click', function(event) {
    if (event.target.closest('.patch-box')) {
        const patchBox = event.target.closest('.patch-box');
        const id = patchBox.id;
        window.location.href = "patch-notes/" + id + ".html";
    }
});