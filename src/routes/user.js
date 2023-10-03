// /* eslint-disable no-unused-vars */
// const { editUser } = require('../model/user.js');
// const { deleteUser } = require('../model/user.js');

// const UserProfile = require('../templates/user-profile.js');
// const bcrypt = require('bcryptjs');

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res) => {
//     try {
//         const userPage = UserProfile.UserProfile(req, res);
//         res.send(userPage);
//     } catch (error) {
//         console.error('Error with route:', error.message);
//         throw error;
//     }
// });


// module.exports = router;
const { updateUser, deleteUser } = require('../model/user.js');
const UserProfile = require('../templates/user-profile.js');

const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    try {
        const userPage = UserProfile.UserProfile(req, res);
        res.send(userPage);
    } catch (error) {
        console.error('Error with route:', error.message);
        throw error;
    }
});


router.post('/:username/update', async (req, res) => {
    try {
        const { imageURL, bio } = req.body;
        const username = req.params.username;

        // Fetch the user by username
        const user = await getUserByUsername(username);

        if (!user) {
            // Handle the case where the user doesn't exist
            res.status(404).send('User not found');
            return;
        }

        // Use the updateUser function to update the user's profile
        await updateUser(user.id, imageURL, bio);

        // Redirect or send a response as needed
        res.redirect(`/user/${username}`);
    } catch (error) {
        console.error('Error with update route:', error.message);
        throw error;
    }
});

// Route to handle user profile deletions
router.post('/:username/delete', async (req, res) => {
    try {
        const username = req.params.username;

        // Fetch the user by username
        const user = await getUserByUsername(username);

        if (!user) {
            // Handle the case where the user doesn't exist
            res.status(404).send('User not found');
            return;
        }

        // Use the deleteUser function to delete the user's profile
        await deleteUser(user.username);

        // Redirect or send a response as needed (e.g., to a confirmation page)
        res.send('User profile deleted successfully');
    } catch (error) {
        console.error('Error with delete route:', error.message);
        throw error;
    }
});

module.exports = router;



