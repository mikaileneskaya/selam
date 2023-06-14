function show1() {
    const selam = document.querySelector(".selam");
    selam.style.display = "none";

    const div1 = document.querySelector(".div1");
    div1.style.display = "block";
}

function show2() {
    const div1 = document.querySelector(".div1");
    div1.style.display = "none";

    const div2 = document.querySelector(".div2");
    div2.style.display = "block";
}

function show3() {
    const div2 = document.querySelector(".div2");
    div2.style.display = "none";

    const div3 = document.querySelector(".div3");
    div3.style.display = "block";
}

function show4() {
    const div3 = document.querySelector(".div3");
    div3.style.display = "none";

    const div4 = document.querySelector(".div4");
    div4.style.display = "block";
}

function show5() {
    const div4 = document.querySelector(".div4");
    div4.style.display = "none";

    const div5 = document.querySelector(".div5");
    div5.style.display = "block";
}

function yonlendir() {
    console.log(":(");
    alert("bu sayfa sizin için değil, geri yönlendiriyorum.");
    window.location.href = "https://www.google.com/search?q=normal+bir+insan";
}

function sonunda() {
    console.log(":))");
    window.location.href = "https://www.mikaileneskaya.com/#contact"; //normalde burada wp.me/+90 numaram ekliydi :D
}

function anormal() {
    alert("bu sayfa asla sizin için değil, geri yönlendiriyorum.");
    window.location.href = "https://www.google.com/search?q=anormal+bir+insan&oq=anormal+bir+insan";
}
