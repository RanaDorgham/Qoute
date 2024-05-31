const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "“So many books, so little time.” ― Frank Zappa",
    "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
    "“You only live once, but if you do it right, once is enough.”Omar Ihab",
    "“Be the change that you wish to see in the world.”― Mahatma Gandhi",
  ];
  const generateButton = document.getElementById("generateButton");
  const quoteElement = document.getElementById("quote");
  console.log(quoteElement);
  generateButton.addEventListener("click", generate);
  function generate() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }