// Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    
    {
        templeName: "Taipei Taiwan",
        location: "Taipei , Taipei City, Taiwan",
        dedicated: "1984, November, 17–18",
        area: 9945,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg",
        width: "400px",
        height: "250px"
      },


      {
        templeName: "Los Angeles California",
        location: "Los Angeles California, California, United States",
        dedicated: "1956,  March, 11",
        area: 190614,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg",
        width: "400px",
        height: "250px"
        },
      {
        templeName: "Salt Lake City",
        location: " Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg",
        width: "400px",
        height: "250px"
      },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg",
        width: "400px",
        height: "250px"
      },
      {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg",
        width: "400px",
        height: "250px"
    },
    
    {
        templeName: "Johannesburg South Africa",
        location: "Parktown, Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg",
        width: "400px",
        height: "250px"
      },


      {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999,  March, 5", 
        area: 6800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-1039762-wallpaper.jpg",
        width: "400px",
        height: "250px"
      },
      {
        templeName: "ST. George Utah",
        location: " ST. George, Utah, United States",
        dedicated: "1877, April, 6",  
        area: 143969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-894724-wallpaper.jpg",
        width: "400px",
        height: "250px"
      },
    {
        templeName: "Panamá City Panamá",
        location: "Ancon, Panamá, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Uusimaa, Finland",
        dedicated: "2006, February, 27",
        area: 16350,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    

];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                titleName.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                titleName.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                titleName.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                titleName.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                titleName.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('home-nav');
});


// Footer infor

let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
