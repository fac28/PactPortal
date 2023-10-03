// const { layout } = require('./layout.js');

// function UserProfile(req, res) {
//     const title = 'My Account';
//     const content = /*html*/ `
//     <div>
//     <h1>${title}</h1>

//       <form method="POST" class="Row">
      
//         <label for="username">Username</label>
//         <input type="text" id="username" name="username" required>
      
             
//       <label for="imageURL">Upload a Photo</label>
//       <input type="text" id="imageURL" name="imageURL">

//       <label for="bio">Describe your powers</label>
//       <input type="text" id="bio" name="bio">

     

//       <button class="Button">Update Profile</button>
//     </form>
//     <button class="Button">Delete Profile</button>
//   </div>
//     `;
//     const body = layout({ title, content });
//     res.send(body);
// }

// module.exports = { UserProfile };
const { layout } = require('./layout.js');
const { getUserByUsername } = require('./user.js');

function UserProfile(req, res) {
    const reqUsername = req.params.username; // Changed parameter name to reqUsername
    
    // Use getUserByUsername to fetch user data by username
    const userData = getUserByUsername(reqUsername);

    if (!userData) {
        // Handle the case where the user doesn't exist
        res.status(404).send('User not found');
        return;
    }

    // Extract user data
    const { id, username, imageURL, bio } = userData;

    const title = 'My Account';
    const content = /*html*/ `
    <div>
        <h1>${title}</h1>
        <form method="POST" action="/user/:username/update" class="Row">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required value="${username}">
            <label for="imageURL">Upload a Photo</label>
            <input type="text" id="imageURL" name="imageURL" value="${imageURL}">
            <label for="bio">Describe your powers</label>
            <input type="text" id="bio" name="bio" value="${bio}">
            <button class="Button">Update Profile</button>
        </form>
           
    </form>
    
    <form method="POST" action="/user/:username/delete">
        <button class="Button" type="submit">Delete Profile</button>
    </form>
    
    </div>
    `;

    const body = layout({ title, content });
    res.send(body);
}

module.exports = { UserProfile };
