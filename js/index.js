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

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let nav = document.querySelector('nav');

const link = document.createElement('a');
link.innerHTML = 'Extra 1'
nav.appendChild(link);

const link2 = document.createElement('a');
link2.innerHTML = 'Extra 2'
nav.appendChild(link2);

const navLinks = document.querySelectorAll("header nav a")
navLinks[0].textContent = (siteContent["nav"]["nav-item-1"]) 
navLinks[1].textContent = (siteContent["nav"]["nav-item-2"])
navLinks[2].textContent = (siteContent["nav"]["nav-item-3"])
navLinks[3].textContent = (siteContent["nav"]["nav-item-4"])
navLinks[4].textContent = (siteContent["nav"]["nav-item-5"])
navLinks[5].textContent = (siteContent["nav"]["nav-item-6"])



const color = document.querySelector("header nav a")
navLinks.forEach(a => a.style.color = 'green')
/* a.forEach(a => {
   a.style.color = "green";
}) */ 

const button = document.querySelector('button')
button.textContent = (siteContent["cta"]["button"])

const cta1 = document.querySelector('cta, cta-text, h1')
cta1.textContent = (siteContent["cta"]["h1"])

const main1 =document.querySelectorAll("main-content, top-content, text-content, h4")
main1[0].textContent = (siteContent["main-content"]["features-h4"])
main1[1].textContent = (siteContent["main-content"]["about-h4"])
main1[2].textContent = (siteContent["main-content"]["services-h4"])
main1[3].textContent = (siteContent["main-content"]["product-h4"])
main1[4].textContent = (siteContent["main-content"]["vision-h4"])
main1[5].textContent = (siteContent["contact"]["contact-h4"])

const main2 = document.querySelectorAll("main-content, top-content, text-content, p")
main2[0].textContent = (siteContent["main-content"]["features-content"])
main2[1].textContent = (siteContent["main-content"]["about-content"])
main2[2].textContent = (siteContent["main-content"]["services-content"])
main2[3].textContent = (siteContent["main-content"]["product-content"])
main2[4].textContent = (siteContent["main-content"]["vision-content"])
main2[5].textContent = (siteContent["contact"]["address"])
main2[6].textContent = (siteContent["contact"]["phone"])
main2[7].textContent = (siteContent["contact"]["email"])

const foot = document.querySelector("container, footer")
foot.textContent = (siteContent["footer"]["copyright"])