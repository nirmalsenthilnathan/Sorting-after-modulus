var a = [12, 3, 10, 20, 25],
    b=[]
    indices=[]
    i=-1
    res = []
m=Math.min.apply(null,a)
console.log(a)
// console.log(m)

a.forEach(mod);

function mod(value, index) {
    b.push(value%m)
    // console.log(value, index)
}
console.log(b)

Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

var uniques = b.unique();
uniques = uniques.reverse(uniques.sort())
// console.log(uniques);
uniques.forEach(uniquevalues);
function uniquevalues(value, index){
    var j=[]
    while ((i = b.indexOf(value, i + 1)) !== -1) {
        indices.push(i);
        j.push(i);
    }
    // console.log(indices)
    // console.log(j.length)
    var  x=[]
    if (j.length>1){
        j.forEach(secsort);
        function secsort(value, index) {
            x.push(a[value])
        }
        x = x.reverse( x.sort(function(a, b){return a-b}))
        x.forEach(sort);
        function sort(value) {
            res.push(value)
        }
        // console.log(x)
    } else{
        x.push(a[j])
        // console.log(x)
        res.push(x[0])
    }
}

console.log(res)
