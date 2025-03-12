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

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
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

// Gallery functionality
const imagesPerPage = 16;
const totalImages = 31;
const totalPages = Math.ceil(totalImages / imagesPerPage);
let currentPage = 1;

function generatePlaceholderUrl(index) {
    return `https://picsum.photos/500/500?random=${index}`;
}

function displayImages(page) {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    const start = (page - 1) * imagesPerPage;
    const end = Math.min(start + imagesPerPage, totalImages);
    
    for (let i = start; i < end; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="placeholder-image" style="background-color: hsl(${Math.random() * 360}, 70%, 75%)">
                <span class="image-number">${i + 1}</span>
                <div class="expand-icon">
                    <i class="fas fa-expand"></i>
                </div>
            </div>
        `;
        galleryGrid.appendChild(item);
        
        item.addEventListener('click', () => openModal(i + 1));
    }
    
    updatePagination();
}
function updatePagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageNum = document.createElement('span');
        pageNum.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNum.textContent = i;
        pageNum.addEventListener('click', () => {
            currentPage = i;
            displayImages(currentPage);
        });
        pageNumbers.appendChild(pageNum);
    }
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Event Listeners
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayImages(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayImages(currentPage);
    }
});

// Initialize gallery
displayImages(1);