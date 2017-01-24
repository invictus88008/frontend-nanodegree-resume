function toggleClass(currentId, newClassName) {
    var targetId = document.getElementById(currentId);
    targetId.className = ""
    targetId.className = newClassName;
}

function toggleMultipleClass(currentId, firstClassName, secondClassName, secondaryId, secondaryFCN, secondarySCN) {
    var targetId = document.getElementById(currentId);
    var currentClass = targetId.className
    if (currentClass == firstClassName ) {
        targetId.className = secondClassName;
        if(secondaryId) {
            secondaryId = document.getElementById(secondaryId);
            secondaryId.className = secondarySCN;
        }
    }
    else {
        targetId.className = firstClassName;
        if(secondaryId) {
            secondaryId = document.getElementById(secondaryId);
            secondaryId.className = secondaryFCN;
        }
    }
}

setTimeout( function() {

var navHamburger = document.getElementById('mobileNavLaunch');
var navClose = document.getElementById('navClose');
var prodDescriptionButton = document.getElementById('productDesciptionTitleMobile');
navHamburger.addEventListener('click', function(){toggleClass('mobileNav', 'mobile-nav-container-open')} );
navClose.addEventListener('click', function(){toggleClass('mobileNav', 'mobile-nav-container-closed')} );
prodDescriptionButton.addEventListener('click', function(){ toggleMultipleClass('prodDescTitleArrow', 'fa fa-arrow-down', 'fa fa-arrow-up', 'product-description-body', 'product-description-body-mobile-closed', 'product-description-body-mobile-open')} );
}, 1000);


