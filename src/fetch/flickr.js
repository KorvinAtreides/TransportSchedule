export default function flickr( cityName ) {
    let key = "ec08f122c20055e992a5d35c626a2a2d";
     fetch('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+cityName+'&per_page=5&format=json&nojsoncallback=1', {
        method: "GET",
      mode: "no-cors"  })
  
    //.then(function(resp){    return resp.json()}  )
     .then(function(data) {
       console.log(data);});
    //fetch('https://farm'+id+'.staticflickr.com/'+servId+'/'+id+'_'+secret+'.jpg')
  
}