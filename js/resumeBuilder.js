/*
JSON Data for the content of resume
*/
// Work Object
var work = {
    "jobs": [{
        "employer": "Get My Parking",
        "title": "Software Development Intern",
        "location": "Delhi, India",
        "dates": "March 2016 - December 2016",
        "description": "Front End Development"
    }, {
        "employer": "Rooter",
        "title": "Software Development Intern",
        "location": "Delhi, India",
        "dates": "January 2017 - Current",
        "description": "Front End Development"
    }]
};

work.display = function() {
    'use strict';
    var i = 0,
        appendStr;
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        appendStr = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        $(".work-entry:last").append(appendStr);
        appendStr = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(appendStr);
        appendStr = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(appendStr);
        appendStr = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(appendStr);
        appendStr = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(appendStr);
    }
};

// Bio Object
var bio = {
    "name": "Divyanshu Tomar",
    "role": "Front End Developer",
    "welcomeMessage": "Welcome to my resume",
    "contacts": {
        "email": "tomar.divyanshu@gmail.com",
        "github": "divyanshutomar",
        "location": "Delhi, India",
        "mobile": "1234567890"
    },
    "skills": ["Django", "JavaScript", "React", "Python"],
    "biopic": "images/111.jpg"
};

bio.display = function() {
    'use strict';
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic),
        formattedWMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
        github = HTMLgithub.replace("%data%", bio.contacts.github),
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        formattedSkill,
        HTMLContacts;
    
    // Display Bio
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedPhoto);
    $("#header").append(formattedWMsg);
    $("#header").append("<br/>");
    $("#header").append("<div id='bioBox' class='flex-box'></div>");
    $("#bioBox").append("<ul id='bioInfo'></ul>");
    // Render contact details
    $("#bioInfo").append(formattedLocation);
    $("#bioInfo").append(formattedMobile);
    $("#bioInfo").append(github);
    $("#bioInfo").append(formattedEmail);
    // Renders contact details in the footer
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(github);
    $("#footerContacts").append(formattedEmail);
    // Render Skills
    if (bio.skills.length > 0) {
        $("#bioBox").append(HTMLskillsStart);
        bio.skills.forEach((item) => {
            formattedSkill = HTMLskills.replace("%data%", item);
            $("#skills").append(formattedSkill);
        });
    }
};

// Education Object
var education = {
    "schools": [{
        "name": "Bal Bharati High School",
        "location": "Delhi, India",
        "degree": "High School Degree",
        "majors": ["Science"],
        "dates": "2010-2012",
        "url": "#"
    }, {
        "name": "Maharaja Surajmal Institute of Technology",
        "location": "Delhi, India",
        "degree": "B. Tech",
        "majors": ["Computer Science"],
        "dates": "2013-2017",
        "url": "http://www.msit.com"
    }, ],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }, {
        "title": "JavaScript basics",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }, {
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }]
};

education.display = function() {
    'use strict';
    var formattedHtml;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // Render the schools data
        education.schools.forEach((school) => {
            $("#education").append(HTMLschoolStart);
            formattedHtml = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedHtml);
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[0]));
        });

        // Renders the courses
        $("#education").append('<br/>');
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach((course) => {
            $("#education").append("<div class='course-entry'><hr/></div>");
            formattedHtml = HTMLonlineTitle.replace("%data%", course.title);
            $(".course-entry:last").append(formattedHtml);
            $(".course-entry:last").append(HTMLonlineSchool.replace('%data%', course.school));
            $(".course-entry:last").append(HTMLonlineDates.replace('%data%', course.dates));
            $(".course-entry:last").append(HTMLonlineURL.replace('%data%', course.url));
        });
    }
};

// Project Object
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2017",
        "description": "FEND Project 1",
        "images": ["images/SoftwareProj.png"],
    }, {
        "title": "Project 2",
        "dates": "2017",
        "description": "FEND Project 2",
        "images": ["images/SoftwareProj.png"],
    }, {
        "title": "Project 3",
        "dates": "2017",
        "description": "FEND Project 3",
        "images": ["images/SoftwareProj.png"],
    }, ]
};

projects.display = function() {
    'use strict';
    var proj;
    $("#projects").append("<div id=\"projects-foldable-content\"></div>");
    projects.projects.forEach((project) => {
        $("#projects-foldable-content").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
        if (project.images.length > 0) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images[0]));
        }
    });

};

// Power up the Resume !
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);