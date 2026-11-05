const counter = () => {
    let count = 0;
    return () => {
        count += 10;
        console.log(count);

    };
};
const result = counter();
result();
result();
result();
result();
result();