// $.ajax({
//     url: 'csv_data.csv',
//     dataType: 'text',
//   }).done(successFunction);

//   $('body').append(table);


// fetch("csv_data.csv", { headers: { "Content-Type": "text/csv" } })
//   .then(function(response) {
//     return response.txt();
//   })
//   .then(successFunction);
// document.body.appendChild(table);


//******************************GET method to fetch one or more objects ************************************/

document.addEventListener("DOMContentLoaded", () => {
    var yourdomain = 'rajvardhank91'; // Your freshdesk domain name. Ex., yourcompany
    var api_key = '4MXp8f9YR6TCQhSAPtR'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key

    fetch("https://" + yourdomain + ".freshdesk.com/api/v2/tickets", {
        headers:
        {
            "Authorization": "Basic " + btoa(api_key + ":x"),
            contentType: "application/json; charset=utf-8",
            type: 'GET',
            dataType: "json"
        }
    })
        .then(function (response) {
            //     return response.txt();
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
        })
        .catch((error) => {
            console.log(error);
        })
});