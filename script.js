// Create floating bubbles
        const bubblesContainer = document.querySelector('.floating-bubbles');
        const bubbleCount = 20;
        
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size between 10px and 60px
            const size = Math.random() * 50 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 25s
            const duration = Math.random() * 15 + 10;
            bubble.style.animationDuration = `${duration}s`;
            
            // Random delay
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            
            bubblesContainer.appendChild(bubble);
        }
        
        // Toggle between login and register forms
        const container = document.querySelector('.container');
        const registerLink = document.getElementById('register-link');
        const loginLink = document.getElementById('login-link');
        
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('active');
        });
        
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('active');
        });
        
        // Add pulse animation to form elements on hover
        const inputBoxes = document.querySelectorAll('.input-box');
        inputBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                box.classList.add('pulse');
            });
            
            box.addEventListener('mouseleave', () => {
                box.classList.remove('pulse');
            });
        });