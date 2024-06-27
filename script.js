/*---------------------------------------------- View Count ----------------------------------------------------*/

    // THIS SECTION DEALS WITH THE (SELECT LANAGUE DROP DOWN LIST)
    function changeLanguage(select) {
      var aboutText = document.getElementById('about-text');
      var language = select.value;
      switch (language) {
          case 'english':
              aboutText.innerText = "Solent University, located in Southampton, England, is a dynamic and forward-thinking institution offering a wide range of undergraduate and postgraduate programs. Known for its industry-focused approach to education, Solent emphasizes practical learning and professional development, preparing students for successful careers in various fields.";
              break;
          case 'arabic':
              aboutText.innerText = "جامعة سولينت، الموجودة في ساوثهامبتون، إنجلترا، هي مؤسسة ديناميكية ومتطورة تقدم مجموعة واسعة من البرامج الجامعية والدراسات العليا. تشتهر جامعة سولينت بتوجهها نحو  < الصناعة في التعليم، حيث تولي اهتماماً خاصاً بالتعلم العملي وتطوير المهارات المهنية، مما يُعِد الطلاب لمسيرات مهنية ناجحة في مختلف المجالات.";
              break;
          case 'chinese':
              aboutText.innerText = "索伦特大学位于英格兰南安普顿，是一所充满活力和前瞻性的机构，提供广泛的本科和研究生课程。索伦特大学以其行业导向的教育方式而闻名，强调实践学习和专业发展，为学生在各个领域成功就业做好准备。";
              break;
          case 'dutch':
              aboutText.innerText = "Solent University, gelegen in Southampton, Engeland, is een dynamische en vooruitstrevende instelling die een breed scala aan bachelor- en postacademische programma's aanbiedt. Bekend om haar branchegerichte benadering van onderwijs, legt Solent de nadruk op praktisch leren en professionele ontwikkeling, waardoor studenten worden voorbereid op succesvolle carrières in verschillende vakgebieden.";
              break;
          case 'french':
              aboutText.innerText = "L'Université de Solent, située à Southampton, en Angleterre, est une institution dynamique et avant-gardiste proposant une large gamme de programmes de premier  cycle et de troisième cycle. Connu pour son approche axée sur l'industrie de l'éducation, Solent met l'accent sur l'apprentissage pratique et le développement professionnel, préparant les étudiants à des carrières réussies dans divers domaines.";
              break;
          case 'german':
              aboutText.innerText = "Die Solent University, mit Sitz in Southampton, England, ist eine dynamische und zukunftsorientierte Institution, die eine breite Palette von Bachelor- und Postgraduiertenprogrammen anbietet. Bekannt für ihren industrieorientierten Ansatz in der Bildung, betont die Solent University praktisches Lernen und berufliche Entwicklung, um die Studierenden auf erfolgreiche Karrieren in verschiedenen Bereichen vorzubereiten.";
              break;
          case 'hindi':
              aboutText.innerText = "सोलेंट विश्वविद्यालय, जो इंग्लैंड के साउथहैम्प्टन में स्थित है, एक गतिशील और प्रगतिशील संस्थान है जो स्नातक और स्नातकोत्तर कार्यक्रमों की विस्तृत श्रेणी प्रदान करता है। शिक्षा में उद्योग केंद्रित दृष्टिकोण के लिए <br> प्रसिद्ध सोलेंट विश्वविद्यालय प्रैक्टिकल लर्निंग और पेशेवर विकास पर जोर देता है, विभिन्न क्षेत्रों में सफल करियर के लिए छात्रों को तैयार करता है.";
              break;
          default:
              aboutText.innerText = "Default text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
              break;
      }
      
      // VISITOR COUNT
      
      incrementCounter();
  } 

  // Function to increment the visitor counter
  function incrementCounter() {        //Not having the right name in this section (function for example will not allow the numbers render from 1 on words)
      if (localStorage.getItem('visits')) {     //Not having the right name in this section (function for example will not allow the numbers render from 1 on words)
          var visits = parseInt(localStorage.getItem('visits'));
          visits++;
          localStorage.setItem('visits', visits);
      } else {                            //Not having the right name in this section (function for example will not allow the numbers render from 1 on words)
          localStorage.setItem('visits', 1);
      }
      document.getElementById('visitor-counter').innerText = localStorage.getItem('visits');        //Not having the right name in this section (function for example will not allow the numbers render from 1 on words)
  }

  // Call the incrementCounter function when the page loads
  window.onload = function() {
      incrementCounter();
  }; //

/*--------------------------------------------- View Count ----------------------------------------------------*/



// Get all select elements
const selects = document.querySelectorAll('select');

// Iterate over each select element
selects.forEach(select => {
  // Add change event listener
  select.addEventListener('change', function() {
      // Get the selected option
      const selectedOption = this.value;

      // Get the corresponding table cell
      const tableCell = document.querySelector(`td[data-value="${selectedOption}"]`);

      // Check if the option should turn grey
      if (selectedOption === 'COM42' || selectedOption === 'COM13') {
          // Add CSS class to change color
          tableCell.classList.add('grey');
      } else {
          // Remove CSS class to revert color
          tableCell.classList.remove('grey');
      }
  });
}); 

/*-------------------------------------- Module Section (Page 3) ------------------------------------------- */

// Keep track of sorting direction
let sortDirection = [true, true, true, true];

function sortTable(columnIndex) {
    const table = document.querySelector('.small-table tbody');
    const rowsArray = Array.from(table.rows);

    // Determine sorting direction
    sortDirection[columnIndex] = !sortDirection[columnIndex];
    const direction = sortDirection[columnIndex] ? 1 : -1;

    // Sort rows based on the selected column
    rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        if (cellA < cellB) {
            return -1 * direction;
        }
        if (cellA > cellB) {
            return 1 * direction;
        }
        return 0;
    });

    // Reattach sorted rows to the table
    table.append(...rowsArray);
}

// /*------------------------------------------------------------------------------------------*/
// ///////////////////////////////Registration page
// /*------------------------------------------------------------------------------------------*/

function isValidPassword(password) {
  // Check if password contains at least one uppercase letter and one special character
  const uppercasePattern = /[A-Z]/;
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
  return uppercasePattern.test(password) && specialCharacterPattern.test(password);
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var message = document.getElementById('message');

  // Check if passwords match
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  // Check if password meets requirements
  if (!isValidPassword(password)) {
    message.textContent = "Password must contain at least one uppercase letter and one special character.";
    message.style.color = "red";
    return;
  }

  // Success message
  message.textContent = "Registration successful!";
  message.style.color = "green";


// /*------------------------------------------------------------------------------------------*/
// ///////////////////////////////Summary page
// /*------------------------------------------------------------------------------------------*/

 // Get form data
  var firstName = document.getElementById('first-name').value;
  var surname = document.getElementById('surname').value;
  var mobileNumber = document.getElementById('mobile-number').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var comments = document.getElementById('comments').value;

  // Encode form data for URL
  var formData = new URLSearchParams({
    'first-name': firstName,
    'surname': surname,
    'mobile-number': mobileNumber,
    'gender': gender,
    'comments': comments
  }).toString();

  // Redirect to summary.html with form data
  setTimeout(function() {
    window.location.href = 'summary.html?' + formData;
  }, 1000); // 1000 milliseconds (2 seconds) delay
} 