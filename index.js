// Get the modal
function modal(id)
{
    console.log(id);
    let modal = document.getElementById("modal");
    console.log("modal");
    // Get the button that opens the modal
    let btn = document.getElementById(id);
    console.log(btn);
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    span.onclick=function(){
        modal.style.display="none";
    }
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

function fileupload()
{
    let modal = document.getElementById("filecreation");
    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[1];
    span.onclick=function(){
        modal.style.display="none";
    }
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function starred(id)
{
    console.log("inside");
    // let check=document.style.getElementsByClassName("star");
    // console.log(check[0]);
    let ele=document.getElementById(id);
    let parent=ele.parentElement;
    console.log(parent);
    // console.log(ele.style.fill);
    if(ele.style.fill=="white")
    {
        console.log("insideeee");
        ele.style.fill="rgb(255, 238, 0)"; //changing color to yellow starring data
        // var admin=document.getElementById("starred_data");
        // admin.innerHTML += `<p>dat addeddddd</p>`;
    }
    else
    {
        ele.style.fill="white";
    }
    event.stopPropagation();
}