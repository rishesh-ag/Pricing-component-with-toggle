let checkBox = document.querySelector('#checkbox');
let price = document.querySelectorAll('#price');

checkBox.addEventListener('click', function (){
    if(checkBox.checked == true){
        price[0].innerHTML = "<span>&dollar;</span>19.99";
        price[1].innerHTML = "<span>&dollar;</span>24.99";
        price[2].innerHTML = "<span>&dollar;</span>39.99";
    }
    else{
        price[0].innerHTML = "<span>&dollar;</span>199.99";
        price[1].innerHTML = "<span>&dollar;</span>249.99";
        price[2].innerHTML = "<span>&dollar;</span>399.99";
    }
});