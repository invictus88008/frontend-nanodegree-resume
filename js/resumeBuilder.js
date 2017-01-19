var bio = {
    "name" : "Nate Hargitt",
    "role" : "Front End Web Develoer",
    "contacts" : {
        "mobile" : "666-666-6666",
        "email" : "dontTalkToMe@foff.com",
        "github" : "github.com/leefeetr",
        "twitter" : "@doILook12",
        "location" : "1334 The Alameda, San Jose, 95126"
    },
    "Welcome Message" : "hello and welcom to my resume",
    "skills" : ['web development', 'guitar', 'git', 'protecting princesses', 'coming back from the dead'],
    "bioPic" : 'images/me.png',
    display : function() {
        insertTemplateData("#header", HTMLheaderName, bio.name);
         insertTemplateData("#header", HTMLheaderRole, bio.role);
         insertTemplateData("#header", HTMLbioPic, bio.bioPic);

    if (bio.skills) {
    $('#header').append(HTMLskillsStart);
        for(i = 0; i < bio.skills.length; i++) {
            insertTemplateData("#skills", HTMLskills, bio.skills[i])
        }
    }
    function addContacts (pageID) {
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
    jobs : [
        {
            "employer" : "ASHO",
            "title" : "Sales and Delivery Manager",
            "location" : "Los Angeles",
            "zip": "90027",
            "dates" : "2006 - 2013",
            "description" : "Incharge of making all the cash money money"
        },
        {
            "employer" : "PAC Consturction",
            "title" : "Finishes Manager",
            "location" : "Los Angeles",
            "zip" : "90210",
            "dates" : "2013 - 2014",
            "description" : "Make that drywall look like it should"
        },
        {
            "employer" : "Exxell Fire Systems",
            "title" : "Sales and Service",
            "location" : "Oakland",
            "zip" : "94610",
            "dates" : "2014 - 2015",
            "description" : "Sold Fire Protection and installed"
        },
        {
            "employer" : "Appliance Repair Doctor",
            "title" : "Front End Web Develoer",
            "location" : "Alameda",
            "zip" : "94501",
            "dates" : "Feb 2016 - June 2016",
            "description" : "Built the website and managed it"
        },
        {
            "employer" : "High Five",
            "title" : "Front End Web Develoer",
            "location" : "Redwood City",
            "zip" : "94061",
            "dates" : "June 2016 - Oct 2016",
            "description" : "Built the website and managed it"
        },
        {
            "employer" : "Bay Area News Group",
            "title" : "Front End Web Develoer",
            "location" : "San Jose",
            "zip" : "95126",
            "dates" : "November 2016 - Present",
            "description" : "Built the website and managed it"
        },
    ],
    display: function() {
        for(job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var workInfo = replaceTemplateInfo( HTMLworkEmployer, work.jobs[job].employer ) +
        replaceTemplateInfo( HTMLworkTitle, work.jobs[job].title ) +
        replaceTemplateInfo( HTMLworkDates, work.jobs[job].dates ) +
        replaceTemplateInfo( HTMLworkLocation, work.jobs[job].location ) +
        replaceTemplateInfo( HTMLworkDescription, work.jobs[job].description )
        $('.work-entry:last').append(workInfo);
    }
    }
}
var projects = {
    projects : [
        {
            "name" : "Javscript BlackJack",
            "date" : "Dec 2016",
            "description" : "A JavaScript renditoin of the great game BlackJack",
            "image" : ['http://natehargitt.com/assets/images/blackjack.png']
        },
        {
            "name" : "Pro Modeling Portfolio",
            "date" : "Dec 2016",
            "description" : "A prorfolio for the top model",
            "image" : ["http://natehargitt.com/assets/images/kaiarose.png"]
        }
    ],
    display : function() {
        var projectsArr = projects.projects;

        for(i = 0; i < projectsArr.length; i++) {

            $('#projects').append(HTMLprojectStart);
            var projectClass = $(".project-entry:last");
            insertTemplateData(projectClass, HTMLprojectTitle, projectsArr[i].name);
            insertTemplateData(projectClass, HTMLprojectDates, projectsArr[i].date);
            insertTemplateData(projectClass, HTMLprojectDescription, projectsArr[i].description);
            insertTemplateData(projectClass, HTMLprojectImage, projectsArr[i].image);
        }
    }
}
var education = {
    schools : [
        {
            "name" : "Codify Academy",
            "location" : "San Francisco",
            "degree" : "Front End Development",
            "dates" : "Sept 2015 - Jan 2016",
            "majors" : ["Front End Web Development"]
        },
        {
            "name" : "Armstrong",
            "location" : "Plymoth",
            "degree" : "Wasted Time",
            "dates" : "Sep 2004 - Oct 2006",
            "majors" : ["Socializing", "Dating", "Music"]
        },
    ],
    onlineCourses :  [
            {
                "title" : "JavaScript Basics",
                "name" : "Code Academy",
                "dates" : "Dec 2016",
                "url" : "http:codeacademy.com"
            },
            {
                "title" : "NodeJS Basics",
                "name" : "Code School",
                "dates" : "Dec 2016",
                "url" : "CodeSchool.com"
            }
        ],
    displaySchools : function() {
            var schoolsArr = education.schools;


        for(i = 0; i < schoolsArr.length; i++) {

            $('#education').append(HTMLschoolStart);
            var educationClass = $(".education-entry:last");
            insertTemplateData(educationClass, HTMLschoolName, schoolsArr[i].name);
            insertTemplateData(educationClass, HTMLschoolDegree, schoolsArr[i].degree);
            insertTemplateData(educationClass, HTMLschoolDates, schoolsArr[i].dates);
            insertTemplateData(educationClass, HTMLschoolLocation, schoolsArr[i].location);
            insertTemplateData(educationClass, HTMLschoolMajor, schoolsArr[i].majors);
        }

    },
    displayOnlineSchools : function() {
            var onlineClassArr = education.onlineCourses;

$('#education').append(HTMLonlineClasses);
        for(i = 0; i < onlineClassArr.length; i++) {


            $('#education').append(HTMLschoolStart);
            var educationClass = $(".education-entry:last");
            insertTemplateData(educationClass, HTMLschoolName, onlineClassArr[i].title);
            insertTemplateData(educationClass, HTMLonlineTitle, onlineClassArr[i].name);
            insertTemplateData(educationClass, HTMLonlineSchool, onlineClassArr[i].dates);

            insertTemplateData(educationClass, HTMLonlineURL, onlineClassArr[i].url);
        }

    }
}

bio.display();
projects.display();
work.display();
education.displaySchools();
education.displayOnlineSchools();












//Helper functions
function replaceTemplateInfo (templateVar, newValue) {
    return templateVar.replace("%data%", newValue)
}
function insertTemplateData(pageId, templateVar, newValue) {
    var info = replaceTemplateInfo(templateVar, newValue);
    $(pageId).append(info)
}





function displayMap() {
    $('#mapDiv').append(googleMap);
}
displayMap();



