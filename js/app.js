      // Name Animation - Fixed for proper display
      document.addEventListener("DOMContentLoaded", function () {
        const name = "MohammedVasik Shaikh";
        const nameWrapper = document.getElementById("nameWrapper");

        // Clear any existing content
        nameWrapper.innerHTML = "";

        // Split name into parts (first + last)
        const parts = name.split(" ");

        parts.forEach((part, partIndex) => {
          // Har ek word ke liye ek <div> banayenge
          const lineDiv = document.createElement("div");
          lineDiv.className = "name-line"; // styling ke liye

          for (let i = 0; i < part.length; i++) {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = part[i];
            letterSpan.className = "name-letter";
            letterSpan.style.setProperty("--index", i + partIndex * 20);
            lineDiv.appendChild(letterSpan);
          }

          // Line break effect ke liye har word ko alag div me append karna
          nameWrapper.appendChild(lineDiv);
        });

        // Animate timeline items on scroll
        const timelineItems = document.querySelectorAll(".timeline-item");

        function animateTimeline() {
          timelineItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 300);
            }
          });
        }

        function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        }

        window.addEventListener("scroll", animateTimeline);
        window.addEventListener("load", animateTimeline);

        // Laravel Bubbles Animation - Fixed for perfect circles
        const laravelBubblesContainer =
          document.getElementById("laravelBubbles");
        const laravelTerms = [
          { text: "Laravel", class: "laravel" },
          { text: "PHP", class: "php" },
          { text: "MySQL", class: "mysql" },
          { text: "REST API", class: "api" },
          { text: "MVC", class: "mvc" },
          { text: "ORM", class: "eloquent" },
          { text: "JavaScript", class: "js" },
          { text: "Artisan", class: "artisan" },
          { text: "Blade", class: "blade" },
          { text: "Eloquent", class: "eloquent" },
          { text: "Migration", class: "migration" },
          { text: "Composer", class: "composer" },
          { text: "Git", class: "git" },
          { text: "Firebase", class: "firebase" },
          { text: "Chat", class: "api" },
          { text: "API", class: "api" },
          { text: "Controller", class: "php" },
          { text: "Model", class: "mysql" },
          { text: "View", class: "blade" },
          { text: "Routing", class: "php" },
          { text: "Middleware", class: "api" },
          { text: "Validation", class: "artisan" },
          { text: "Auth", class: "blade" },
          { text: "Seeder", class: "eloquent" },
          { text: "Factory", class: "migration" },
          { text: "Queue", class: "composer" },
          { text: "Event", class: "git" },
          { text: "Notification", class: "firebase" },
        ];

        let bubbleCounter = 0;

        function createBubble() {
          const bubble = document.createElement("div");
          bubble.classList.add("bubble");

          // Ensure perfect circles by using same width and height
          const size = Math.floor(Math.random() * 40) + 70; // 70-110px
          bubble.style.width = `${size}px`;
          bubble.style.height = `${size}px`;

          // Center text properly
          bubble.style.lineHeight = `${size}px`;

          // Random starting position
          const startFromLeft = Math.random() > 0.5;
          if (startFromLeft) {
            bubble.style.left = `-${size}px`;
            bubble.style.top = `${Math.random() * 100}vh`;
          } else {
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.top = `-${size}px`;
          }

          // Random animation duration
          const duration = Math.floor(Math.random() * 30) + 25;
          bubble.style.animationDuration = `${duration}s`;

          // Random Laravel term
          const term =
            laravelTerms[Math.floor(Math.random() * laravelTerms.length)];
          bubble.textContent =
            term.text.length > 10
              ? term.text.substring(0, 10) + "..."
              : term.text;
          bubble.classList.add(term.class);

          // Add to container
          laravelBubblesContainer.appendChild(bubble);
          bubbleCounter++;

          // Remove bubble after animation completes
          setTimeout(() => {
            if (bubble.parentNode) {
              bubble.parentNode.removeChild(bubble);
              bubbleCounter--;
            }
          }, duration * 1000);
        }

        function addBubbles(count = 5) {
          for (let i = 0; i < count; i++) {
            createBubble();
          }
        }

        // Initialize bubbles
        addBubbles(15);

        // Add bubbles periodically
        setInterval(() => {
          if (bubbleCounter < 25) {
            addBubbles(3);
          }
        }, 5000);

        // Create floating particles
        const particlesContainer = document.getElementById("floatingParticles");
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement("div");
          particle.classList.add("particle");
          particle.style.left = `${Math.random() * 100}vw`;
          particle.style.animationDelay = `${Math.random() * 20}s`;
          particle.style.animationDuration = `${15 + Math.random() * 15}s`;
          particlesContainer.appendChild(particle);
        }

        // Smooth scroll for contact button
        const contactBtn = document.querySelector('a[href="#contact"]');
        if (contactBtn) {
          contactBtn.addEventListener("click", function (e) {
            // e.preventDefault();
            // console.log(
            //   "Contact button clicked - would scroll to contact section"
            // );
          });
        }
      });

      // Wait until page loads
      document.addEventListener("DOMContentLoaded", () => {
        // Select all project cards
        const projectCards = document.querySelectorAll(".project-card");
        const modals = document.querySelectorAll(".project-modal");
        const closeBtns = document.querySelectorAll(".modal-close");

        // Open modal on project card click
        projectCards.forEach((card) => {
          card.addEventListener("click", () => {
            const projectKey = card.getAttribute("data-project"); // ex: "canyo"
            const modal = document.querySelector(`#modal-${projectKey}`);
            if (modal) {
              modal.classList.add("active");
            }
          });
        });

        // Close modal on close button
        closeBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.closest(".project-modal").classList.remove("active");
          });
        });

        // Close modal when clicking outside modal content
        modals.forEach((modal) => {
          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              modal.classList.remove("active");
            }
          });
        });
      });

        // Skills Progress Animation
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }

        // Staggered Animation for Skill Items
        function animateSkillItems() {
            const skillItems = document.querySelectorAll('.skill-item, .soft-skill-item');
            
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Start animations after a short delay
            setTimeout(() => {
                animateSkillBars();
                animateSkillItems();
            }, 500);

            // Add hover effects for skill categories
            const skillCategories = document.querySelectorAll('.skill-category');
            
            skillCategories.forEach(category => {
                category.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                category.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add click effect for soft skills
            const softSkills = document.querySelectorAll('.soft-skill-item');
            
            softSkills.forEach(skill => {
                skill.addEventListener('click', function() {
                    this.style.transform = 'translateX(10px)';
                    setTimeout(() => {
                        this.style.transform = 'translateX(5px)';
                    }, 150);
                });
            });
        });

        // Animate on scroll (if needed for full page)
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', function() {
            const skillsSection = document.getElementById('skills');
            if (isElementInViewport(skillsSection)) {
                animateSkillBars();
                animateSkillItems();
            }
        });

         // Timeline Animation on Scroll
        function animateTimeline() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight - 100) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 300);
                }
            });
        }

        // Skill Tags Animation
        function animateSkillTags() {
            const skillTags = document.querySelectorAll('.skill-tag');
            
            skillTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'scale(1)';
                }, index * 100);
            });
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            // Initial animation
            animateTimeline();
            
            // Animate on scroll
            window.addEventListener('scroll', animateTimeline);
            
            // Add hover effects to timeline items
            const timelineContents = document.querySelectorAll('.timeline-content');
            
            timelineContents.forEach(content => {
                content.addEventListener('mouseenter', function() {
                    const skills = this.querySelector('.timeline-skills');
                    if (skills) {
                        animateSkillTags();
                    }
                });
            });

            // Add click effects
            timelineContents.forEach(content => {
                content.addEventListener('click', function() {
                    this.style.transform = 'translateY(-5px) scale(1.01)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-10px) scale(1.02)';
                    }, 150);
                });
            });

            // Pulse animation for current role
            const currentRole = document.querySelector('.achievement-badge');
            if (currentRole) {
                setInterval(() => {
                    currentRole.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        currentRole.style.transform = 'scale(1)';
                    }, 500);
                }, 2000);
            }
        });

        // Check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

         // Form Animation and Interaction
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const formGroups = document.querySelectorAll('.form-group');
            const submitBtn = document.querySelector('.submit-btn');

            // Animate form elements on load
            formGroups.forEach((group, index) => {
                group.style.opacity = '0';
                group.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    group.style.transition = 'all 0.6s ease-out';
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, index * 200);
            });

            // Form submission effect
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Add loading animation
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.style.background = 'var(--secondary-color)';
                
                // Simulate sending process
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'var(--accent-color)';
                    
                    // Reset form
                    setTimeout(() => {
                        form.reset();
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                        submitBtn.style.background = 'var(--gradient)';
                        
                        // Show success message
                        showNotification('Message sent successfully! I\'ll get back to you soon.');
                    }, 2000);
                }, 1500);
            });

            // Input focus effects
            const inputs = document.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'scale(1.02)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'scale(1)';
                });
            });

            // Contact item hover effects
            const contactItems = document.querySelectorAll('.contact-item');
            contactItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('.contact-icon');
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                });
                
                item.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('.contact-icon');
                    icon.style.transform = 'scale(1) rotate(0deg)';
                });
            });

            // Social links animation
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'scale(0)';
                
                setTimeout(() => {
                    link.style.transition = 'all 0.5s ease-out';
                    link.style.opacity = '1';
                    link.style.transform = 'scale(1)';
                }, 1000 + (index * 100));
            });

            // Notification function
            function showNotification(message) {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--gradient);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    z-index: 1000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-out;
                `;
                notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);
                
                setTimeout(() => {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
        });

         // Simple hover animation for the name
        document.addEventListener('DOMContentLoaded', function() {
            const nameSpan = document.querySelector('.copyright span');
            
            // Add pulsing animation
            setInterval(() => {
                nameSpan.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    nameSpan.style.transform = 'scale(1)';
                }, 500);
            }, 3000);
        });

       const form = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        form.addEventListener('submit', async function(e) {
          e.preventDefault();

          let formData = new FormData(form);
          let response = await fetch(form.action, {
            method: "POST",
            body: formData
          });

          let result = await response.json();
          if (result.success) {
            formMessage.style.color = "green";
            formMessage.textContent = "✅ Thank you! Your message has been sent.";
            form.reset();
          } else {
            formMessage.style.color = "red";
            formMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
          }
        });






        // =============== nev
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = navLinks.querySelectorAll("a"); // सभी anchor tags

// Hamburger click -> menu open/close
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // click bubble na ho
  navLinks.classList.toggle("active");
});

// Page click outside -> menu close
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Anchor click -> menu close
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});