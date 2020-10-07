/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  "sprint13-tlevels-count": 0,

  // Exemplar content for Design, Surveying and Planning for Construction T Level
  "tlevels-parent-design-whothiscourseisfor": "",
  "tlevels-parent-design-entryrequirements": "",
  "tlevels-parent-design-whatyoulllearn": "",
  "tlevels-parent-design-howyoulllearn": "",
  "tlevels-parent-design-howassessed": "",
  "tlevels-parent-design-whatyoucandonext": "",

 // Exemplar content for Digital Production, Design and Development
  "tlevels-parent-digital-whothiscourseisfor": "",
  "tlevels-parent-digital-entryrequirements": "",
  "tlevels-parent-digital-whatyoulllearn": "",
  "tlevels-parent-digital-howyoulllearn": "",
  "tlevels-parent-digital-howassessed": "",
  "tlevels-parent-digital-whatyoucandonext": "",

  // Exemplar content for Education and Childcare T Level
  "tlevels-parent-education-whothiscourseisfor": "",
  "tlevels-parent-education-entryrequirements": "",
  "tlevels-parent-education-whatyoulllearn": "",
  "tlevels-parent-education-howyoulllearn": "",
  "tlevels-parent-education-howassessed": "",
  "tlevels-parent-education-whatyoucandonext": ""

}
