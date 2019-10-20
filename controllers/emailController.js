

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// setting for node mailer
const oauth2Client = new OAuth2(
  "194784646986-8sbfp8ls1l9nva9aqjkpif43ve9m6usu.apps.googleusercontent.com", 
  "iwRxnKk1tfiGGPzEDRlwuNu1", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

async function sendEmail(email , results){
    console.log("===============")
    console.log(email)
    console.log(results)
    console.log("===============")


    if(email){
    oauth2Client.setCredentials({
        refresh_token: "1/YJpP2be6DnDu8F7Efm6myzEipUM6Iw_7wiNY9OLaAyQ"
    });


    const tokens = await oauth2Client.refreshAccessToken()
    const accessToken = tokens.credentials.access_token

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: "muzlee1113@gmail.com", 
             clientId: "194784646986-8sbfp8ls1l9nva9aqjkpif43ve9m6usu.apps.googleusercontent.com",
             clientSecret: "iwRxnKk1tfiGGPzEDRlwuNu1",
             refreshToken: "1/YJpP2be6DnDu8F7Efm6myzEipUM6Iw_7wiNY9OLaAyQ",
             accessToken: accessToken
        }
    });

    const html_header = `<h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: black;font-size: 22px;line-height: 31px;font-family: Avenir,sans-serif;text-align: left;"><b>Recommended Movies:</b><h3><hr/>`
    const html_movieList = results.map(movie=>('<div style="text-align: left;color: #4A4A4A;font-size: 16px;">'+movie.title+'</div><div style="text-align: left;color: lightgray;font-size: 12px;">'+movie.overview+'</div></hr>'))
   

    const html_ending = `<br/>
                        <br/>
                        <div>
                            <b>Thank you for your visit!<b>
                        </div>
                        <hr/>
                        <div style="text-align: left;color: #565656;font-size: 14px;line-height: 21px;font-family: Georgia,serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);">
                            Best regards,
                        </div>
                        <div style="text-align: left;color: #565656;font-size: 14px;line-height: 21px;font-family: Georgia,serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);">
                            Yuwen
                        </div>`

    const html = html_header + html_movieList + html_ending

    console.log("===============EMAIL CONTENT===============")
    console.log(html)
    console.log("==============================")

    
    const mailOptions = {
        from: "muzlee1113@gmail.com",
        to: email,
        subject: "Recommended Movies from Movie Hunter",
        generateTextFromHTML: true,
        html: html
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
    }
}


module.exports = {
    email: function (req, res) {
    //do something
    console.log(req.body.email)
    // call send email
    sendEmail(req.body.email, req.body.results)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
    }
}  





