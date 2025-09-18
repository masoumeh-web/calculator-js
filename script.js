(function(){
    let display = document.querySelector("#display");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equal");

    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            if(display.value == "Error"){
                display.value = "";
                let value = e.target.defaultValue;
                display.value += value;
            }else{
                let value = e.target.defaultValue;
                display.value += value;
            }
        });
    
    equal.addEventListener("click", function(){
        if(display.value === ""){
            display.value = "Error";

        }else{
            let answer = eval(display.value);
            display.value = answer;
        }
    });    


    clear.addEventListener("click",function(){
        display.value = ""
    });

});
    
})();