// middleware/checkAuth.js
const checkAuth = (req, res, next) => {
    // Example authentication check
    // For demonstration, using a boolean flag
    const isAuthenticated = req.headers['x-authenticated'] === 'true';

    if (isAuthenticated) {
        next(); // User is authenticated, proceed to the next middleware/route handler
    } else {
        res.redirect('/'); // Redirect to the main page if not authenticated
    }
};

module.exports = checkAuth;