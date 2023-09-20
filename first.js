



document.getElementById("input").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") {
        return;
    }
    let messageText = document.getElementById("input").value.replace("'", "’")
    let initial = parseInt(messageText)
    document.getElementById("input").value = ""
    console.log(messageText)
    
    let status = document.getElementById("input2").value.replace("'", "’")
    document.getElementById("input2").value = ""
    console.log(messageText)

    let rate = 0
    let r2 = 0
    let ptyi = initial
    let pty = document.getElementById("PTY")
    if(status.equals("married") || status.equals("Married")){
        if(initial<=22000){
            ptyi = ptyi * .9
        }
        else if(initial>22000 && initial<=89450 ){
            rate = .12
            ptyi = ptyi - (2200 + (ptyi-22000)*rate)
        }
        else if(initial>89450 && initial<=190750 ){
            rate = .22
            ptyi = ptyi - (10294 + (ptyi-89450)*rate)
        }
        else if(initial>190750 && initial<=364200 ){
            rate = .24
            ptyi = ptyi - (32580 + (ptyi-190750)*rate)
        }
        else if(initial>364200 && initial<=462500 ){
            rate = .32
            ptyi = ptyi - (74208 + (ptyi-364200)*rate)
        }
        else if(initial>462500 && initial<=693750 ){
            rate = .35
            ptyi = ptyi - (105664 + (ptyi-22000)*rate)
        }
        else if(initial>693750){
            rate = .37
            ptyi = ptyi - (2200 + (ptyi-22000)*rate)
        }
        pty.classList = []
        pty.innerText = ptyi
    }
    updateLabel()
    
});

function updateLabel() {
    let ptm = document.getElementById("ptm")
    ptm.innerText = "Post-Tax Monthly: " + ptyi/12 + " dollars per month"
}
