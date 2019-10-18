// Made to demonstrate how to use JQuery and ThecatAPI to load breed list, and show a breed image and data on selection. 

// Load all the Breeds
function getBreeds() {
  ajax_get('https://api.thecatapi.com/v1/images/search', function(data) {
    
    images(data)
  });
}

var $breed_image = $('#images');
// Put the breeds in the Select control
function images(breeds) {

  $breed_image.empty().append(function() {
    var output = '';
    $.each(breeds, function(key, value) {
      output += '<img src="'+value.url+' " cleas="img"> <p class="cat_id">"'+value.id+' "</p>';
    });
    return output;
  });
  
}
// make an Ajax request
function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// call the getBreeds function which will load all the Dog breeds into the select control
getBreeds();
