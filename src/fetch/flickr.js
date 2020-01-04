export default function flickr( cityName ) {
    let key = "ec08f122c20055e992a5d35c626a2a2d";
    let request = new XMLHttpRequest();
    request.open("GET", 'https://cors-anywhere.herokuapp.com/http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+cityName+'&per_page=6&format=json&nojsoncallback=1', false);
    request.send();
    let status = request.status;
    if(status==200){
      let tgr = JSON.parse(request.response)
      console.log(tgr.photos);
      let s="";
      for (let i=0; i < tgr.photos.photo.length; i++) {
        let photo = tgr.photos.photo[i];
        let t_url = "http://farm" + photo.farm + ".static.flickr.com/" + 
          photo.server + "/" + photo.id + "_" + photo.secret + "_" + "m.jpg";
        let p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
       s +=  '<a href="' + p_url + '">' + '<img alt="'+ photo.title + 
          '"src="' + t_url + '"/>' + '</a>';
      }
      let info = document.getElementById("info");
      info.innerHTML += `
      <div id="photos">
      <h2>Flickr photos:</h2>
      ${s}
      <div>`;
    }

     //fetch('http://api.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback=?', {
      //  method: "POST",
     // mode: "no-cors"  })
  
    //.then(function(resp){    return resp.json()}  )
     //.then(function(data) {
     //  console.log(data);});
    //fetch('https://farm'+id+'.staticflickr.com/'+servId+'/'+id+'_'+secret+'.jpg')
  
}
//'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+cityName+'&per_page=5&format=json&nojsoncallback=1'