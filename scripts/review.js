document.addEventListener('DOMContentLoaded', function () {
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const reviewsDisplay = document.querySelector("#reviews");

  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  
  if (numReviews == 0) {
    reviewsDisplay.textContent = `This is your first review. &#128024; Welcome!`;
      numReviews = 1;
  } else {
    reviewsDisplay.innerHTML = numReviews;
  }
  
  numReviews++;
  
  localStorage.setItem("numReviews-ls", numReviews);

  const selectElement = document.getElementById('product-name');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', 0);
    }

});

