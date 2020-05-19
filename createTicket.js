document.getElementById("createTicket-btn").addEventListener("click", () => {

    var yourdomain = 'rajvardhank91'; // Your freshdesk domain name. Ex., yourcompany
    let api_key = '4MXp8f9YR6TCQhSAPtR'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key
    var url = "https://" + yourdomain + ".freshdesk.com/api/v2/tickets";

    var title = document.getElementById("title").value;
    console.log(title);
    var description = document.getElementById("desc").value;
    console.log(description);
    var email = document.getElementById("email").value;
    console.log(email);

    if (title && desc && email) {
        createFreshdeskTicket(title, description, email);
    } else {
        alert('danger', 'Ticket Values cannot empty, Fill all values');
    }
});

function createFreshdeskTicket(title, description, email) {
    let api_key = '4MXp8f9YR6TCQhSAPtR';
    fetch("https://rajvardhank91.freshdesk.com/api/v2/tickets", {

        method: "POST",
        body: JSON.stringify({
            description: `${description}`,
            email: `${email}`,
            priority: 1,
            status: 2,
            subject: `${title}`
        }),
        headers: {
            Authorization: "Basic" + btoa(api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(() => {
            alert('success', 'Ticket is successfully created');
            clearInputfields();
        })
        .catch((error) => {
            console.error(error);
            alert('danger', 'Unable to create ticket');
        });
}


function clearInputfields() {
    document.getElementById("desc").value = "";
    document.getElementById("title").value = "";
    document.getElementById("email").value = "";
}