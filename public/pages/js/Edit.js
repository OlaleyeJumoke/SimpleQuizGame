let id = localStorage.getItem("id");
alert(id);
e.preventDefault();
$.ajax({
    url: `http://localhost:3000/Questions?id=${id}`,
    method:'get',
}).done((e)=>{
    alert(e);
    $('#Question').val(`${e.question}`);
    $('#FirstOption').val(`${e.firstOption}`);
    $('#SecondOption').val(`${e.secondOption}`);
    $('#ThirdOption').val(`${e.thirdOption}`);
    $('#FourthOption').val(`${e.fourthOption}`);
    $('#CorrectAnswer').val(`${e.correctAnswer}`);
})

let question = $('#Question').val();
let firstOption = $('#FirstOption').val();
let secondOption = $('#SecondOption').val();
let thirdOption = $('#ThirdOption').val();
let fourthOption = $('#FourthOption').val();
let correctAnswer = $('#CorrectAnswer').val();
$.ajax({
    url: `http://localhost:3000/Questions/${id}`,
    method:'patch',
    data: {
        
    }
}).done((e)=>{
    
})