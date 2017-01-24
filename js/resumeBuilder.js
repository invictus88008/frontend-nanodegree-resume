var bio = {
    "welcomeMessage": "Welcome to Jurassic Park",
    "name": "Nate Hargitt",
    "role": "Front End Web Develoer",
    "contacts": {
        "mobile": "666-666-6666",
        "email": "fakeAssGangsta@gmail.com",
        "github": "github.com/leefeetr",
        "twitter": "@doILook12",
        "location": "San Jose, 95126",
        "blog": "NateHargitt.com/Blog"
    },

    "skills": ['web development', 'guitar', 'git', 'protecting princesses', 'coming back from the dead'],
    "biopic": 'images/me.png',
    display: function() {
        insertTemplateData("#header", HTMLheaderName, bio.name);
        insertTemplateData("#header", HTMLheaderRole, bio.role);
        insertTemplateData("#header", HTMLbioPic, bio.biopic);
        insertTemplateData("#header", HTMLwelcomeMsg, bio.welcomeMessage);

        if (bio.skills) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                insertTemplateData("#skills", HTMLskills, bio.skills[i]);
            }
        }

        function addContacts(pageID) {
            var contactInfo = bio.contacts;
            insertTemplateData(pageID, HTMLmobile, contactInfo.mobile);
            insertTemplateData(pageID, HTMLemail, contactInfo.email);
            insertTemplateData(pageID, HTMLtwitter, contactInfo.twitter);
            insertTemplateData(pageID, HTMLgithub, contactInfo.github);
            insertTemplateData(pageID, HTMLblog, contactInfo.blog);
            insertTemplateData(pageID, HTMLlocation, contactInfo.location);
        }
        addContacts('#topContacts');
        addContacts('#footerContacts');
    }

};
var work = {
    jobs: [{
        "employer": "ASHO",
        "title": "Sales and Delivery Manager",
        "location": "Los Angeles",
        "zip": "90027",
        "dates": "2006 - 2013",
        "description": "Incharge of making all the cash money money"
    }, {
        "employer": "PAC Consturction",
        "title": "Finishes Manager",
        "location": "Los Angeles",
        "zip": "90210",
        "dates": "2013 - 2014",
        "description": "Make that drywall look like it should"
    }, {
        "employer": "Exxell Fire Systems",
        "title": "Sales and Service",
        "location": "Oakland",
        "zip": "94610",
        "dates": "2014 - 2015",
        "description": "Sold Fire Protection and installed"
    }, {
        "employer": "Appliance Repair Doctor",
        "title": "Front End Web Develoer",
        "location": "Alameda",
        "zip": "94501",
        "dates": "Feb 2016 - June 2016",
        "description": "Built the website and managed it"
    }, {
        "employer": "High Five",
        "title": "Front End Web Develoer",
        "location": "Redwood City",
        "zip": "94061",
        "dates": "June 2016 - Oct 2016",
        "description": "Built the website and managed it"
    }, {
        "employer": "Bay Area News Group",
        "title": "Front End Web Develoer",
        "location": "San Jose",
        "zip": "95126",
        "dates": "November 2016 - Present",
        "description": "Built the website and managed it"
    }, ],
    display: function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(HTMLworkStart);
            var workInfo = replaceTemplateInfo(HTMLworkEmployer, work.jobs[job].employer) +
                replaceTemplateInfo(HTMLworkTitle, work.jobs[job].title) +
                replaceTemplateInfo(HTMLworkDates, work.jobs[job].dates) +
                replaceTemplateInfo(HTMLworkLocation, work.jobs[job].location) +
                replaceTemplateInfo(HTMLworkDescription, work.jobs[job].description);
            $('.work-entry:last').append(workInfo);
        }
    }
};
var projects = {
    projects: [{
        "name": "Javscript BlackJack",
        "dates": "Dec 2016",
        "description": "A JavaScript renditoin of the great game BlackJack",
        "images": ['http://natehargitt.com/assets/images/blackjack.png']
    }, {
        "name": "Pro Modeling Portfolio",
        "dates": "Dec 2016",
        "description": "A prorfolio for the top model",
        "images": ["http://natehargitt.com/assets/images/kaiarose.png"]
    }],
    display: function() {
        var projectsArr = projects.projects;

        for (var i = 0; i < projectsArr.length; i++) {

            $('#projects').append(HTMLprojectStart);
            var projectClass = $(".project-entry:last");
            insertTemplateData(projectClass, HTMLprojectTitle, projectsArr[i].name);
            insertTemplateData(projectClass, HTMLprojectDates, projectsArr[i].dates);
            insertTemplateData(projectClass, HTMLprojectDescription, projectsArr[i].description);
            for (var j = 0; j < projectsArr[i].images.length; j++) {
                insertTemplateData(projectClass, HTMLprojectImage, projectsArr[j].images);
            }
        }
    }
};
var education = {
    schools: [{
        "name": "Codify Academy",
        "location": "San Francisco",
        "degree": "Front End Development",
        "dates": "Sept 2015 - Jan 2016",
        "majors": ["Front End Web Development"],
        "url": "http://CodifyAcademy.com"
    }, {
        "name": "Armstrong",
        "location": "Plymoth",
        "degree": "Wasted Time",
        "dates": "Sep 2004 - Oct 2006",
        "majors": ["Socializing", "Dating", "Music"],
        "url": "http://armstrongHigh.com"
    }, ],
    onlineCourses: [{
        "title": "JavaScript Basics",
        "name": "Code Academy",
        "dates": "Dec 2016",
        "url": "http:codeacademy.com"
    }, {
        "title": "NodeJS Basics",
        "name": "Code School",
        "dates": "Dec 2016",
        "url": "CodeSchool.com"
    }],
    display: function() {
        var schoolsArr = education.schools;
        var onlineClassArr = education.onlineCourses;


        for (i = 0; i < schoolsArr.length; i++) {

            $('#education').append(HTMLschoolStart);
            var educationClass = $(".education-entry:last");
            insertTemplateData(educationClass, HTMLschoolName, schoolsArr[i].name);
            insertTemplateData(educationClass, HTMLschoolDegree, schoolsArr[i].degree);
            insertTemplateData(educationClass, HTMLschoolDates, schoolsArr[i].dates);
            insertTemplateData(educationClass, HTMLschoolLocation, schoolsArr[i].location);
            insertTemplateData(educationClass, HTMLschoolMajor, schoolsArr[i].majors);
        }
        $('#education').append(HTMLonlineClasses);
        for (i = 0; i < onlineClassArr.length; i++) {


            $('#education').append(HTMLschoolStart);
            var lastEducationClass = $(".education-entry:last");
            insertTemplateData(lastEducationClass, HTMLschoolName, onlineClassArr[i].title);
            insertTemplateData(lastEducationClass, HTMLonlineTitle, onlineClassArr[i].name);
            insertTemplateData(lastEducationClass, HTMLonlineSchool, onlineClassArr[i].dates);
            insertTemplateData(lastEducationClass, HTMLonlineURL, onlineClassArr[i].url);
        }

    }
};

bio.display();
projects.display();
work.display();
education.display();













//Helper functions
function replaceTemplateInfo(templateVar, newValue) {
    return templateVar.replace("%data%", newValue);
}

function insertTemplateData(pageId, templateVar, newValue) {
    var info = replaceTemplateInfo(templateVar, newValue);
    $(pageId).append(info);
}





function displayMap() {
    $('#mapDiv').append(googleMap);
}
displayMap();
