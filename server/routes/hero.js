// hero routes

const express = require("express");
const heroRoutes = express.Router();

// Require Hero model in our routes module
let Hero = require("../models/Hero");

// Defined get data(index or listing) route
heroRoutes.route("/").get(function(req, res) {
  Hero.find(function(err, heroValues) {
    if (err) {
      console.log(err);
    } else {
      res.json(heroValues);
    }
  });
});

// heroRoutes.route("/add").post(function(req, res) {
//   let hero = new Hero(req.body);
//   hero
//     .save()
//     .then(hero => {
//       res.status(200).json({ hero: "hero is added successfully" });
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

// // Defined edit route
// businessRoutes.route("/edit/:id").get(function(req, res) {
//   let id = req.params.id;
//   Business.findById(id, function(err, business) {
//     res.json(business);
//   });
// });

// //  Defined update route
// businessRoutes.route("/update/:id").post(function(req, res) {
//   Business.findById(req.params.id, function(err, business) {
//     if (!business) res.status(404).send("data is not found");
//     else {
//       business.person_name = req.body.person_name;
//       business.business_name = req.body.business_name;
//       business.business_gst_number = req.body.business_gst_number;

//       business
//         .save()
//         .then(business => {
//           res.json("Update complete");
//         })
//         .catch(err => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// businessRoutes.route("/delete/:id").get(function(req, res) {
//   Business.findByIdAndRemove({ _id: req.params.id }, function(err, business) {
//     if (err) res.json(err);
//     else res.json("Successfully removed");
//   });
// });

module.exports = heroRoutes;
