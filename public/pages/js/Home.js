//alert('we here');


let result = {};

$(document).ready((e)=>{
    let name = localStorage.getItem("name");
    if(name.length>0){
        document.getElementById("th").innerHTML = name + ' ';
    }
});//('#th')(`<h3>${name}</h3>`);
$.ajax({
    url: 'http://localhost:3000/Questions',
    method:'get',
}).done((e)=>{
    //console.log(e)
    //alert(e.toString);
    
   for(let i = 0; i< e.length; i++){
        $('#questions').append(
            `<br><div class="Second">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Options
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button id = "edt-${e[i].id}" class="dropdown-item edit-btn" type="button">Edit</button>
                    <button id = "del-${e[i].id}" class="dropdown-item delete-btn" type="button">Delete</button>
                </div>
            </div>
            <h1>${e[i].question}</h1>
            <label class="options">
                <input type="radio" name="${e[i].id}" value="${e[i].firstOption}" >${e[i].firstOption}
            </label>
            <label class="options">
                <input type="radio" name="${e[i].id}"  value="${e[i].secondOption}">${e[i].secondOption}
            </label>
            <label class="options">
                <input type="radio" name="${e[i].id}" value="${e[i].thirdOption}">${e[i].thirdOption}
            </label>
            <label class="options">
                <input type="radio" name="${e[i].id}" value="${e[i].fourthOption}">${e[i].fourthOption}
            </label>
            <input type="text" id="correct-${e[i].id}" hidden value="${e[i].correctAnswer}"/>
        </div>`
        )
   }
   $('.delete-btn').on('click',(e)=>{
    //alert(e);
    //e.preventDefault();
    
    let id = e.target.id.split("del-").join('')
    alert(id);
    $.ajax({
        url: `http://localhost:3000/Questions/${id}`,
        method:'delete',
    }).done((e)=>{
        window.location.replace("http://localhost:3000/pages/Home.html")
    })
   //<button id = "del-${e[i].id}" class = "btn btn-danger delete-btn">Delete</button>
});
$('.edit-btn').on('click',(e)=>{ 
    let id = e.target.id.split("edt-").join('');
    localStorage.setItem("id",id);
    window.location.replace("http://localhost:3000/pages/EditQuestion.html")
});

$("input[type = 'radio']").click((e)=>{
    // check if selected is correct
    let val = $(`#correct-${e.target.name}`).val();
    console.log(val);
    if (val == e.target.value){
        result[e.target.name] = 1;
        console.log(result);
        //finalR++;
    } 
    else {
        result[e.target.name] = 0;
        console.log(result);
    
    }
    //var value = $("input[name = 'gender']:checked").val();
   // console.log(finalR);
})
});
$('#submitBtn').click((e)=>{
    e.preventDefault();
    let finalR = 0;
    let u = JSON.stringify(result);
    const values = Object.values(result);
    console.log(values);
    
    for(let m = 0; m < values.length; m++){
       if(values[m] == 1){
           finalR++;
       }
    }
    alert(`Your Score is: ${finalR}`);
    window.location.reload();
});


$('#addQuestion').click((e)=>{
    e.preventDefault();
    let question = $('#Question').val();
    let firstOption = $('#FirstOption').val();
    let secondOption = $('#SecondOption').val();
    let thirdOption = $('#ThirdOption').val();
    let fourthOption = $('#FourthOption').val();
    let correctAnswer = $('#CorrectAnswer').val();
    //let options = [firstOption, secondOption,thirdOption,fourthOption]
    //let score = "[]";
    //alert(name);
    $.ajax({
        url: 'http://localhost:3000/Questions',
        method:'post',
        data: {
            question, firstOption, secondOption, thirdOption, fourthOption, correctAnswer
        }       
    }).done(
        (e)=>{
        //    for(let i = 0; i< e.length; i++){
                $('#questions').append(
                    `<br><div class="Second">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Options
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button id = "del-${e.id}" class="dropdown-item edit-btn" type="button">Edit</button>
                            <button id = "del-${e.id}" class="dropdown-item delete-btn" type="button">Delete</button>
                        </div>
                    </div>
                    <h1>${e.question}</h1>
                    <label class="options">
                        <input type="radio" name="optn" value="${e.firstOption}">${e.firstOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn" value="${e.secondOption}">${e.secondOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn" value="${e.thirdOption}">${e.thirdOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn" value="${e.fourthOption}">${e.fourthOption}
                    </label>
                </div>`
                );
                window.location.reload();
           },
        //alert("Success")
    );
    
    $('#FirstOption').val('');
    $('#SecondOption').val('');
    $('#ThirdOption').val('');
    $('#FourthOption').val('');
    $('#CorrectAnswer').val('');
    $('#Question').val('');
});
