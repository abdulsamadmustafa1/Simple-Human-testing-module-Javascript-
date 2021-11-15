const checkbox1 = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disable checkbox and button

checkbox1.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("selectColor");

elements.forEach(function(element){
    const color = getRandomColor();

        element.style.backgroundColor = color;
        element.innerHTML = color;
        selectColor.innerHTML = color; 
});


//Random color

function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++)
    {
        color += letter[Math.floor(Math.random() *16)];
    }
    return color;
}


//check if right color

elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML)
        {
            checkbox1.checked = true;
            alert("You are human!");
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
        }

        else{
            alert("Please verify that you are human!");
            location.reload(true);
        }

    });
});


console.log(getRandomColor());
