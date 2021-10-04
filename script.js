function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (p <= 0 | typeof p === "undefined"){
        alert("Please Enter a positive number")
        document.getElementById("principal").focus();
    }
    var result = `<br><br>
                  if you deposit <mark>${p}</mark>, <br>
                  at an interest of <mark>${rate}%</mark>. <br>
                  You will receive an amount of <mark>${parseFloat(interest)}</mark>, <br>
                  in the year <mark>${year}</mark>.`
    document.getElementById("result").innerHTML=result
    document.getElementById("principal").focus();
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        
