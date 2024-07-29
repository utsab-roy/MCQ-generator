document.getElementById('start-exam').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const branch = document.getElementById('branch').value;
  
    if (name && email && branch) {
      document.getElementById('user-info').style.display = 'none';
      document.getElementById('mcq-form').style.display = 'block';
      loadMCQs();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  const mcqs = generateMCQs();
  const selectedMCQs = selectRandomMCQs(mcqs, 10);
  
  function loadMCQs() {
    const mcqContainer = document.getElementById('mcq-container');
    mcqContainer.innerHTML = '';
  
    selectedMCQs.forEach((mcq, index) => {
      const mcqDiv = document.createElement('div');
      mcqDiv.classList.add('mcq');
  
      const question = document.createElement('p');
      question.textContent = `${index + 1}. ${mcq.question}`;
      mcqDiv.appendChild(question);
  
      mcq.options.forEach((option, optionIndex) => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `mcq-${index}`;
        optionInput.value = optionIndex;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        mcqDiv.appendChild(optionLabel);
        mcqDiv.appendChild(document.createElement('br'));
      });
  
      mcqContainer.appendChild(mcqDiv);
    });
  }
  
  document.getElementById('mcq-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
  
    selectedMCQs.forEach((mcq, index) => {
      const selectedOption = document.querySelector(`input[name="mcq-${index}"]:checked`);
      if (selectedOption && parseInt(selectedOption.value) === mcq.correctOption) {
        score++;
      }
    });
  
    const result = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
  
    if (score >= 7) {
      resultMessage.textContent = `Congratulations! You passed the exam with a score of ${score}/10.`;
    } else {
      resultMessage.textContent = `You failed the exam with a score of ${score}/10. Better luck next time.`;
    }
  
    result.style.display = 'block';
    document.getElementById('mcq-form').style.display = 'none';
  });
  
  function generateMCQs() {
    const mcqs = [
      {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
        correctOption: 0
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Central Programming Unit", "Central Peripheral Unit"],
        correctOption: 1
      },
      {
        question: "Which part of the computer is considered the brain?",
        options: ["Monitor", "Keyboard", "CPU", "Mouse"],
        correctOption: 2
      },
      {
        question: "Which of the following is a non-volatile memory?",
        options: ["RAM", "ROM", "Cache Memory", "Register"],
        correctOption: 1
      },
      {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Memory", "Readily Available Memory", "Randomly Available Memory"],
        correctOption: 0
      },
      {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correctOption: 2
      },
      {
        question: "What is the full form of GUI?",
        options: ["Graphical User Interface", "General User Interface", "Geographical User Interface", "Graphical Uninstall Interface"],
        correctOption: 0
      },
      {
        question: "Which device is used to store data permanently?",
        options: ["RAM", "Hard Disk", "Cache Memory", "Register"],
        correctOption: 1
      },
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperText Machine Language", "HighText Markup Language", "HyperTech Markup Language"],
        correctOption: 0
      },
      {
        question: "Which language is directly understood by the computer without translation?",
        options: ["Assembly Language", "Machine Language", "High-Level Language", "Source Code"],
        correctOption: 1
      },
      {
        question: "Which of the following is an operating system?",
        options: ["Microsoft Word", "Google Chrome", "Windows", "Mozilla Firefox"],
        correctOption: 2
      },
      {
        question: "What is the main function of an operating system?",
        options: ["Word Processing", "Database Management", "System Management", "Web Browsing"],
        correctOption: 2
      },
      {
        question: "What is a compiler?",
        options: ["A program that translates high-level language to machine language", "A program that translates machine language to high-level language", "A program that translates high-level language to assembly language", "A program that executes high-level language code"],
        correctOption: 0
      },
      {
        question: "Which protocol is used to browse a website?",
        options: ["FTP", "SMTP", "HTTP", "POP"],
        correctOption: 2
      },
      {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Uniform Resource Link"],
        correctOption: 0
      },
      {
        question: "Which of the following is a programming language?",
        options: ["HTML", "HTTP", "FTP", "Python"],
        correctOption: 3
      },
      {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "IBM", "Google"],
        correctOption: 1
      },
      {
        question: "Which of the following is a web browser?",
        options: ["Microsoft Word", "Mozilla Firefox", "Adobe Photoshop", "Microsoft Excel"],
        correctOption: 1
      },
      {
        question: "What does BIOS stand for?",
        options: ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
        correctOption: 0
      },
      {
        question: "What is the purpose of cache memory?",
        options: ["To increase processing speed", "To store permanent data", "To store temporary data", "To store backup data"],
        correctOption: 0
      },
      {
        question: "Which of the following is a primary storage device?",
        options: ["Hard Disk", "RAM", "CD-ROM", "DVD"],
        correctOption: 1
      },
      {
        question: "What is the main purpose of a network?",
        options: ["To share resources", "To increase processing speed", "To store data", "To install software"],
        correctOption: 0
      },
      {
        question: "What does LAN stand for?",
        options: ["Large Area Network", "Local Area Network", "Long Area Network", "Light Area Network"],
        correctOption: 1
      },
      {
        question: "Which device connects computers to a network?",
        options: ["Printer", "Scanner", "Router", "Keyboard"],
        correctOption: 2
      },
      {
        question: "What is the main function of a firewall?",
        options: ["To manage network traffic", "To block unauthorized access", "To store data", "To provide internet connectivity"],
        correctOption: 1
      },
      {
        question: "Which part of the computer is used for long-term data storage?",
        options: ["RAM", "ROM", "Hard Disk", "Cache"],
        correctOption: 2
      },
      {
        question: "Which of the following is an example of application software?",
        options: ["Windows", "Linux", "Microsoft Word", "Unix"],
        correctOption: 2
      },
      {
        question: "What is the purpose of an antivirus program?",
        options: ["To manage files", "To detect and remove malware", "To increase processing speed", "To install software"],
        correctOption: 1
      },
      {
        question: "Which of the following is not a type of computer network?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        correctOption: 3
      },
      {
        question: "Which type of memory is used for temporary storage?",
        options: ["ROM", "RAM", "Hard Disk", "Flash Memory"],
        correctOption: 1
      },
      {
        question: "What does SSD stand for?",
        options: ["Solid State Drive", "Secure Storage Device", "Simple Storage Device", "Solid State Disk"],
        correctOption: 0
      },
      {
        question: "Which of the following is an example of a database management system?",
        options: ["MySQL", "Microsoft Word", "Adobe Photoshop", "Mozilla Firefox"],
        correctOption: 0
      },
      {
        question: "What is the function of the control unit in the CPU?",
        options: ["To perform arithmetic operations", "To execute instructions", "To manage memory", "To control peripheral devices"],
        correctOption: 1
      },
      {
        question: "Which of the following is a type of software?",
        options: ["Hardware", "Middleware", "Firmware", "Superware"],
        correctOption: 1
      },
      {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "FTP", "SMTP", "IMAP"],
        correctOption: 2
      },
      {
        question: "What does IP stand for in IP address?",
        options: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"],
        correctOption: 0
      },
      {
        question: "Which device is used to convert digital signals to analog signals?",
        options: ["Router", "Modem", "Switch", "Hub"],
        correctOption: 1
      },
      {
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Virtual Public Network", "Virtual Protected Network", "Virtual Protocol Network"],
        correctOption: 0
      },
      {
        question: "Which of the following is not an output device?",
        options: ["Monitor", "Printer", "Scanner", "Speakers"],
        correctOption: 2
      },
      {
        question: "Which type of file is created by word processing programs?",
        options: ["Spreadsheet", "Document", "Database", "Presentation"],
        correctOption: 1
      },
      {
        question: "What does the term 'booting' refer to?",
        options: ["Starting up the computer", "Shutting down the computer", "Installing software", "Removing viruses"],
        correctOption: 0
      },
      {
        question: "Which of the following is an example of a search engine?",
        options: ["Google", "Facebook", "Twitter", "Instagram"],
        correctOption: 0
      },
      {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["C", "Java", "Python", "FORTRAN"],
        correctOption: 0
      },
      {
        question: "What is the main purpose of an operating system?",
        options: ["To manage hardware and software resources", "To perform arithmetic operations", "To provide internet connectivity", "To create documents"],
        correctOption: 0
      },
      {
        question: "Which of the following is a cloud storage service?",
        options: ["Dropbox", "Microsoft Excel", "Adobe Acrobat", "Mozilla Firefox"],
        correctOption: 0
      },
      {
        question: "What does PDF stand for?",
        options: ["Portable Document Format", "Program Development File", "Personal Document File", "Portable Development Format"],
        correctOption: 0
      },
      {
        question: "Which of the following is not a part of the computer’s hardware?",
        options: ["CPU", "RAM", "Operating System", "Hard Disk"],
        correctOption: 2
      },
      {
        question: "What does the acronym 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"],
        correctOption: 0
      },
      {
        question: "Which device is used to input text into a computer?",
        options: ["Monitor", "Keyboard", "Mouse", "Printer"],
        correctOption: 1
      },
      {
        question: "Which of the following is an example of an antivirus software?",
        options: ["Norton", "Excel", "PowerPoint", "Notepad"],
        correctOption: 0
      }
    ];
    return mcqs;
  }
  
  function selectRandomMCQs(mcqs, num) {
    const shuffled = mcqs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  