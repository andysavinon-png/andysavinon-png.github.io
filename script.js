
function showInfo(language) {
  const languageData = {
    HTML: {
      title: "HTML",
      info: "HTML is used to build the structure of a webpage. It adds headings, paragraphs, images, buttons, and links."
    },
    CSS: {
      title: "CSS",
      info: "CSS is used to style a webpage. It changes colors, fonts, spacing, layouts, and makes pages look better."
    },
    JavaScript: {
      title: "JavaScript",
      info: "JavaScript makes webpages interactive. It can make buttons work, change text, create animations, and respond to user actions."
    },
    Python: {
      title: "Python",
      info: "Python is one of the easiest programming languages for beginners. It is used for apps, games, websites, and data projects."
    },
    Java: {
      title: "Java",
      info: "Java is a powerful programming language often used for apps, software, and larger projects. It is popular in schools and workplaces."
    },
    Scratch: {
      title: "Scratch",
      info: "Scratch is a block-based coding language that is perfect for absolute beginners. It helps users learn coding logic in a simple way."
    }
  };

  document.getElementById("languageTitle").textContent = languageData[language].title;
  document.getElementById("languageInfo").textContent = languageData[language].info;
}






