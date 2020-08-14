$(document).ready(function () {
    var url = "https://randomuser.me/api/?results=10&gender=male&nat=au";
    var p = "";
    var radioValue;
    var selectedNationality;
    var loadMore;
    fetchInformation(url);
    
    //add a radio button
    
    $("input[type='radio']").click(function(){
      $("#results").empty();
      radioValue = $("input[name='gender']:checked").val();
      selectedNationality = $('#nationality :selected').text();
      
      url = "https://randomuser.me/api/?results=10&gender="+radioValue+"&nat=" + selectedNationality;
      if(radioValue){
        fetchInformation(url);
      }
    });
    
    $('#nationality').on('change', function() {
          var p = "";
          $("#results").empty();
          selectedNationality = $('#nationality :selected').text();
          url = "https://randomuser.me/api/?results=10&gender="+radioValue+"&nat=" + selectedNationality;
          fetchInformation(url);
      });
    
  
    function fetchInformation(url) {
      fetch(url)
        .then((response) => response.json())
        .then(function (data) {
          data.results.forEach((person) => {
            p = `
                  <div class="person">
                 <img src="${person.picture.medium}" class="img-rounded">
                <div class="fullname">
                 <span>${person.name.first}</span>
                 <span>${person.name.last}</span>
                 <span>(${person.nat})</span>
                </div>
                <div class="btn-style">
                 <button class="btn">Call</button>
                </div>
                 </div>`;
            console.log(p);
            $("#results").append(p);
          });
  
          loadMore = `<div class="loadmore-btn"><button id="loadmore" class="load-btn">Load More</button></div>`;
          $("#results").append(loadMore);
          $("#loadmore").on("click", function () {
            fetchInformation(url);
            $(this).remove();
          });
        });
    }
  });
  