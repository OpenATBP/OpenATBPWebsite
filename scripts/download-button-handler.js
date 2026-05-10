const WINDOWS_DOWNLOAD_URL = "https://github.com/OpenATBP/OpenATBPClient/releases/download/1.1/OpenATBPClient-Windows-Installer-1.1.0.exe";
const MAC_DOWNLOAD_URL = "https://github.com/OpenATBP/OpenATBPClient/releases/download/1.1/OpenATBPClient-MacOS-1.1.0.dmg";
const RELEASES_URL = "https://github.com/OpenATBP/OpenATBPClient/releases";

const downloadButton = document.getElementById("download-button");

function getUserOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    if (userAgent.includes("windows") || platform.includes("win")) {
        return "windows";
    }

    if (
        userAgent.includes("mac os") ||
        userAgent.includes("macintosh") ||
        platform.includes("mac")
    ) {
        return "mac";
    }

    return "unknown";
}

if (downloadButton) {
    downloadButton.addEventListener("click", function(event) {
        event.preventDefault(); // prevents default link to github

        const os = getUserOS();

        if (os === "windows") {
            window.location.href = WINDOWS_DOWNLOAD_URL;
        } else if (os === "mac") {
            window.location.href = MAC_DOWNLOAD_URL;
        } else {
            window.location.href = RELEASES_URL;
        }
    });
}