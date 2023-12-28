var speechRecognition=window.webkitSpeechRecognition

var recognition=new speechRecognition();

var textbox=$('#textbox')

var instructions=$('#instructions')


var content=''

recognition.continous=true



// recognition is started
recognition.onstart=function(){
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend=function(){
    instructions.text("No Activity")
}


recognition.error=function(){
    instructions.text("Try Again")
}

recognition.onresult=function(event){
    var current=event.resultIndex;

    var transcript=event.results[current][0].transcript;
    content+=transcript;
    textbox.val(content)
}


$("#start-btn").click(function(event){
    if(content.length){
        constent+=''
    }
    recognition.start()
})


textbox.on('input',function(){
    content=$(this).val
})