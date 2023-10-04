const { updateUser, deleteUser } = require('../model/user.js');
const { getUserById} = require('../model/user.js');
const { getSession } = require('../model/session.js');
const UserProfile = require('../templates/user-profile.js');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const userData = req.session && getUserById(req.session.user_id);
    
        if (!userData) {
            // Handle the case where the user doesn't exist / isn't logged in
            res.redirect("/");
            return;
        }
    
        const userPage = UserProfile.UserProfile(req, res, userData);
        res.send(userPage);
    } catch (error) {
        console.error('Error with route:', error.message);
        throw error;
    }
});

router.post('/update', async (req, res) => {
    try {
        const id = req.session && req.session.user_id;

        // Fetch the user by username
        const user = await getUserById(id);

        if (!user) {
            // Handle the case where the user doesn't exist
            res.status(404).send('User not found');
            return;
        }

        // Use the updateUser function to update the user's profile
        const { imageURL, bio } = req.body;
        await updateUser( id, imageURL, bio);
     
        // Redirect or send a response as needed
        res.redirect(`/`);
    } catch (error) {
        console.error('Error with update route:', error.message);
        throw error;
    }
});

// Route to handle user profile deletions
router.post('/delete', async (req, res) => {
    try {
        const id = req.session && req.session.user_id;

        if (!id) {
            // Handle the case where the user doesn't exist
            res.status(404).send('User not found');
            return;
        }

        // Use the deleteUser function to delete the user's profile
        await deleteUser(id);

        // Redirect or send a response as needed (e.g., to a confirmation page)
        res.redirect('/');
    } catch (error) {
        console.error('Error with delete route:', error.message);
        throw error;
    }
});

module.exports = router;



