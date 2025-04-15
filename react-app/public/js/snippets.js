/**logo begins */
const logos = document.querySelectorAll('.logo-track img');
currentIndex = 0;

function showLogo(index) {
  logos.forEach((logo, i) => {
    if (i === index) {
      logo.classList.add('active');
    } else {
      logo.classList.remove('active');
    }
  });
}

function startBlinking() {
  showLogo(currentIndex);
  currentIndex = (currentIndex + 1) % logos.length;
  setTimeout(startBlinking, 1000);
}

logos.forEach(logo => {
  logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(0.9)';
  });

  logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(0.7)';
  });
});

/** logo ends */

/*** paragraph begins  */
/*
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.trimmed-paragraph');

    paragraphs.forEach(paragraph => {
        // Store the original text
        paragraph.dataset.originalText = paragraph.textContent;
    });

    function trimParagraphs() {
        paragraphs.forEach(paragraph => {
            const originalText = paragraph.dataset.originalText;
            const words = originalText.split(' ');
            let maxWords;

            if (window.innerWidth <= 768) {
                maxWords = 50; // Mobile view
            } else if (window.innerWidth <= 1024) {
                maxWords = 100; // Tablet view
            } else {
                maxWords = 150; // Desktop view
            }

            if (words.length > maxWords) {
                const trimmedText = words.slice(0, maxWords).join(' ') + '...';
                paragraph.textContent = trimmedText;
            } else {
                paragraph.textContent = originalText;
            }
        });
    }

    // Initial trim
    trimParagraphs();

    // Re-trim on window resize
    window.addEventListener('resize', trimParagraphs);
});
*/
/** paragraph ends  */

/** paragraph trim begins  */
document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = document.querySelectorAll('.trimmed-paragraph');

  paragraphs.forEach(paragraph => {
      // Store the original text
      paragraph.dataset.originalText = paragraph.innerHTML;
  });

  function trimParagraphs() {
      paragraphs.forEach(paragraph => {
          const originalText = paragraph.dataset.originalText;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = originalText;
          const textNodes = Array.from(tempDiv.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
          let maxWords;

          if (window.innerWidth <= 768) {
              maxWords = 50; // Mobile view
          } else if (window.innerWidth <= 1024) {
              maxWords = 100; // Tablet view
          } else {
              maxWords = 150; // Desktop view
          }

          let wordCount = 0;
          textNodes.forEach(node => {
              const words = node.textContent.split(' ');
              if (wordCount + words.length > maxWords) {
                  const remainingWords = maxWords - wordCount;
                  node.textContent = words.slice(0, remainingWords).join(' ') + '...';
              }
              wordCount += words.length;
          });

          paragraph.innerHTML = tempDiv.innerHTML;
      });
  }

  // Initial trim
  trimParagraphs();

  // Re-trim on window resize
  window.addEventListener('resize', trimParagraphs);
});

/*paragraph trim ends*/