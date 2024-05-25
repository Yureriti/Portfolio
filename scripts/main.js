const trailer = document.getElementById("trailer");


document.addEventListener('mousemove', function(e) {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;
  trailer.style.transform = `translate(${x}px, ${y}px)`;
});

// CLOCK
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.querySelector('.bottom-right').textContent = timeString;
    }
    
    setInterval(updateTime, 1000);
    updateTime();
  });
  

window.addEventListener('scroll', function() {
  const scrollThreshold = 40; 
  if (window.pageYOffset > scrollThreshold) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
    const scrollThreshold = 1200;
    if (window.pageYOffset > scrollThreshold) {
        document.body.classList.add('scrolled2');
    } else {
        document.body.classList.remove('scrolled2');
    }
});

window.addEventListener('scroll', function() {
    const scrollThreshold = 2000;
    if (window.pageYOffset > scrollThreshold) {
        document.body.classList.add('scrolled3');
    } else {
        document.body.classList.remove('scrolled3');
    }
});


document.addEventListener('scroll', function() {
    const maxShadowSize = 10000;  // Maximum size of the box shadow
    const minShadowSize = 0;      // Minimum size of the box shadow
    const transitionStart = 0;    // Start decreasing immediately on scroll
    const transitionEnd = 100;    // End of transition 500px down the page

    // Calculate the current position in the transition range
    let scrollFraction = (window.scrollY - transitionStart) / (transitionEnd - transitionStart);
    scrollFraction = Math.max(0, Math.min(1, scrollFraction)); // Clamp scrollFraction to between 0 and 1

    // Calculate the new shadow size based on the linear interpolation from max to min size over the scroll range
    let newShadowSize = maxShadowSize - ((maxShadowSize - minShadowSize) * scrollFraction);

    // Set the new shadow size to the CSS variable
    document.querySelector('#trailer').style.setProperty('--box-shadow-size', `${newShadowSize}px`);
});

// document.addEventListener('scroll', function() {
//     const maxShadowSize = 10000;  // Maximum size of the box shadow
//     const minShadowSize = 0;    // Minimum size of the box shadow
//     const landingPageHeight = window.innerHeight; // Height of the initial viewport

//     // Calculate the transition range (how long the shadow takes to shrink to its minimum)
//     // Example: 500px beyond the landing page height
//     const transitionRange = 10;

//     // Start changing the box shadow after scrolling past the landing page height
//     let scrollFraction = (window.scrollY - landingPageHeight) / transitionRange;
//     scrollFraction = Math.max(0, Math.min(1, scrollFraction)); // Clamp scrollFraction to between 0 and 1

//     // Calculate the new shadow size based on the linear interpolation from max to min size over the scroll range
//     let newShadowSize = maxShadowSize;
//     if (window.scrollY > landingPageHeight) {
//         newShadowSize = maxShadowSize - ((maxShadowSize - minShadowSize) * scrollFraction);
//     }

//     // Set the new shadow size to the CSS variable
//     document.querySelector('#trailer').style.setProperty('--box-shadow-size', `${newShadowSize}px`);
// });



// document.addEventListener('scroll', function() {
//     const maxShadowSize = 10000;  // Maximum size of the box shadow
//     const minShadowSize = 500;    // Minimum size of the box shadow
//     const scrollDepth = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
//     const scrollFraction = (window.scrollY+3)/ scrollDepth; // Fraction of the scroll completed
  
//     // Calculate new shadow size based on a linear interpolation from max to min size over the scroll range
//     let newShadowSize = maxShadowSize - ((maxShadowSize - minShadowSize) * scrollFraction);
  
//     // Set the new shadow size to the CSS variable
//     document.querySelector('#trailer').style.setProperty('--box-shadow-size', `${newShadowSize}px`);
//   });
  
  
//   document.addEventListener('scroll', function() {
//     const threshold = window.innerHeight;  // Set to the height of the viewport, adjust as needed
//     const scrollPosition = window.scrollY; // Current vertical scroll position
    
//     if (scrollPosition >= threshold) {
//         document.documentElement.style.overflow = 'hidden'; // Stop html from scrolling
//         document.body.style.overflowY = 'scroll'; // Enable scroll on body
//     } else {
//         document.documentElement.style.overflow = 'auto'; // Enable scroll on html
//         document.body.style.overflowY = 'hidden'; // Stop body from scrolling
        
//     }

//     // Existing functionality for box shadow adjustment
//     const maxShadowSize = 10000;  // Maximum size of the box shadow
//     const minShadowSize = 500;    // Minimum size of the box shadow
//     const scrollDepth = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollPosition / scrollDepth;
//     let newShadowSize = maxShadowSize - ((maxShadowSize - minShadowSize) * scrollFraction);

//     // Update the box-shadow size
//     document.querySelector('#trailer').style.setProperty('--box-shadow-size', `${newShadowSize}px`);
// });

  
function copyPhoneNumber(event) {
    event.preventDefault();  
    const phoneNumber = '(+1) 347-444-5773';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}

function copyEmail(event) {
    event.preventDefault();
    const email = 'ychox200321@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.getElementById('copyNotificationEmail');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}



document.querySelectorAll('.gallery-right .gallery-list li').forEach(item => {
    item.addEventListener('mouseover', function() {
        const imageSrc = this.getAttribute('data-image');
        const previewImg = document.getElementById('previewImage');
        previewImg.src = imageSrc;
        document.getElementById('imagePreview').style.display = 'block';  // Show the preview
    });

    item.addEventListener('mouseout', function() {
        document.getElementById('imagePreview').style.display = 'none';  // Hide the preview
    });
});



$(function() {
    $(".draggable").draggable({
        containment: "parent"  // Restricts movement within the content-wrapper
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.tv-container');
    var draggables = document.querySelectorAll('.draggable');
    temp = 165

    draggables.forEach(function(draggable) {
        var maxX = container.clientWidth - (draggable.clientWidth) - temp;
        var maxY = container.clientHeight - (draggable.clientHeight) - temp;

        var randomX = Math.floor(Math.random() * maxX) + temp;
        var randomY = Math.floor(Math.random() * maxY) + temp;

        draggable.style.left = randomX + 'px';
        draggable.style.top = randomY + 'px';
    });
});


