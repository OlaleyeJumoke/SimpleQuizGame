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
            `<div>
            <div class="Second">
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
            </div>
            <button class="dropbtn">Dropdown 
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
            </div>
            </div>
            <br>`
        )
   }
   //<button id = "del-${e[i].id}" class = "btn btn-danger delete-btn">Delete</button>
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
                    `<div class="Second">
                    <h1>${e.question}</h1>
                    <label class="options">
                    <input type="radio" name="option">${e.firstOption}
                    </label>
                    <label class="options">
                    <input type="radio" name="option">${e.secondOption}
                    </label>
                    <label class="options">
                    <input type="radio" name="option">${e.thirdOption}
                    </label>
                    <label class="options">
                    <input type="radio" name="option">${e.fourthOption}
                    </label>
                    </div>
                    <br>`
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
