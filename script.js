function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = `<br><br>
                  if you deposit ${p}, <br>
                  at an interest of ${rate}%. <br>
                  You will receive an amount of ${parseFloat(p) + parseFloat(interest)}, <br>
                  in the year ${year}`
    document.getElementById("result").innerHTML=result
    document.getElementById("principal").focus();
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        