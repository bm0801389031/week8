//function statment named removeEveryOther with param arr
function removeEveryOther(arr){
    //return arr property to filter with function param of (element, index)
    // {return index diviser 2 equal to 0;}
        return arr.filter(function (elem, index) {
            return index % 2 === 0;
        });
    }