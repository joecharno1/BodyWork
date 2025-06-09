// Page loading functionality
function hidePageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    const body = document.body;
    
    if (pageLoader) {
        // Add loaded class to trigger fade out
        pageLoader.classList.add('loaded');
        body.classList.add('loaded');
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
            if (pageLoader.parentNode) {
                pageLoader.parentNode.removeChild(pageLoader);
            }
        }, 500);
    }
}

// Ensure everything is loaded before hiding loader
window.addEventListener('load', function() {
    // Small delay to ensure smooth transition
    setTimeout(hidePageLoader, 200);
});

// Fallback: Hide loader after maximum wait time
setTimeout(hidePageLoader, 3000);

document.addEventListener('DOMContentLoaded',function(){
    // Initialize scroll animations
    initScrollAnimations();
    initScrollHeader();
    
    const mobileMenuToggle=document.querySelector('.mobile-menu-toggle');const header=document.querySelector('.header');if(mobileMenuToggle){const mobileNav=document.createElement('div');mobileNav.className='mobile-nav';const navList=document.querySelector('.nav-list');if(navList){const mobileNavList=document.createElement('ul');mobileNavList.className='mobile-nav-list';navList.querySelectorAll('li').forEach(item=>{mobileNavList.appendChild(item.cloneNode(true));});mobileNav.appendChild(mobileNavList);header.appendChild(mobileNav);}
mobileMenuToggle.addEventListener('click',function(){this.classList.toggle('active');document.querySelector('.mobile-nav').classList.toggle('active');});}
const contactForm=document.getElementById('contactForm');if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();let valid=true;const name=document.getElementById('name');const email=document.getElementById('email');const message=document.getElementById('message');if(!name.value.trim()){valid=false;showError(name,'Name is required');}else{clearError(name);}
if(!email.value.trim()){valid=false;showError(email,'Email is required');}else if(!isValidEmail(email.value)){valid=false;showError(email,'Please enter a valid email');}else{clearError(email);}
if(!message.value.trim()){valid=false;showError(message,'Message is required');}else{clearError(message);}
if(valid){const successMessage=document.createElement('div');successMessage.className='form-success';successMessage.textContent='Thank you for your message! We will get back to you soon.';contactForm.innerHTML='';contactForm.appendChild(successMessage);}});}
const reviewForm=document.getElementById('reviewForm');if(reviewForm){const stars=document.querySelectorAll('.star');const ratingInput=document.getElementById('rating');stars.forEach(star=>{star.addEventListener('click',function(){const value=this.getAttribute('data-value');ratingInput.value=value;stars.forEach(s=>{if(s.getAttribute('data-value')<=value){s.classList.add('active');}else{s.classList.remove('active');}});});});reviewForm.addEventListener('submit',function(e){e.preventDefault();let valid=true;const name=document.getElementById('name');const course=document.getElementById('course');const rating=document.getElementById('rating');const review=document.getElementById('review');if(!name.value.trim()){valid=false;showError(name,'Name is required');}else{clearError(name);}
if(!course.value){valid=false;showError(course,'Please select a course');}else{clearError(course);}
if(!rating.value){valid=false;showError(rating,'Please select a rating');document.querySelector('.rating-select').style.borderColor='var(--color-primary)';}else{clearError(rating);document.querySelector('.rating-select').style.borderColor='';}
if(!review.value.trim()){valid=false;showError(review,'Review is required');}else{clearError(review);}
if(valid){const successMessage=document.createElement('div');successMessage.className='form-success';successMessage.textContent='Thank you for your review! It will be published after moderation.';reviewForm.innerHTML='';reviewForm.appendChild(successMessage);}});}
const faqItems=document.querySelectorAll('.faq-item');if(faqItems.length>0){faqItems.forEach(item=>{const question=item.querySelector('.faq-question');question.addEventListener('click',()=>{faqItems.forEach(otherItem=>{if(otherItem!==item&&otherItem.classList.contains('active')){otherItem.classList.remove('active');}});item.classList.toggle('active');});});}
initCalendarPlaceholder();initPaymentPlaceholder();const newsletterForm=document.querySelector('.newsletter-form');if(newsletterForm){newsletterForm.addEventListener('submit',function(e){e.preventDefault();const emailInput=this.querySelector('input[type="email"]');if(!emailInput.value.trim()||!isValidEmail(emailInput.value)){alert('Please enter a valid email address');return;}
const container=this.closest('.newsletter-section');const successMessage=document.createElement('div');successMessage.className='form-success';successMessage.style.maxWidth='500px';successMessage.style.margin='0 auto';successMessage.textContent='Thank you for subscribing to our newsletter!';container.innerHTML='';container.appendChild(successMessage);});}});function showError(input,message){clearError(input);const errorElement=document.createElement('div');errorElement.className='error-message';errorElement.textContent=message;errorElement.style.color='var(--color-primary)';errorElement.style.fontSize='0.875rem';errorElement.style.marginTop='4px';input.parentNode.appendChild(errorElement);input.style.borderColor='var(--color-primary)';}
function clearError(input){const errorElement=input.parentNode.querySelector('.error-message');if(errorElement){errorElement.remove();}
input.style.borderColor='';}
function isValidEmail(email){const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase());}
function initCalendarPlaceholder(){const calendarContainer=document.querySelector('.calendar-container');if(!calendarContainer){return;}
const calendarHeader=document.createElement('div');calendarHeader.className='calendar-header';calendarHeader.innerHTML=`<button class="calendar-nav prev-month"aria-label="Previous month">&lt;</button><h3 class="current-month">June 2025</h3><button class="calendar-nav next-month"aria-label="Next month">&gt;</button>`;const calendarGrid=document.createElement('div');calendarGrid.className='calendar-grid';const daysOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];const weekdayHeader=document.createElement('div');weekdayHeader.className='weekday-header';daysOfWeek.forEach(day=>{const dayElement=document.createElement('div');dayElement.className='weekday';dayElement.textContent=day;weekdayHeader.appendChild(dayElement);});calendarGrid.appendChild(weekdayHeader);const daysGrid=document.createElement('div');daysGrid.className='days-grid';for(let i=1;i<=30;i++){const dayElement=document.createElement('div');dayElement.className='calendar-day';const dateNumber=document.createElement('div');dateNumber.className='date-number';dateNumber.textContent=i;dayElement.appendChild(dateNumber);if(i===19){const eventIndicator=document.createElement('div');eventIndicator.className='event-indicator';eventIndicator.textContent='Muscle Energy Techniques';eventIndicator.style.backgroundColor='var(--color-secondary)';dayElement.appendChild(eventIndicator);dayElement.classList.add('has-event');}else if(i===15){const eventIndicator=document.createElement('div');eventIndicator.className='event-indicator';eventIndicator.textContent='Thai Massage Fundamentals';eventIndicator.style.backgroundColor='var(--color-secondary)';dayElement.appendChild(eventIndicator);dayElement.classList.add('has-event');}else if(i===22){const eventIndicator=document.createElement('div');eventIndicator.className='event-indicator';eventIndicator.textContent='Deep Tissue & Myofascial Release';eventIndicator.style.backgroundColor='var(--color-secondary)';dayElement.appendChild(eventIndicator);dayElement.classList.add('has-event');}
daysGrid.appendChild(dayElement);}
calendarGrid.appendChild(daysGrid);const calendarLegend=document.createElement('div');calendarLegend.className='calendar-legend';calendarLegend.innerHTML=`<div class="legend-item"><span class="legend-color"style="background-color: var(--color-secondary);"></span><span>Course Available</span></div>`;calendarContainer.appendChild(calendarHeader);calendarContainer.appendChild(calendarGrid);calendarContainer.appendChild(calendarLegend);const prevMonthBtn=calendarContainer.querySelector('.prev-month');const nextMonthBtn=calendarContainer.querySelector('.next-month');prevMonthBtn.addEventListener('click',()=>{alert('Calendar navigation would show the previous month. This is a placeholder feature that would be connected to a real calendar system in the final implementation.');});nextMonthBtn.addEventListener('click',()=>{alert('Calendar navigation would show the next month. This is a placeholder feature that would be connected to a real calendar system in the final implementation.');});const eventDays=calendarContainer.querySelectorAll('.has-event');eventDays.forEach(day=>{day.addEventListener('click',()=>{const eventText=day.querySelector('.event-indicator').textContent;alert(`You clicked on"${eventText}".In the final implementation,this would show detailed course information or take you directly to the enrollment page.`);});});}
function initPaymentPlaceholder(){const directPayBtns=document.querySelectorAll('a[href="#pay"]');const venmoBtns=document.querySelectorAll('a[href="#venmo"]');directPayBtns.forEach(btn=>{btn.addEventListener('click',function(e){e.preventDefault();showPaymentModal('direct');});});venmoBtns.forEach(btn=>{btn.addEventListener('click',function(e){e.preventDefault();showPaymentModal('venmo');});});}
function showPaymentModal(type){const modalOverlay=document.createElement('div');modalOverlay.className='modal-overlay';modalOverlay.setAttribute('role','dialog');modalOverlay.setAttribute('aria-modal','true');modalOverlay.setAttribute('aria-labelledby','payment-modal-title');const modalContent=document.createElement('div');modalContent.className='modal-content';const closeButton=document.createElement('button');closeButton.innerHTML='&times;';closeButton.className='modal-close';closeButton.setAttribute('aria-label','Close payment modal');closeButton.style.position='absolute';closeButton.style.top='10px';closeButton.style.right='15px';closeButton.style.border='none';closeButton.style.background='none';closeButton.style.fontSize='24px';closeButton.style.cursor='pointer';closeButton.style.color='var(--color-text)';closeButton.addEventListener('click',function(){document.body.removeChild(modalOverlay);});const modalHeader=document.createElement('h3');modalHeader.id='payment-modal-title';modalHeader.style.marginBottom='var(--spacing-l)';if(type==='direct'){modalHeader.textContent='Direct Payment';const paymentForm=document.createElement('form');paymentForm.innerHTML=`<div class="form-group"><label for="cardName">Name on Card</label><input type="text"id="cardName"placeholder="John Doe"required></div><div class="form-group"><label for="cardNumber">Card Number</label><input type="text"id="cardNumber"placeholder="1234 5678 9012 3456"required></div><div style="display: flex; gap: var(--spacing-m);"><div class="form-group"style="flex: 1;"><label for="expiry">Expiry Date</label><input type="text"id="expiry"placeholder="MM/YY"required></div><div class="form-group"style="flex: 1;"><label for="cvv">CVV</label><input type="text"id="cvv"placeholder="123"required></div></div><div class="form-group"><label for="amount">Amount</label><input type="text"id="amount"value="$150.00"readonly></div><p style="margin-bottom: var(--spacing-l); font-style: italic; color: var(--color-text-secondary);">This is a placeholder payment form.In the final implementation,this would be connected to a secure payment processor.</p><button type="submit"class="btn btn-primary"style="width: 100%; margin-top: var(--spacing-l);">Pay Now</button>`;paymentForm.addEventListener('submit',function(e){e.preventDefault();alert('This is a placeholder for payment processing. In a real implementation, this would securely process your payment and enroll you in the selected course.');document.body.removeChild(modalOverlay);});modalContent.appendChild(modalHeader);modalContent.appendChild(paymentForm);}else if(type==='venmo'){modalHeader.textContent='Venmo Payment';const venmoContent=document.createElement('div');venmoContent.innerHTML=`<p style="margin-bottom: var(--spacing-l);">To pay via Venmo,please send payment to:</p><div style="background-color: var(--color-tertiary); padding: var(--spacing-m); border-radius: var(--border-radius-m); text-align: center; margin-bottom: var(--spacing-l);"><p style="font-weight: bold; font-size: 1.2rem; margin-bottom: var(--spacing-s);">@bodywork-neuromuscular</p><p>Amount:$150.00</p></div><p style="margin-bottom: var(--spacing-l);">Please include your name and the course title in the payment note.</p><p style="margin-bottom: var(--spacing-l);">After sending payment,please proceed to Step 3 to complete your registration.</p><p style="margin-bottom: var(--spacing-l); font-style: italic; color: var(--color-text-secondary);">This is a placeholder for Venmo integration.In the final implementation,this would provide a direct link to the Venmo app or website.</p><div style="display: flex; justify-content: space-between;"><button id="venmo-open"class="btn btn-primary">Open Venmo App</button><button id="venmo-complete"class="btn btn-secondary">I've Completed Payment</button>
            </div>
        `;
        
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(venmoContent);
        
        // Add event listeners after appending to DOM
        setTimeout(() => {
            document.getElementById('venmo-open').addEventListener('click', function() {
                alert('This would open the Venmo app or website in a real implementation.This is a placeholder feature.');
            });
            
            document.getElementById('venmo-complete').addEventListener('click', function() {
                alert('Thank you for your payment!Please proceed to Step 3 to complete your registration.In a real implementation,we would verify your payment and automatically update your enrollment status.');
                document.body.removeChild(modalOverlay);
            });
        }, 0);
    }
    
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Trap focus within modal for accessibility
    const focusableElements = modalContent.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    firstElement.focus();
    
    modalOverlay.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modalOverlay);
        }
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
}

// Scroll Animation Functions
function initScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    // Add parallax effect to hero section
    initParallaxEffect();
    
    // Add floating animation to course cards
    initFloatingCards();
}

function initScrollHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add background blur and shadow when scrolled
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initParallaxEffect() {
    // Parallax effect disabled to prevent hero bouncing issues
    return;
}

function initFloatingCards() {
    const cards = document.querySelectorAll('.course-card, .team-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content with delay
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('hero-loaded');
        }
    }, 300);
});

// Update scroll progress indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);