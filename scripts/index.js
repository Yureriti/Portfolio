const typewriterText = ["designer", "intern", "developer"];
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
  setTimeout(typeWriter, typingForward ? 340 : 200); //timing
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
  








  const themeToggle = document.getElementById('darkModeToggle');
  const resumeLink = document.getElementById('resumeLink');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        resumeLink.href = "images/YURI CHOI - Resume.pdf";
      } else {
        resumeLink.href = "images/YURI_CHOI Resume (1).pdf";
      }
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      resumeLink.href = "images/YURI CHOI - Resume.pdf";

    } else {
      document.body.classList.remove('dark-mode');
      resumeLink.href = "images/YURI_CHOI Resume (1).pdf";

    }
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
  




