
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let now = new Date();
    let target = document.getElementById("target")

    if (now.getHours() <= 17 && now.getMinutes() < 30) {
        target.innerHTML = "Hello";
    } else {
        target.innerHTML = "Good evening";
    }

})();
