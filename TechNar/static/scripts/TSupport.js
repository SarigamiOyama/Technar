function buttonOnclick(){
    // Product Inquiries Response

        print("Hello please type your technological problem Below. if there is none please type none"); 


        var pagebutton= document.getElementById("selfclick");
        pagebutton.click();


        if(input == "none", "None"){

            return "Thank you have a great day" + exit();
            

        } else {
            $(document).ready(function () {
                $('#search-term').submit(function (event) {
                    event.preventDefault();
                    var searchTerm = $('#query').val();
                    getRequest(searchTerm);
                });
            });
            
            function getRequest(searchTerm) {
                var url = 'https://www.googleapis.com/youtube/v3/search';
                var params = {
                    part: 'snippet',
                    key: 'XXXXXX',
                    q: searchTerm
                };
              
                $.getJSON(url, params, showResults);
            }
            
            function showResults(results) {
                var html = "";
                var entries = results.items;
                
                $.each(entries, function (index, value) {
                    var title = value.snippet.title;
                    var thumbnail = value.snippet.thumbnails.default.url;
                    html += '<p>' + title + '</p>';
                    html += '<img src="' + thumbnail + '">';
                }); 
                
                $('#search-results').html(html);
            }
        } 
}
