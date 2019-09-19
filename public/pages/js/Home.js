//alert('we here');

let name = localStorage.getItem("name");
$('#th').html(`<h3>${name}</h3>`);
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
                <input type="radio" name="${i}">${e[i].firstOption}
            </label>
            <label class="options">
                <input type="radio" name="${i}">${e[i].secondOption}
            </label>
            <label class="options">
                <input type="radio" name="${i}">${e[i].thirdOption}
            </label>
            <label class="options">
                <input type="radio" name="${i}">${e[i].fourthOption}
            </label>
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
                            <button id = "del-${e[i].id}" class="dropdown-item edit-btn" type="button">Edit</button>
                            <button id = "del-${e[i].id}" class="dropdown-item delete-btn" type="button">Delete</button>
                        </div>
                    </div>
                    <h1>${e[i].question}</h1>
                    <label class="options">
                        <input type="radio" name="optn">${e[i].firstOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn">${e[i].secondOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn">${e[i].thirdOption}
                    </label>
                    <label class="options">
                        <input type="radio" name="optn">${e[i].fourthOption}
                    </label>
                </div>`
                )
           }
       // alert("Success")
    //windows.location.replace("")
    );
    
    $('#FirstOption').val('');
    $('#SecondOption').val('');
    $('#ThirdOption').val('');
    $('#FourthOption').val('');
    $('#CorrectAnswer').val('');
    $('#Question').val('');
});
