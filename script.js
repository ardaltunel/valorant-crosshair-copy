function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");
    //alert("Crosshair kodu kopyalandı: " + copyText.value);
}
