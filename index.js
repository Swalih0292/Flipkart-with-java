

function createproductcard(p){

  return '<div class="card" style="width: 18rem;">\
      <img src="'+ p.imageUrl +'" class="card-img-top" alt="...">\
      <div class="card-body">\
        <h5 class="card-title">'+ p.title +'</h5> \
        <p class="card-text">'+ p.description +'</p> \
      </div> \
    </div>'
}
  var prodects = [{
      title: '1065s',
      description: "Ampere Magnus EX booking",
      imageUrl:"https://rukminim1.flixcart.com/image/612/612/xif0q/electric-bike-scooter/i/x/c/-original-imaghfmgmqpcztna.jpeg?q=70",
      price: 77,249
  },
  
  {
      title: 'Rolex',
      description: "Analog White Dial Men's Watch-FS4795",
      imageUrl:"https://picsum.photos/id/2/200/150",
      price: 30000
  } 
  ]
  var prodcarddivs = "";


  for(var i=0; i<prodects.length; i = i+1){
    var currentprod = prodects[i]
     var prodcarddiv = createproductcard(currentprod);
    console.log(prodcarddiv);
    prodcarddivs = prodcarddivs + prodcarddiv;
  }
  document.getElementById("productscondainer").innerHTML = prodcarddivs;
