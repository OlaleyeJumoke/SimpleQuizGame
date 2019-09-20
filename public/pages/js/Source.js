//alert("hello all");
$('#signUp').click((e)=>{
    e.preventDefault();
    let name = $('#Name').val();
    let email = $('#Email').val();
    let password = $('#Password').val();
    let score = "[]";
    alert(name);
    if(name.length > 0 && email.length > 0 && password.length > 0){
        $.ajax({
            url: 'http://localhost:3000/Users',
            method: 'get',
        }).done((e)=>{
            for(let j = 0; j < e.length; j++){
                if(e[j].email == email){
                    //break;
                    alert(`user already exist with ${e[j].email}`);
                    window.location.reload();
                    break;
                }
                else{
                    $.ajax({
                        url: 'http://localhost:3000/Users',
                        method:'post',
                        data: {
                            name, email, password, score
                        }       
                    }).done((e)=>{//alert("Success");
                    localStorage.setItem("name", name);
                    //localStorage.getItem("name");
                    window.location.replace("./Home.html");
                    });
                    $('#Name').val('');
                    $('#Email').val('');
                    $('#Password').val('');
                    break;
                }
            }
        })
    }    
});

$('#loginBtn').click((e)=>{
    e.preventDefault();
    let email = $('#Email').val();
    let password = $('#Password').val();
    if(email.length > 0 && password.length > 0){
        $.ajax({
            url: 'http://localhost:3000/Users',
            method:'get',     
        }).done((e)=>{//alert("Success");
        for(let i = 0; i < e.length; i++){
            if(email == e[i].email && password == e[i].password){
                //alert(e[i]);
                localStorage.setItem("name", e[i].name);
                window.location.replace("./Home.html");
                continue;
            }
            // else{
            //     alert('Invalid Login details');
            //     window.location.reload();
            //     break;
            // }
        }
        });
        $('#Email').val('');
        $('#Password').val('');
    }
    else{
        alert("Fields cannot be left empty");
    }
});

