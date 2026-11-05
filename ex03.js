
function repeat(times) {
    console.log(String(times));

    if (times === 0) {
        console.log("Time's up!");
        return;
    }

    setTimeout(() => {
        repeat(times - 1);
    }, 1000);
}

repeat(5);
