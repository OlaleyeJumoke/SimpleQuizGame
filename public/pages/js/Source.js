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
                    break;
                    alert("user already exist with ${e[j].email}");
                    window.location.replace("./pages/Register.html");
                }
                else{
                    $.ajax({
                        url: 'http://localhost:3000/Users',
                        method:'post',
                        data: {
                            name, email, password, score
                        }       
                    }).done((e)=>{alert("Success");
                    localStorage.setItem("name", name);
                    //localStorage.getItem("name");
                    window.location.replace("./pages/Home.html");
                    });
                    $('#Name').val('');
                    $('#Email').val('');
                    $('#Password').val('');
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
        }).done((e)=>{alert("Success");
        for(let i = 0; i < e.length; i++){
            if(email == e[i].email && password == e[i].password){
                alert(e[i]);
                localStorage.setItem("name", e[i].name);
                window.location.replace("./pages/Home.html");
            }
            else{
                alert('Invalid Login details');
                window.location.replace("./pages/index.html");
            }
        }
    });
        $('#Email').val('');
        $('#Password').val('');
    }
});





    // $.ajax({
    //     url: 'http://localhost:3000/customers',
    //     method:'get',
    // }).done(e=>{
    //     console.log(e)
    //    // alert(e.toString)
    //    for(let i = 0; i< e.length; i++){
    //         $('#tbody').append(
    //             `<tr>
    //                 <td>
    //                 ${(i + 1)}
    //                 </td>
    //                 <td>
    //                     ${e[i].name}
    //                 </td>
    //                 <td>
    //                     ${e[i].age}
    //                 </td>
    //                 <td>
    //                     ${e[i].address}
    //                 </td>
    //                 <td>
    //                     ${e[i].rating}
    //                 </td>
    //                 <td>
    //                 <button id = "del-${e[i].id}" class = "btn btn-danger delete-btn">Delete</button></td>
    //             </tr>`
    //         )
    //    }
       
    // })

    // 

    //     })
   // })
