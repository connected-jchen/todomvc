console.log('script begins');

// ================================================

setTimeout(() => {
    console.log('output from setTimeout - 1');
});

Promise.resolve().then(() => {
    console.log('output from Promise.resolve - 1');
});

process.nextTick(() => {
    console.log('output from process.nextTick - 1');
});

// ================================================

setTimeout(() => {
    console.log('output from setTimeout - 2');
});

Promise.resolve().then(() => {
    console.log('output from Promise.resolve - 2');
});

process.nextTick(() => {
    console.log('output from process.nextTick - 2');
});

// ================================================

setTimeout(() => {
    console.log('output from setTimeout - 3');
});

Promise.resolve().then(() => {
    console.log('output from Promise.resolve - 3');
});

process.nextTick(() => {
    console.log('output from process.nextTick - 3');
});


console.log('script ends');
