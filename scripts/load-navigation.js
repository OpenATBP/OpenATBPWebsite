fetch("/components/navigation.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("navigation-placeholder").innerHTML = html;
    })
    .catch(error => {
        console.error("Could not load navigation:", error);
    });