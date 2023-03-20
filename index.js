// Get the modal
function modal(id)
{
    console.log(id);
    var modal = document.getElementById("modal");
    console.log("modal");
    // Get the button that opens the modal
    var btn = document.getElementById(id);
    console.log(btn);
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
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
