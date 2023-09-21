



document.getElementById("input").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") {
        return;
    }
    let messageText = document.getElementById("input").value.replace("'", "’")
    let initial = parseInt(messageText)
    document.getElementById("input").value = ""
    console.log(messageText)
    
    document.getElementById("input2").addEventListener("keyup", (event) => {
        if (event.key !== "Enter") {
            return;
        }
        let status = document.getElementById("input2").value.replace("'", "’")
        document.getElementById("input2").value = ""
        console.log(messageText)

        let rate = 0
        let r2 = 0
        let ptyi = initial
        let pty = document.getElementById("PTY")
        if(status=="married" || status=="Married"){
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
            pty.innerText = "Post-Tax: " + ptyi + " dollars per year"
        }else if(status=="Single" || status=="single"){
            if(initial<=11000){
                ptyi = ptyi * .9
            }
            else if(initial>11000 && initial<=44725 ){
                rate = .12
                ptyi = ptyi - (1100 + (ptyi-11000)*rate)
            }
            else if(initial>44725 && initial<=95375 ){
                rate = .22
                ptyi = ptyi - (5174 + (ptyi-44725)*rate)
            }
            else if(initial>95375 && initial<=182100 ){
                rate = .24
                ptyi = ptyi - (16290 + (ptyi-95375)*rate)
            }
            else if(initial>182100 && initial<=231250 ){
                rate = .32
                ptyi = ptyi - (37104 + (ptyi-182100)*rate)
            }
            else if(initial>231250 && initial<=578125 ){
                rate = .35
                ptyi = ptyi - (52832 + (ptyi-231250)*rate)
            }
            else if(initial>578125){
                rate = .37
                ptyi = ptyi - (174238.25 + (ptyi-578125)*rate)
            }
            pty.innerText = "Post-Tax: " + ptyi + " dollars per year"
        }
        updateLabel(ptyi)
    });
});

function updateLabel(x) {
    let ptm = document.getElementById("PTM")
    ptm.innerText = "Post-Tax: " + ((x/12).toFixed(2)) + " dollars per month"
}
