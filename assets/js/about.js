// Date function
function updateDate() {
    const dateDisplay = document.querySelector(".date-display");
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
  
    dateDisplay.innerHTML = `
          <span class="day">${day}</span>
          <div class="month-year">
              <span>${month},</span>
              <span>${year}</span>
          </div>
      `;
  }
  
  // Update date immediately and then every second
  updateDate();
  setInterval(updateDate, 1000);
  
  // Mobile view navbar
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navItems = document.querySelector(".nav-items");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navItems.classList.toggle("active");
    });
  });

  // Program section functionality
document.addEventListener('DOMContentLoaded', () => {
    const programHeaders = document.querySelectorAll('.program-header');
    const ethosImage = document.querySelector('.ethos-image');

    programHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const btn = header.querySelector('.expand-btn');
        const icon = btn.querySelector('i');

        // Close all other sections
        programHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherContent = otherHeader.nextElementSibling;
            const otherIcon = otherHeader.querySelector('.expand-btn i');
            otherContent.style.display = 'none';
            otherIcon.className = 'fas fa-plus';
          }
        });

        // Toggle current section
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        icon.className = content.style.display === 'block' ? 'fas fa-minus' : 'fas fa-plus';
      
        // Zoom effect on image
        if (ethosImage) {
          ethosImage.style.transform = content.style.display === 'block' ? 'scale(1.2)' : 'scale(1)';
        }
      });
    });
});

// Scroll functionality
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 300) {
  scrollBtn.classList.add("show");
} else {
  scrollBtn.classList.remove("show");
}
});

scrollBtn.addEventListener("click", () => {
scrollBtn.innerHTML = '<i class="fas fa-book"></i>';
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

setTimeout(() => {
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
}, 1000);
});