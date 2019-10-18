var obj=[

        {
            id : "001",
            image : "img/c5.jpg",
            name : "fruit",
            breed : "Arabian",
            age: "6 month",
            color:"white"
        },
        {
           id : "002",
            image : "img/c5.jpg",
            name : "fruit",
            breed : "Arabian",
            age: "6 month",
            color:"white"
        },
        {
           id : "003",
            image : "img/c5.jpg",
            name : "fruit",
            breed : "Arabian",
            age: "6 month",
            color:"white"
        }
    ]
    var tbl=$("<table/>").attr("id","mytable");
    $("#div1").append(tbl);
    var th="<tr><th>Image</th> <th>Name</th> <th>Breed</th><th>Age</th><th>Color</th></tr>";
     $("#mytable").append(th); 
    for(var i=0;i<obj.length;i++)
    {//"+obj[i]["image"]+"
        var tr="<tr>";
        var td2="<td><img src='"+obj[i]["image"]+"' height='70px' width='80px'/></td>";
        var td3="<td>"+obj[i]["name"]+"</td>";
        
        var td4="<td>"+obj[i]["breed"]+"</td>";
        var td5="<td>"+obj[i]["age"]+"</td>";
        var td6="<td>"+obj[i]["color"]+"</td></tr>";

       $("#mytable").append(tr+td2+td3+td4+td5+td6); 

    } 





// Get the modal adopt page
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn_adopt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// form validation

function validateForm() {
  var name = document.forms["adoptForm"]["name"].value;
  var breed = document.forms["adoptForm"]["breed"].value;
  var age = document.forms["adoptForm"]["age"].value;
  var color = document.forms["adoptForm"]["color"].value;
  var image = document.forms["adoptForm"]["image"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }else if(breed == ""){
     alert("Breed must be filled out");
    return false;
  }
  else if(age == ""){
     alert("Age must be filled out");
    return false;
  }
  else if(color == ""){
     alert("color must be filled out");
    return false;
  }

  else if (image == ""){
     alert("image must be selected");
    return false;
  }
  else {
  	alert("data inserted succesfolly !")
  }
  
}
















