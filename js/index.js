const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a');
nav.forEach(function(value, i){
  value.textContent = siteContent.nav[`nav-item-${i+1}`]
})

nav.forEach(navEle => {
  navEle.style.color = 'green';
})
// __________New Navs_______________

const navEl = document.querySelector('nav');

const newNavItem1 = document.createElement('a')
newNavItem1.textContent = "firstNewNav"

navEl.appendChild(newNavItem1)

const newNavItem2 = document.createElement('a')
newNavItem2.textContent = "secondNewNav"

navEl.appendChild(newNavItem2)

const newItems = document.querySelectorAll('a')
newItems.forEach(element => {
  element.style.color = 'green'
})

const href1 = document.querySelectorAll('a')[6];
href1.href = "#"

const href2 = document.querySelectorAll('a')[7];
href2.href = "#"
//__________________________________________________________________________________

let dom = document.querySelector('h1')
dom.textContent = siteContent.cta.h1
// dom.style.width = "50%";
dom.style.flexWrap = 'wrap'

// let wrap = document.querySelector('cta-text')
// wrap.style.width = "40%";

let button = document.querySelector('button')
button.textContent = siteContent.cta.button

let domImage = document.getElementById('cta-img')
domImage.setAttribute('src', siteContent['cta']['img-src'])

//___________________________________________________________________________________

// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },

let features = document.querySelectorAll(".top-content .text-content h4")[0];
features.textContent = siteContent["main-content"]["features-h4"]

let featuresP = document.querySelectorAll(".top-content .text-content p")[0];
featuresP.textContent = siteContent["main-content"]['features-content']

let about = document.querySelectorAll(".top-content .text-content h4")[1];
about.textContent = siteContent['main-content']['about-h4'];

let aboutP = document.querySelectorAll(".top-content .text-content p")[1];
aboutP.textContent = siteContent['main-content']['about-content'];

//___________________________________________________________________________________

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//___________________________________________________________________________________

let services = document.querySelectorAll('.bottom-content .text-content h4')[0]
services.textContent = siteContent['main-content']['services-h4']

let product = document.querySelectorAll('.bottom-content .text-content h4')[1]
product.textContent = siteContent['main-content']['product-h4']

let vision = document.querySelectorAll('.bottom-content .text-content h4')[2]
vision.textContent = siteContent["main-content"]["vision-h4"]

let servicesP = document.querySelectorAll('.bottom-content .text-content p')[0]
servicesP.textContent = siteContent["main-content"]["services-content"]

let productP = document.querySelectorAll('.bottom-content .text-content p')[1]
productP.textContent = siteContent["main-content"]["product-content"]

let visionP = document.querySelectorAll('.bottom-content .text-content p')[2]
visionP.textContent = siteContent["main-content"]["product-content"]

//_____________________________________________________________________________________

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactAddress = document.querySelectorAll('.contact p')[0]
contactAddress.textContent = siteContent.contact.address

let contactNumber = document.querySelectorAll('.contact p')[1]
contactNumber.textContent = siteContent.contact.phone

let contactEmail = document.querySelectorAll('.contact p')[2]
contactEmail.textContent = siteContent.contact.email

//_____________________________________________________________________________________

// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

let footerInfo = document.querySelector('footer p')
footerInfo.textContent = siteContent.footer.copyright

let wrap = document.querySelector('.cta-text')
wrap.style.width = "20%";