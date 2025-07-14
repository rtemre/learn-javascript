function x() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);

        }, i * 5000)
    }
    console.log("closure");
    
}
x()