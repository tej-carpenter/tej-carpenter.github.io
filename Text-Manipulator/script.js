document.getElementById("btn-uppercase-converter").addEventListener("click" , function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.toUpperCase()
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
    document.getElementById("btn-uppercase-converter").innerHTML = "CONVERTED TO UPPERCASE"
    document.getElementById("btn-lowercase-converter").innerHTML = "convert to lowercase"
})
document.getElementById("btn-lowercase-converter").addEventListener("click", function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.toLowerCase()
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
    document.getElementById("btn-uppercase-converter").innerHTML = "CONVERT TO UPPERCASE"
    document.getElementById("btn-lowercase-converter").innerHTML = "converted to lowercase"
})
document.getElementById("btn-Space-remover").addEventListener("click", function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.replaceAll(" ", "")
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
})
document.getElementById("btn-Line-Break-remover").addEventListener("click", function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.replaceAll("\n", "")
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
})
document.getElementById("btn-Number-Remover").addEventListener("click", function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.replaceAll("0", "")
    ContentHolder = ContentHolder.replaceAll("1", "")
    ContentHolder = ContentHolder.replaceAll("2", "")
    ContentHolder = ContentHolder.replaceAll("3", "")
    ContentHolder = ContentHolder.replaceAll("4", "")
    ContentHolder = ContentHolder.replaceAll("5", "")
    ContentHolder = ContentHolder.replaceAll("6", "")
    ContentHolder = ContentHolder.replaceAll("7", "")
    ContentHolder = ContentHolder.replaceAll("8", "")
    ContentHolder = ContentHolder.replaceAll("9", "")
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
})
document.getElementById("btn-clear-all").addEventListener("click", function () {
    let ContentHolder = document.getElementsByTagName("textarea").Textarea.value
    ContentHolder = ContentHolder.slice(ContentHolder.length)
    document.getElementsByTagName("textarea").Textarea.value = ContentHolder
})
