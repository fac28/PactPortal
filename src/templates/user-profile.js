const { layout } = require('./layout.js');
const { getUserByUsername } = require('../model/user.js');

function UserProfile(req, res) {
    const reqUsername = req.params.username; 
    
    // Use getUserByUsername to fetch user data by username
    const userData = getUserByUsername(reqUsername);

    if (!userData) {
        // Handle the case where the user doesn't exist
        res.status(404).send('User not found');
        return;
    }

    // Extract user data
    const { username, imageURL, bio } = userData;

    const title = 'My Account';
    const content = /*html*/ `
    <div>
        <h1>${title}</h1>
             <form method="POST" class="Row">
            <h2>${username}</h2>
            <label for="imageURL">Image URL:</label>
            <input type="text" id="imageURL" name="imageURL" value="${imageURL}">
            <label for="bio">Your Bio:</label>
            <input type="text" id="bio" name="bio" value="${bio}">
            <button class="Button">Update Profile</button>
        </form>
           
    </form>
    
    <form method="POST" class="Row">
        <button class="Button" type="submit">Delete Profile</button>
    </form>
    
    </div>
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { UserProfile };
