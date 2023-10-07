// Import necessary modules
const express = require("express");
const router = express.Router();

// Home route: Renders the home page when the root URL is accessed
router.get("/", (req, res) => {
  res.render("home");
});

// About route: Renders the about page when '/about' URL is accessed
router.get("/about", (req, res) => {
  res.render("about");
});

// Services route: Renders the services page when '/services' URL is accessed
router.get("/services", (req, res) => {
  res.render("services");
});

// Contact route: Renders the contact page when '/contact' URL is accessed
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Projects route: Renders the projects page when '/projects' URL is accessed
router.get("/projects", (req, res) => {
  res.render("projects");
});

// Export the router to be used in other parts of the application
module.exports = router;
