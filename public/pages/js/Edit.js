let id = localStorage.getItem("id");
alert(id);
$.ajax({
    url: `http://localhost:3000/Questions?id=${id}`,
    method:'get',
}).done((e)=>{
    alert('ok here');
    //for(let n = 0; n > stringy.length; n++)
    $('#Question').val(`${e[0].question}`);
    $('#FirstOption').val(`${e[0].firstOption}`);
    $('#SecondOption').val(`${e[0].secondOption}`);
    $('#ThirdOption').val(`${e[0].thirdOption}`);
    $('#FourthOption').val(`${e[0].fourthOption}`);
    $('#CorrectAnswer').val(`${e[0].correctAnswer}`);
});


$('#editQuestion').on('click',(e)=>{
    alert('Got Here');
    let question1 = $('#Question').val();
    let firstOption1 = $('#FirstOption').val();
    let secondOption1 = $('#SecondOption').val();
    let thirdOption1 = $('#ThirdOption').val();
    let fourthOption1 = $('#FourthOption').val();
    let correctAnswer1 = $('#CorrectAnswer').val();
    $.ajax({
        //http://localhost:3000/Questions?id=2
        url: `http://localhost:3000/Questions/${id}`,
        method: 'put',
        data: {
            question: question1,
            firstOption: firstOption1,
            secondOption: secondOption1,
            thirdOption: thirdOption1,
            fourthOption: fourthOption1,
            correctAnswer: correctAnswer1,            
        }
    }).done((e)=>{
        alert("success");
        localStorage.removeItem("id");
        window.location.replace("http://localhost:3000/pages/Home.html");
    })
});