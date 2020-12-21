export default function flickr(cityName) {
  let key = "ec08f122c20055e992a5d35c626a2a2d";
  let request = new XMLHttpRequest(); //https://cors-anywhere.herokuapp.com/
  request.open(
    "GET",
    "https://secret-ocean-49799.herokuapp.com/http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
      key +
      "&tags=" +
      cityName +
      "&per_page=6&format=json&nojsoncallback=1",
    false
  );
  request.send();
  let status = request.status;
  if (status == 200) {
    let tgr = JSON.parse(request.response);
    let s = "";
    for (let i = 0; i < tgr.photos.photo.length; i++) {
      let photo = tgr.photos.photo[i];
      let t_url =
        "http://farm" +
        photo.farm +
        ".static.flickr.com/" +
        photo.server +
        "/" +
        photo.id +
        "_" +
        photo.secret +
        "_" +
        "m.jpg";
      let p_url =
        "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
      s +=
        '<a href="' +
        p_url +
        '">' +
        '<img alt="' +
        photo.title +
        '"src="' +
        t_url +
        '"/>' +
        "</a>";
    }
    info.innerHTML += `
      <div id="photos">
      <h2>Flickr photos:</h2>
      ${s}
      <div>`;
  }
}
