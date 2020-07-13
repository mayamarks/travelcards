document.querySelector("#submitNewDestination").addEventListener("submit", submitForm);


function submitForm(event) {
 
event.preventDefault();
  
    //save values from the form
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDescr = event.target.elements["description"].value;

    resetFormValues(event.target);

    var destinationCard = newCard(
        destName,
        destLocation,
        destPhoto,
        destDescr
      );

      document.querySelector("#cards").appendChild(destinationCard);
}

function resetFormValues(form) {
    
    for (var i = 0; i < form.length; i++) {
      form.elements[i].value = "";
    }
  }

function newCard(name, location, photoLink, description) {
var card = document.createElement("div");
card.setAttribute("class", "card");
  card.style.width = "18rem";
  card.style.height = "fit-content";
  card.style.margin = "20px;";
/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
  var img = document.createElement("img");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", name);

  var noImage = "https://media.gq.com/photos/5cbf2cddf31e12353e329b48/master/pass/air-travel-fashion-drops-gq-may-2019-rimowa-lede.jpg";
  if (photoLink.length === 0) {
    img.setAttribute("src", noImage);
  } else {
    img.setAttribute("src", photoLink)
  } 
  card.appendChild(img);  


var cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");

var cardTitle = document.createElement("h4")
cardTitle.setAttribute("class", "card-title");
cardTitle.innerText = name;
cardBody.appendChild(cardTitle)

var cardLocation = document.createElement("h5");
  cardLocation.setAttribute("class", "card-subtitle");
  cardLocation.innerText = location;
  cardBody.appendChild(cardLocation);

var cardDescr = document.createElement("p");
  cardDescr.setAttribute("class", "card-text");
  cardDescr.innerText = description;
  cardBody.appendChild(cardDescr) ;


card.appendChild(cardBody);
  return card;
}





