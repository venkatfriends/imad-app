//console.log('Loaded!');
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done Yet
    }
    
    //Make the request
   request.open('GET','http://venkatfriends.imad.hasura-app.io/counter', true);
   request.send(null);    
};


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var nameInput = document.getElementById('name');
var name= nameInput.value;
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
               var names = request.responseText;
               names = JSON.parse(names);
               var list = '';
               for (var i=0; i< names.length; i++){
                   list += '<li>' + names[i] + '</li>';
               }
               var ul = document.getElementById('namelist');
               ul.innerHTML = list;
            }
        }
        //Not done Yet
    }
    
    //Make the request
   request.open('GET','http://venkatfriends.imad.hasura-app.io/submit-name?name=' + name, true);
   request.send(null); 
    
    
}