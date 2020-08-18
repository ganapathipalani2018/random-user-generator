$(document).ready(function () {
  var url = "https://randomuser.me/api/?results=12&gender=male&nat=au";
  var p = "";
  fetchInformation(url); 

  function fetchInformation(url) {
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        data.results.forEach((person) => {
          p = `
                <div class="person">
               <img src="${person.picture.large}" class="person__img">
              <div class="person__fullname">
               <span>${person.name.first}</span>
               <span>${person.name.last}</span>
               <span>(${person.nat})</span>
              </div>
              <div class="person--btn">
               <button>Call</button>
              </div>
               </div>`;
          console.log(p);
          $("#results").append(p);
        });
      });
  }
});
