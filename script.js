function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonality(n, vectors) {
    for (let i = 0; i < n; i++) {
        let v1 = vectors[i][0];
        let v2 = vectors[i][1];
        let result = dot_product(v1, v2);
        if (result == 0) {
            console.log("The vectors are orthogonal.");
        } else {
            console.log("The vectors are not orthogonal.");
        }
    }
}

let vectors = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];
checkOrthogonality(3, vectors);