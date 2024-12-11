const scriptURL = 'https://script.google.com/macros/s/AKfycbxzcq3-F11KXBQ1AvME53s6QQG_r-DjdA_qx9jkk90AaMX-73WtKdPAfoJFeey3KC2Q/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
        msg.innerHTML = "Failed to send message. Please try again.";
      });
  });
  
  const text = " I'm a Frontend Developer!";
  const textElement = document.getElementById("text");
  const textArray = text.split("");
  let index = 0;
  const speed = 100; // Character ke beech ka time (ms)
  const repeatDelay = 2000; // Repeat ke beech ka time (ms)
  
  function autoWrite() {
    if (index < textArray.length) {
      textElement.innerHTML += textArray[index];
      index++;
      setTimeout(autoWrite, speed);
    } else {
      index = 0;
      textElement.innerHTML = "";
      setTimeout(autoWrite, repeatDelay);
    }
  }
  
  autoWrite();
  


  function doPost(e) {
    var sheet = SpreadsheetApp.openById("1wbeGkZeweM_Rpaxj9JFMHAecXnSfL-AH7oHmD3aSJr0").getSheetByName("Sheet1"); // Replace with the tab name in your sheet
    var data = e.parameter;
  
    // Append the form data to the sheet
    sheet.appendRow([data.name, data.email, data.message, new Date()]);
    
    // Respond with a success message
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }

//   for animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  