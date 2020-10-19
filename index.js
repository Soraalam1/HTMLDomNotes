//DOM stands for Document Object Model

// 1. This takes the element with th ID demo and fills it with the text "Hello World!"
document.getElementById("demo").innerHTML = "Hello World!";
// innerHTML property is the easiest way to get an elements content

//Other useful ways to GET elements are
// document.getElementsByTagName
// document.getElementsByClassName

//Ways to change Elements
// element.innerHTML =  new html content
// element.attribute = new value	
// element.style.property = new style	
//Method: element.setAttribute(attribute, value)	

//2. Two layer searching for elements

var textElement = document.getElementById("demo");

var realTextElement = textElement.getElementsByTagName("p");
console.log(realTextElement);
//This second method will return ONLY p tags that have the id=demo.

//3. Directly changing the output stream using document.write()

document.write(Date());
//The date method just gets the exact date of the loaded website, but we wrote to the document with it.

document.write("  This is written from javascript, not html.");

//4. Changing an attribute value
//document.getElementById(id).attribute = new value

document.getElementById("image").src = "sephiroth.png"

//We first get the image and then use the .src to change the attribute and use = to set that attribute.

//5. Changing CSS of an element
//lets try resizing our image to have a height of 500px, it is way too big

//get the element and then use .style.(edit) =  to change something

document.getElementById("image").style.height = "500px";

//it worked!


//6. Using an event

function sendAlert(message){
    alert(message);
}
//this function is called in the html file on click of the button, the onclick is an EVENT

//7. Event listener

document.getElementById("button").addEventListener("mouseover", function(){
    document.getElementById("button").style.color = "red";
    document.getElementById("button").style.fontSize = "30px"
})
//this changes the button to red on mouse hover, but oops it stays red

//so here is another one for mouse out
document.getElementById("button").addEventListener("mouseout", function(){
    document.getElementById("button").style.color = "black";
    document.getElementById("button").style.fontSize = "25px"

})

//Nodes are the pieces of an HTML document, they have parents and childs based on their relationship with each other as the page goes down.
//HTML is the root node, and it has a lot of children nodes, you can access nodes by looking for childNodes[number]
//or with .firstChild and .lastChild

//8. Removing an element

//Use a simple .remove() function
var trash = document.getElementById("trash");

trash.remove();
