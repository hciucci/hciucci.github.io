const doStuff = () =>{
    alert("Hello... world.. ig")
};

const myButton = document.getElementById("bt-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("Special");
};

//Add a second button called say goodbye
//when clicked change the text to goodbye, everyone, and remove the special styles