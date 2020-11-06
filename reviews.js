// local reviews data
const reviews = [{
        id: 1,
        name: "Roqeebah",
        job: "Economist/Trader",
        img: "https://user-images.githubusercontent.com/70523917/95669143-15d08b80-0b75-11eb-9f1e-1a6c34f1441a.jpg",

        text: "Their facility is well equipped and their nurses are beautiful and friendly too.",
    },
    {
        id: 2,
        name: "Kemi ",
        job: "Stylist/Entrepreneur",
        img: "https://user-images.githubusercontent.com/70523917/95669178-6d6ef700-0b75-11eb-83c2-c8cf22490502.jpg",
        text: "They have good customer relations and treat patients with affections and care. I will definitely recommend them to anyone seeking quality health care.",
    },
    {
        id: 3,
        name: "Kola",
        job: "Senior Manager",
        img: "https://user-images.githubusercontent.com/70523917/95669250-79a78400-0b76-11eb-802d-e7c107d25bce.jpg",
        text: "You have to be there to experience their quality services first hand. The Clinic premise is breath-taking and their staffs are friendly.",
    },
    {
        id: 4,
        name: "Daniel",
        job: "Digital Marketer",
        img: "https://user-images.githubusercontent.com/70523917/95669388-2f270700-0b78-11eb-9cfd-6e58d4f9b49e.jpeg",
        text: "MAJOKS Clinic delivers quality healthcare at affordable prices. My wife was delivered of a baby girl there and I have not regretted that I patronised thier services.",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});
// show person based on items

function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});