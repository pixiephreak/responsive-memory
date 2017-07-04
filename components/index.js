//client js to make api calls
//client js to make api
var users = ['trenette12', 'avohs24', 'pixiephreak'];
var profiles = {};




$('button').click(function(users){

for(var i = 0; i > users.length; i++){
    $.ajax({
      url: "https://api.github.com/users/" + users[i],
      method: 'GET'
    }).done(function(data){

      console.log(data);
    profiles = {
        name: data.name,
        repos: data.public_repos,
        followers: data.followers
      };

      console.log(profiles);
    });
  }
});
