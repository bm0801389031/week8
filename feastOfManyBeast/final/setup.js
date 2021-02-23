//fuction statement named feast with parameters beast and dish
function feast(beast, dish) {
    //return beast at 0 index equal to dish at 0 index [and operator]
    //beast at beast.length operator minus one[ starting from the back]
    //[equal oper] dich at dish.length index -1
        return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
    }