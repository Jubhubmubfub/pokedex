$(document).ready(function(){

  //this generates the images adn attaches the API location to it's data-alt-src
  for (var i =1;i<152;i++){
    $('#wrapper').append(function(){
      var html_str = "";
      html_str += "<img src='http://pokeapi.co/media/img/"+i+".png' "+"alt='pokemon "+i+"' ";
      html_str += "data-alt-src='http://pokeapi.co/api/v2/pokemon/"+i+"/'>"
      return html_str;
    });
  }

// link for pokemon api data
// http://pokeapi.co/api/v2/pokemon/1/

  $('#wrapper').on('click','img',function(){
    console.log("You clicked");
    $.get($(this).attr('data-alt-src'),function(res){
      console.log(res);
      var poke_str = "";
      poke_str += "<h1>"+res.name+"</h1>";
      poke_str += "<img src='http://pokeapi.co/media/img/"+res.game_indices[0].game_index+".png' alt='pokemon'>";
      poke_str += "<h2>Types</h2>";
      poke_str += "<ul>";
      for (var i = 0; i < res.types.length;i++){
        poke_str+= "<li>"+res.types[i].type.name+"</li>";
      }
      poke_str += "</ul>";
      poke_str += "<h2>Height</h2>";
      poke_str += "<p>"+res.height+"</p>";
      poke_str += "<h2>Weight</h2>";
      poke_str += "<p>"+res.weight+"</p>";


      $("#pokedex").html(poke_str);
    },'json');

  })

  // $.get('http://pokeapi.co/api/v2/pokemon/1/',function(rem){
  //   console.log(rem);
  //
  // },'json')

  //this click function brings json data about a clicked pokemon into the pokedex
  // $('#wrapper').on('click','img',function(){
  //   var x = $(this).attr('data-alt-src');
  //   $get.(x,function(res){
  //     console.log(res)
  //
  //   },'json')
  //   console.log(x);
  //   $('#pokedex img').attr('src',x);
  //
  // })//end click function

});
