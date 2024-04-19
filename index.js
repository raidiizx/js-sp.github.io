function printEven() {
    const unlistedparagraph = document.getElementById('show').innerHTML;
    showevennum();
}

function showevennum() {
    // get n 
    let n = document.getElementById('getvalue').value;
    // create loop
    let i = 0;
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}















