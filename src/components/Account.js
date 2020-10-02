import React from 'react';
import '../styles/Account.css';
import '../styles/NewPost.css';
import '../styles/App.css';



class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state={}

        
    }
    phoneSubmit() {
        var phoneNumber = document.getElementById('phoneNumber').value
        console.log(phoneNumber)
        
        // Download the helper library from https://www.twilio.com/docs/node/install
        // Your Account Sid and Auth Token from twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const accountSid = 'AC51f4066216500079216089aee41dc87a';
        const authToken = '6583fc314fd61ccf1a2a234cc0dbc4db';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({body: 'Hi there!', from: '+2183878268', to: '+'+phoneNumber})
            .then(message => console.log(message.sid));
    }

    render() {
        return(
            <div className="centered">

                <div>
                    Phone #: <input className="phoneNumber" placeholder="Enter Phone Number.." id='phoneNumber'></input>
                </div>
                <div className="postButton" onClick={(event) => this.phoneSubmit(event)}>
                    Submit
                </div>
            </div>
        )

    }
}
export default Account;