document.addEventListener("DOMContentLoaded", () => {


  //Header js start 



  document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 30);
  });


  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => {
            i.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    });
});

//Header js end



  // hero section js start 


  const swiper = new Swiper(".custom-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //hero section js end 



  // card slider js start 

  const Cardswiper = new Swiper(".myCardSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //card slider js end 



  // review slider js start 

  const reviewSwiper = new Swiper(".myReviewSwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //review slider js end 
  const  lendingSwiper = new Swiper(".myLendingSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  //lending slider start 

  //lending slider end

  // checkout js start 


    const minInput = document.querySelector('minRange');
    const maxInput = document.querySelector('maxRange');
    const minThumb = document.querySelector('minThumb');
    const maxThumb = document.querySelector('maxThumb');
    const sliderRange = document.querySelector('sliderRange');
    const minValueDisplay = document.querySelector('minValue');
    const maxValueDisplay = document.querySelector('maxValue');
    const priceRangeText = document.querySelector('priceRangeText');
    if(priceRangeText<932 && priceRangeText>0){
      priceRangeText.style.display = "block";
    }
    
    // Set initial values
    const minPrice = parseInt(minInput.min);
    const maxPrice = parseInt(minInput.max);
    let currentMin = parseInt(minInput.value);
    let currentMax = parseInt(maxInput.value);
    
    // Currency symbol
    const currency = '৳';
    
    // Calculate percentage for positioning
    function getPercent(value) {
      return ((value - minPrice) / (maxPrice - minPrice)) * 100;
    }
    
    // Update the slider visuals
    function updateSlider() {
      const minPercent = getPercent(currentMin);
      const maxPercent = getPercent(currentMax);
      
      // Update range track
      sliderRange.style.left = minPercent + '%';
      sliderRange.style.width = (maxPercent - minPercent) + '%';
      
      // Update thumbs
      minThumb.style.left = minPercent + '%';
      maxThumb.style.left = maxPercent + '%';
      
      // Update price displays
      minValueDisplay.textContent = currentMin;
      maxValueDisplay.textContent = currentMax;
      
      // Update price range in dropdown button
      priceRangeText.textContent = `${currency}${currentMin} - ${currency}${currentMax}`;
    }
    
    // Initialize slider
    updateSlider();
    
    // Min price input event
    minInput.addEventListener('input', function() {
      currentMin = parseInt(minInput.value);
      
  
      if (currentMin >= currentMax - 1) {
        currentMin = currentMax - 1;
        minInput.value = currentMin;
      }
      
      updateSlider();
    });
    
    // Max price input event
    maxInput.addEventListener('input', function() {
      currentMax = parseInt(maxInput.value);
      
      // Ensure max doesn't go below min + 1
      if (currentMax <= currentMin + 1) {
        currentMax = currentMin + 1;
        maxInput.value = currentMax;
      }
      
      updateSlider();
    });
    
    // Add mouse and touch events for better slider interaction
    let activeThumb = null;
    

    // Function to handle thumb movement
    function handleMove(e) {
      if (!activeThumb) return;
      

      // Get mouse/touch position
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const rect = document.querySelector('.slider-container').getBoundingClientRect();
      const position = (clientX - rect.left) / rect.width;
      

      // Calculate new value
      let newValue = Math.round(position * (maxPrice - minPrice) + minPrice);
      

      // Update the appropriate input
      if (activeThumb === minThumb) {
        newValue = Math.min(newValue, currentMax - 1);
        newValue = Math.max(newValue, minPrice);
        currentMin = newValue;
        minInput.value = newValue;
      } else {
        newValue = Math.max(newValue, currentMin + 1);
        newValue = Math.min(newValue, maxPrice);
        currentMax = newValue;
        maxInput.value = newValue;
      }
      
      updateSlider();
    }
    

    // Mouse events for thumbs
    minThumb.addEventListener('mousedown', function() {
      activeThumb = minThumb;
    });
    
    maxThumb.addEventListener('mousedown', function() {
      activeThumb = maxThumb;
    });
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', function() {
      activeThumb = null;
    });
    

    // Touch events for mobile
    minThumb.addEventListener('touchstart', function() {
      activeThumb = minThumb;
    });
    
    maxThumb.addEventListener('touchstart', function() {
      activeThumb = maxThumb;
    });
    
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', function() {
      activeThumb = null;
    });
    

    // Prevent dropdown from closing when clicking inside it
    document.querySelector('.price-range-container').addEventListener('click', function(e) {
      e.stopPropagation();
    });
});

// Checkout js end 