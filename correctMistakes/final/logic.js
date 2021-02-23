//function declaration named correct with parameter string
function correct(string){
    //return string as property replace method with parameters 0 global 
    //replaced with 'O' replace method 1 global replaced with 'I'
    //replace method 5 global replaced with 'S'
        return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
    }