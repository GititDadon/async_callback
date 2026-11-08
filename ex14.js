
function countdown(num) {
    console.log(String(num));

    if (num === 0) {
        console.log("Done!");
        return;
    }

    const delay = 500 + Math.random() * 1000;

    setTimeout(() => {
        countdown(num - 1);
    }, delay);
}

countdown(3);
