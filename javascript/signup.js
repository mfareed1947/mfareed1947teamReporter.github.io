
function saveData()
{
let usname,email,paswd;

usname=document.getElementById("usname").value;
email=document.getElementById("email").value;
paswd=document.getElementById("paswd").value;

let user_record=new Array();
user_record=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

if(user_record.some((v)=>{return v.email==email}))
{
    alert("this user is already exist")
}else{
    user_record.push({
        "name":usname,
        "email":email,
        "password":paswd
    })
    localStorage.setItem("user",JSON.stringify(user_record));

}
}
