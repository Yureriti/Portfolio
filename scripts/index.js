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
});
