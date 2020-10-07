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
  "tlevels-parent-design-whothiscourseisfor": "This course is suitable for anyone wanting a career in construction, specifically in surveying and design, civil engineering, building services design, or hazardous materials surveying.\n\nDuring the two-year programme, you will learn the core knowledge and skills that underpin many jobs in the construction industry. Your learning will combine 40 weeks of classroom theory and practical learning and a minimum of 9 weeks with an employer.",
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
