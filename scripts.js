$(document).ready(function(){

  //this generates the images adn attaches the API location to it's data-alt-src
  for (var i =1;i<152;i++){
    $('#wrapper').append(function(){
      var html_str = "";
      html_str += "<img src='http://pokeapi.co/media/img/"+i+".png' alt='pokemon "+i+"";
      html_str += " data-alt-src='http://pokeapi.co/api/v2/pokemon/"+i+"/'>"
      return html_str;
    });
  }

  //this click function brings json data about a clicked pokemon into the pokedex
  $('#wrapper').on('click','img',function(){


  })

});
