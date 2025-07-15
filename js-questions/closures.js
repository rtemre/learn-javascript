// setTimeout + Closures Interview Question 


function x() {
    // console.log("using let");
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log("let", i);

        }, i * 5000)
    }

}
x()


function x1() {
    // console.log("using var");
    for (var i = 0; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log("var", x);

            }, x * 5000)
        }
        close(i)
    }

}
x1()