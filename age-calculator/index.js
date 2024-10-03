const btn=document.getElementById("btn");
const bdy=document.getElementById("birthday");
const res=document.getElementById("result");

function calculateAge()
{
    const bdyValue=bdy.value;
    if(bdyValue=="")
    {
        alert("Please enter your birth date ");
    }
    else
    {
        const age=getAge(bdyValue);
        const month=getMonth(bdyValue);
        res.innerText=`Your Age is ${age} ${age>1 ? "years" : "year"} and
                         ${month}  ${month>1 ?"months":"month" } `
    }
}

function getAge(bdyValue)
{
    const curDate= new Date();
    const birDate=new Date(bdyValue);
    let age=curDate.getFullYear() - birDate.getFullYear();
    
    if (  birDate.getFullYear() > curDate.getFullYear()) {
        alert("Please Enter Correct Date:")
      }
    return age;
}

function getMonth(bdyValue)
{
    const curDate= new Date();
    const birDate=new Date(bdyValue);
    const month=curDate.getMonth() - birDate.getMonth();
    return month;
}

btn.addEventListener("click",calculateAge);                
