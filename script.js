document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    mobileMenuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active")
      this.classList.toggle("active")
    })
  
    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question")
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling
        const isOpen = answer.style.display === "block"
  
        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach((item) => {
          item.style.display = "none"
        })
  
        // Toggle the clicked answer
        answer.style.display = isOpen ? "none" : "block"
      })
    })
  
    // Form submission (you would typically send this to a server)
    const contactForm = document.getElementById("contact-form")
    const newsletterForm = document.getElementById("newsletter-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message. We will get back to you soon!")
      contactForm.reset()
    })
  
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for subscribing to our newsletter!")
      newsletterForm.reset()
    })
  })
  
  document.querySelector('.quote-btn').addEventListener('click', function() {
    alert("Get a Quote feature coming soon!");
});

document.querySelector('.chat-btn').addEventListener('click', function() {
    alert("Chat feature coming soon!");
});
