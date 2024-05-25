const typewriterText = ["designer", "intern"];
let currentText = 0;
let letterCount = 0;
let typingForward = true;
let cursorVisible = true;

function updateCursor() {
  const cursorSpan = document.getElementById('cursor');
  cursorVisible = !cursorVisible;
  cursorSpan.style.opacity = cursorVisible ? 1 : 0;
}

function typeWriter() {
  let displayText = '';
  const typewriterSpan = document.getElementById('typewriter');
  
  if (typingForward) {
    letterCount++;
    if (letterCount === typewriterText[currentText].length) {
      typingForward = false;
      setTimeout(updateCursor, 200); //blink cursor when word is complete
    }
  } else {
    letterCount--;
    if (letterCount === 0) {
      currentText++;
      if (currentText === typewriterText.length) currentText = 0;
      typingForward = true;
    }
  }

  displayText = typewriterText[currentText].substring(0, letterCount);
  typewriterSpan.textContent = displayText;
  setTimeout(typeWriter, typingForward ? 250 : 200); //timing
}

setInterval(updateCursor, 500); //cursor blinking
typeWriter();





function copyPhoneNumber() {
    const phoneNumber = '(+1) 347-444-5773';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}

function copyEmail() {
    const email = 'ychox200321@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.getElementById('copyNotificationEmail');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}


document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mousemove', e => {
      const bounds = e.target.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = (e.clientX - centerX) * 0.5; //sensitivity
      const deltaY = (e.clientY - centerY) * 0.5; 
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const threshold = 100; //effect start distance
  
      if (distance < threshold) {
        const pullX = deltaX * 1; //pull strength
        const pullY = deltaY * 1; 
        e.target.style.transform = `translate(${pullX}px, ${pullY}px)`;
      } else {
        e.target.style.transform = 'translate(0, 0)';
      }
    });
  
    link.addEventListener('mouseleave', e => {
      e.target.style.transform = 'translate(0, 0)';
      e.target.style.transition = 'transform 0.2s ease-out';
    });
  
    link.addEventListener('mouseenter', e => {
      e.target.style.transition = '';
    });
  });
  

  document.getElementById('darkModeToggle').addEventListener('click', function() {
    var darkModeStylesheet = document.getElementById('darkModeStylesheet');
    var lightModeStylesheet = document.getElementById('lightModeStylesheet');
    var picoStyleSheet = document.getElementById('picoStyleSheet');
    if (darkModeStylesheet.disabled) {
        darkModeStylesheet.disabled = false;
        lightModeStylesheet.disabled = true;

    } else {
        darkModeStylesheet.disabled = true;
        lightModeStylesheet.disabled = false;
    }
<<<<<<< Updated upstream
});
=======
  });

  
  



// const themeToggle = document.getElementById('darkModeToggle');
// const lightModeStylesheet = document.getElementById('lightModeStylesheet');
// const darkModeStylesheet = document.getElementById('darkModeStylesheet');

// themeToggle.addEventListener('click', () => {
// if (darkModeStylesheet.disabled) {
//     darkModeStylesheet.disabled = false;
//     lightModeStylesheet.disabled = true;
//     localStorage.setItem('theme', 'dark');
// } else {
//     darkModeStylesheet.disabled = true;
//     lightModeStylesheet.disabled = false;
//     localStorage.setItem('theme', 'light');
// }
// });

// //saved user preference on page load
// document.addEventListener('DOMContentLoaded', () => {
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     darkModeStylesheet.disabled = false;
//     lightModeStylesheet.disabled = true;
// } else {
//     darkModeStylesheet.disabled = true;
//     lightModeStylesheet.disabled = false;
// }
// });


// loading screen!

// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//     var loadingScreen = document.getElementById('loadingScreen');
//     loadingScreen.style.opacity = '0';
//     loadingScreen.style.visibility = 'hidden';
//     }, 1000); 
// });

// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//       var loadingScreen = document.getElementById('loadd');
//       loadingScreen.style.opacity = '0';
//       loadingScreen.style.visibility = 'hidden';
//     }, 3000); // The delay in milliseconds (3000ms = 3 seconds)
// });
  
document.getElementById('hireMeButton').addEventListener('click', function(e) {
  e.preventDefault();
  const confettiWrapper = document.getElementById('confetti-wrapper');

  for (let i = 0; i < 100; i++) {
      let confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.width = `${Math.random() * 8 + 6}px`;
      confettiPiece.style.height = `${confettiPiece.style.width * 1.5}px`;
      confettiPiece.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
      confettiPiece.style.animationDuration = `${Math.random() * 3 + 5}s`;
      confettiPiece.style.animationTimingFunction = 'ease-out';
      confettiWrapper.appendChild(confettiPiece);

      confettiPiece.addEventListener('animationend', function() {
          confettiPiece.remove();
      });
  }
});





document.addEventListener('DOMContentLoaded', (event) => {
  const elements = document.querySelectorAll('.fade-in-slide-up');
  const windowHeight = window.innerHeight;

  const checkElementsOnScroll = () => {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('visible');
      }
    }
  };

  window.addEventListener('scroll', checkElementsOnScroll);
  checkElementsOnScroll(); // Initial check on load
});



document.addEventListener('DOMContentLoaded', () => {
  const projectDisplays = document.querySelectorAll('.project-display');
  
  function toggleVisibility() {
      const windowHeight = window.innerHeight;
      const triggerBottom = windowHeight / 5 * 4;  // Trigger point to show elements

      projectDisplays.forEach(projectDisplay => {
          const projectTop = projectDisplay.getBoundingClientRect().top;
          const projectBottom = projectDisplay.getBoundingClientRect().bottom;

          if (projectTop < triggerBottom && projectBottom > 0) {
              // This condition checks if the top of the element is within the lower 80% of the screen
              // and also ensures that the bottom of the element is still within the viewport
              projectDisplay.classList.add('visible');
          } else {
              // This condition will hide the elements when they are not in the visible range,
              // including when scrolling back up to the top
              projectDisplay.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();  // Initial check on load
});

document.addEventListener('DOMContentLoaded', (event) => {
  const elements = document.querySelectorAll('.fade-out-slide-up'); 
  const triggerScrollDistance = window.innerHeight / 2.4;

  const checkElementsOnScroll = () => {
    const scrolledDistance = window.scrollY; 
    if (scrolledDistance >= triggerScrollDistance) {
      elements.forEach(element => {
        element.classList.add('fading-out');
      });
    } else {
      elements.forEach(element => {
        element.classList.remove('fading-out');
      });
    }
  };

  window.addEventListener('scroll', checkElementsOnScroll);
  checkElementsOnScroll(); // Initial check on load
});


function copyPhoneNumber() {
    const phoneNumber = '(+1) 347-444-5773';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}

function copyEmail() {
    const email = 'ychox200321@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.getElementById('copyNotificationEmail');
        notification.style.display = 'block';
        notification.style.opacity = '0.8';

        setTimeout(() => {notification.style.opacity = '0'; }, 1000); //start fade
        setTimeout(() => {notification.style.display = 'none';}, 2000);
    }).catch((error) => {console.error('Failed to copy:', error);});
}

>>>>>>> Stashed changes
