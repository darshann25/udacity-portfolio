var myName = "Darshan Patel";

var myRole = "Full Stack Engineer";

var skills = ["java", "javaScript", "android", "c++", "assembly", "css", "html"];
var interests = ["skydiving", "photography", "running", "reading"]

var bio = {
  "name" : myName,
  "age" : 22,
  "role" : myRole,
  "contacts" :
    {
    "mobile": "267-270-6561",
    "email" : "darshan@psu.edu",
    "github": 'darshann25',
    "linkedin": 'darshannpatel',
    "twitter": 'darshann94',
    "facebook": 'darshanpatel94',
    },
  "imageURL" : "images/me1.JPG",
  "welcomeMSG" : "Life is writing, reading, and coding. The rest is just waiting. :)",
  "skills" : skills,
  "interests" : interests
};

var work = {
  "jobs" : [{
    "position" : "Software Engineer Co-op",
    "employer" : "Oracle",
    "duration" : "June 2016 - December 2016",
    "location" : "Philadelphia, PA",
    "description" : '<li class="work-experience"> Worked on automating the testing infrastructure by writing Integration and Selenium suites.</li><li class="work-experience"> Quality Assurance Analyst for Oracle’s premier project management software, Prime.</li><li class="work-experience"> Concentrating on application development and fixing bugs in the process.</li>'
  } ,
  {
    "position" : "Software Engineer Intern",
    "employer" : "First Economy",
    "duration" : "June 2015 - August 2015",
    "location" : "Mumbai, India",
    "description" : '<li class="work-experience"> Enhanced the user interface of Ediffy to improve accessibilty through screen-readers for the ease of students with physical impairment.</li><li class="work-experience"> Worked in collaboration with the programming, graphics designing and marketing sides of the company.</li><li class="work-experience"> Developed application test code for the company’s education-supporting mobile app called Ediffy.</li>'
  },
  {
    "position" : "Peer Tutor and Mentor",
    "employer" : "Penn State - Learning Center",
    "duration" : "August 2014 - May 2015",
    "location" : "Abington, PA",
    "description" : '<li class="work-experience"> Ensured understanding and satisfaction by requesting the completion of review forms.</li><li class="work-experience"> Designed special problems to enhance each student’s understanding of the subject.</li><li class="work-experience">Addressed student queries with a smarter approach to problem solving.</li>'
  }]
}

var education = {
  "school" : "The Pennsylvania State University",
  "degree" : "B.Sc in Computer Engineering",
  "gpa" : "3.87",
  "dates" : "2013 - 2017",
  "location" : "University Park, PA",
  "image" : "images/psu.jpg"
}

var courses = {
  "univerisity" : ["Data Structures and Algorithms", " Embedded Systems Programming", "Operating Systems"],
  "online" : "Front-End Web Development"
}

var projects = {
    "projects" : [
    {
        "title" : "Underwater OpenROV",
        "dates" : "Aug 2014 - May 2015",
        "description" : "OpenROV is a low-cost telerobotic submarine built with the goal of making underwater exploration and education affordable. This project was to use the Underwater OpenROV v2.7 DIY kit to make the underwater robot and fix an existing version of v2.6. This robot used Beaglebone Black and Arduino MEGA microprocessors for a flexible and powerful developer platform with dozens of input/output channels and plenty of computing power for user-designed features and experiments. This robot was used to explore the areas along the Delaware river for historical research of remains from the times of the Continental Army.",
        "images" : ["images/rov.jpg", "images/rov3.JPG", "images/rov4.jpg"]
    },
    {
      "title" : "Hospital Line Following VEX Robot",
      "dates" : "Jan 2015 - May 2015",
      "description" : "The goal of this project was to use the VEX Robot to create a hospital delivery unit using line following technology. We want these robots to be able to aid doctors, nurses, and medical assistants in carrying out simple tasks such as medicine and tool deliveries. A VEX Robot is a machine that has the capability to carry out a complex series of actions automatically, especially one programmable (C language) by a computer since it uses an Arduino-powered microprocessor. The robot must follow the black line on the hospital floor. The robot stops at each room and wait for a resume button to be pressed by the user in order to proceed. The robot uses a certain number of beeps to indicate the room at which it is located.",
      "images" : ["images/arduino2.png", "images/vex1.jpg", "images/vex3.jpg"]
    }]
}

//DISPLAY BIO FUNCTION
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedNameRole = formattedName.replace("%data1%", bio.role);
  $('#header').append(formattedNameRole);

  //var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  //$('#header').append(formattedRole);

  $('#header').append(HTMLcontactStart);
  // for(var i in bio.contacts){
  //     var formattedContact = HTMLcontactGeneric.replace("%contact%", i);
  //     formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
  //     $('#topContacts').append(formattedContact);
  // }

  for(var i in bio.contacts) {
    switch(i){
      case "github" :
        var formattedContact = HTMLgithub.replace("%contact%", i);
        formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
        $('#topContacts').append(formattedContact);
        break;

      case "twitter" :
        var formattedContact = HTMLtwitter.replace("%contact%", i);
        formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
        $('#topContacts').append(formattedContact);
        break;

      case "linkedin" :
        var formattedContact = HTMLlinkedin.replace("%contact%", i);
        formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
        $('#topContacts').append(formattedContact);
        break;

      case "facebook" :
        var formattedContact = HTMLfacebook.replace("%contact%", i);
        formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
        $('#topContacts').append(formattedContact);
        break;
      
      default :
        var formattedContact = HTMLcontactGeneric.replace("%contact%", i);
        formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
        $('#topContacts').append(formattedContact);
        break;
    }
  }

  var formattedImage = HTMLbioPic.replace("%data%", bio.imageURL);
  $('#header').append(formattedImage);

  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG);
  $('#header').append(formattedMsg);

  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);

    for(var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#header").append(formattedSkill);
    }
  }

  if(bio.interests.length > 0){
    $('#header').append(HTMLpassionsStart);

    for(var i = 0; i < bio.interests.length; i++){
      var formattedInterest = HTMLpassions.replace("%data%", bio.interests[i]);
      $("#header").append(formattedInterest);
    }
  }
}

//DISPLAY WORK FUNCTION
work.display = function() {
  if(work.jobs.length > 0){
    for(var job in work.jobs){
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

      var formattedWorkEntry = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedWorkEntry);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].duration);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

//DISPLAY PROJECT FUNCTION
projects.display = function(){
  for(project in projects.projects){
    $('#projects').append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $('.project-entry:last').append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $('.project-entry:last').append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $('.project-entry:last').append(formattedProjectDescription);

    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedProjectImage);
      }
    }
  }
}

//DISPLAY EDUCATION FUNCTION
education.display = function(){
  $('#education').append(HTMLschoolStart);

  var formattedSchoolImage = HTMLschoolImage.replace("%data%", education.image);
  $('.education-entry:last').append(formattedSchoolImage);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
  $('.education-entry:last').append(formattedSchoolName);

  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
  $('.education-entry:last').append(formattedSchoolDates);

  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
  $('.education-entry:last').append(formattedSchoolDegree);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
  $('.education-entry:last').append(formattedSchoolLocation);


}


bio.display();
work.display();

//$('#main').append(internationalizeButton);

var inName = function(name){
  var name = name.trim().split(' ');
  name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return name.join(' ');
}

projects.display();
education.display();

//$('#mapHolder').append(googleMap);

// $('h1').append(bio.name);
// $('#header').append("<b>" + bio.role + "</b>");
// $('#header').append("<hr>");
//
// $

// if(bio.skills.length > 0){
//   $('#header').append(HTMLskillsStart);
//
//   for(var i = 0; i < bio.skills.length; i++){
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//     $("#skills").append(formattedSkill);
//   }
// }
//
// for(var job in work.jobs){
//
// }
