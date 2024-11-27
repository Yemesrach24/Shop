document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown');
  
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Close all other dropdowns
        navItems.forEach(i => {
          if (i !== item) {
            i.querySelector('.dropdown').style.display = 'none';
          }
        });
        // Toggle current dropdown
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Optional: Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        navItems.forEach(item => {
          item.querySelector('.dropdown').style.display = 'none';
        });
      }
    });
  });
