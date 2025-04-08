const WINDOWS_DOWNLOAD_URL = "https://github.com/OpenATBP/OpenATBPClient/releases/download/1.1/OpenATBPClient-Windows-Installer-1.1.0.exe";
const MAC_DOWNLOAD_URL = "https://github.com/OpenATBP/OpenATBPClient/releases/download/1.1/OpenATBPClient-MacOS-1.1.0.dmg";

const windowsDownloadBtn = document.getElementById("windows-download");
const macDownloadBtn = document.getElementById("mac-download");

if (windowsDownloadBtn) windowsDownloadBtn.href = WINDOWS_DOWNLOAD_URL;
if (macDownloadBtn) macDownloadBtn.href = MAC_DOWNLOAD_URL;