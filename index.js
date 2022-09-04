// max number function

function maxNum(...num) {
    num.sort();
    for(let i = 0; i < num.length; i++)
    {
        for(let x = 0; x < num.length; x++)
        {
            if(num[i] > num[i + 1])
            {
                return num[i];
            }
        }
    }
}

console.log(maxNum(1,2,3,4,5,6,7,69));
console.log(maxNum(8,5,3,4,2,41,0));

let btn = document.getElementById('go-now');

btn.onclick = function() {
    location.href = "";
}