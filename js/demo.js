var max = 10;
var fn = function(x){
    if(x>max){
        console.log(x);
    }
};

(function(f){
    var max = 100;
    f(15);
})(fn);