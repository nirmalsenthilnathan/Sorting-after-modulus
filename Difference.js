var a = [20, 8, 1, 10, 19],
    b=[]
function indexOfMax(a,b) {
    var max_val = []
    i = []
    var x = a.map(function (item, index) {
        return Math.abs(item - b[index]);
    })

    console.log(x);

    function indexOfMax(x, a) {
        let max_index = x.indexOf(Math.max(...x));
        // console.log(max_index);
        x.splice(max_index, 1);
        return max_index
    }

    for (var j = 0; j < 3; j++) {
        i.push(indexOfMax(x, a))
    }
    // console.log(i);
    max_val.push(a[i[0]])
    if (i[0] < i[1] || i[0] == i[1]) {
        max_val.push(a[i[1] + 1])
        if (i[1] < i[2] || i[1] == i[2]) {
            max_val.push(a[i[2] + 2])
        }
        else{
            if (i[0] < i[2] || i[0] == i[2]){
                max_val.push(a[i[2]+1])
            } else {
                max_val.push(a[i[2]])
            }
        }
    }
    else {
        max_val.push(a[i[1]])
        if ((i[0]-1) < i[2] || (i[0]-1) == i[2]) {
            max_val.push(a[i[2] + 2])
        }
        else{
            if (i[1] < i[2] || i[1] == i[2]){
                max_val.push(a[i[2]+1])
            } else {
                max_val.push(a[i[2]])
            }
        }
    }/*
    if (i[1] <= i[2] && i[0] <= i[2]) {
        max_val.push(a[i[2] + 2])
    } else if (i[1] > i[2] && i[0] > i[2]) {
        max_val.push(a[i[2]])
    } else {
        max_val.push(a[i[2]+1])
    }*/
    // console.log(max_val);
    // console.log(x);
    return max_val
}

function iter() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`Enter the number : `, (name) => {
        d=name
        for (var j = 0; j < 5; j++) {
            b.push(d)
            }
        max_val=indexOfMax(a,b);
        console.log('Farthest values from difference list are',);
        console.log(max_val);
    })
}

iter()