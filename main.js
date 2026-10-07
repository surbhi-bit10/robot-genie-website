/**
 * Robot Genie - Main JavaScript
 * Vanilla JS interactivity for responsive navigation, sticky header, scroll reveals,
 * course filtering, FAQ accordion, form validation, and URL query handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initStickyHeader();
  initScrollReveal();
  initCourseFilter();
  initAccordion();
  initFormValidation();
  initQueryPreselect();
  initSmoothScroll();
});

/**
 * 1. Mobile Navigation Drawer & Hamburger Toggle
 */
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenuWrapper) return;

  function toggleMenu(forceClose = false) {
    const isOpening = forceClose ? false : !hamburger.classList.contains('is-active');

    hamburger.classList.toggle('is-active', isOpening);
    navMenuWrapper.classList.toggle('is-open', isOpening);
    hamburger.setAttribute('aria-expanded', isOpening ? 'true' : 'false');

    if (isOpening) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  hamburger.addEventListener('click', () => toggleMenu());

  // Close menu when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('is-active')) {
        toggleMenu(true);
      }
    });
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('is-active')) {
      toggleMenu(true);
    }
  });

  // Close menu when resizing beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && hamburger.classList.contains('is-active')) {
      toggleMenu(true);
    }
  });
}

/**
 * 2. Sticky Header Scroll Elevation Effect
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/**
 * 3. Subtle Scroll-Reveal Animation using IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
}

/**
 * 4. Course Filter System (All, Marketing, Data, Business, AI)
 */
function initCourseFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  if (!filterButtons.length || !courseCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active state on buttons
      filterButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards with smooth visibility handling
      courseCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          card.classList.add('is-visible');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * 5. FAQ Accordion Component
 */
function initAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-active');

      // Close all other accordion items for clean accordion UX
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-active');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      item.classList.toggle('is-active', !isOpen);
      questionBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

/**
 * 6. Form Validation & Submission Handler (Contact Enquiry & Home Reservation)
 */
function initFormValidation() {
  const enquiryForm = document.getElementById('enquiry-form');
  const reserveForm = document.getElementById('reserve-form');

  if (enquiryForm) {
    setupForm(enquiryForm, {
      hasEmail: true,
      hasMessage: true,
      successTitle: 'Enquiry Received!',
      successMsg: (name, course) =>
        `Thank you, ${name}! Your enquiry for "${course}" has been submitted. Our Laxmi Nagar academic advisor will contact you within 24 business hours.`,
    });
  }

  if (reserveForm) {
    setupForm(reserveForm, {
      hasEmail: false,
      hasMessage: false,
      successTitle: 'Seat Reservation Requested!',
      successMsg: (name, course) =>
        `Thank you, ${name}! Your priority seat request for "${course}" is reserved. Our admissions coordinator will reach out shortly.`,
    });
  }

  function setupForm(form, config) {
    const successBanner = form.parentElement.querySelector('.form-success-banner');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Full Name Validation
      const nameInput = form.querySelector('[name="fullname"]');
      if (nameInput) {
        const val = nameInput.value.trim();
        if (val.length < 2) {
          setError(nameInput, 'Please enter your full name (at least 2 letters).');
          isValid = false;
        } else {
          clearError(nameInput);
        }
      }

      // Phone Validation (10-digit Indian Mobile)
      const phoneInput = form.querySelector('[name="phone"]');
      if (phoneInput) {
        let raw = phoneInput.value.trim().replace(/[\s\-\+\(\)]/g, '');
        if (raw.startsWith('91') && raw.length === 12) {
          raw = raw.slice(2);
        }
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(raw)) {
          setError(phoneInput, 'Please enter a valid 10-digit mobile number.');
          isValid = false;
        } else {
          clearError(phoneInput);
        }
      }

      // Email Validation
      if (config.hasEmail) {
        const emailInput = form.querySelector('[name="email"]');
        if (emailInput) {
          const val = emailInput.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(val)) {
            setError(emailInput, 'Please enter a valid email address.');
            isValid = false;
          } else {
            clearError(emailInput);
          }
        }
      }

      // Course Selection Validation
      const courseSelect = form.querySelector('[name="course"]');
      if (courseSelect) {
        const val = courseSelect.value.trim();
        if (!val) {
          setError(courseSelect, 'Please select a course track from the list.');
          isValid = false;
        } else {
          clearError(courseSelect);
        }
      }

      // Message Validation
      if (config.hasMessage) {
        const messageInput = form.querySelector('[name="message"]');
        if (messageInput) {
          const val = messageInput.value.trim();
          if (val.length < 5) {
            setError(messageInput, 'Please share a brief message or question (at least 5 characters).');
            isValid = false;
          } else {
            clearError(messageInput);
          }
        }
      }

      // If valid, show success state
      if (isValid) {
        const studentName = nameInput ? nameInput.value.trim() : 'Learner';
        const selectedCourse = courseSelect && courseSelect.options[courseSelect.selectedIndex]
          ? courseSelect.options[courseSelect.selectedIndex].text
          : 'your selected course';

        if (successBanner) {
          const titleEl = successBanner.querySelector('.form-success-title');
          const textEl = successBanner.querySelector('.form-success-text');

          if (titleEl) titleEl.textContent = config.successTitle;
          if (textEl) textEl.textContent = config.successMsg(studentName, selectedCourse);

          successBanner.classList.add('is-visible');
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        form.reset();
      }
    });

    // Real-time error clearing on input change
    form.querySelectorAll('.form-control, .form-select, .form-textarea').forEach((input) => {
      input.addEventListener('input', () => clearError(input));
      input.addEventListener('change', () => clearError(input));
    });
  }

  function setError(input, message) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    const errSpan = group.querySelector('.form-error');
    if (errSpan) {
      errSpan.textContent = message;
    }
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.remove('has-error');
  }
}

/**
 * 7. Pre-select Course from URL Query Parameter
 */
function initQueryPreselect() {
  const params = new URLSearchParams(window.location.search);
  const courseSlug = params.get('course');
  if (!courseSlug) return;

  const courseSelects = document.querySelectorAll('select[name="course"]');
  courseSelects.forEach((select) => {
    Array.from(select.options).forEach((opt) => {
      if (opt.value.toLowerCase() === courseSlug.toLowerCase() || opt.value.toLowerCase().includes(courseSlug.toLowerCase())) {
        select.value = opt.value;
      }
    });
  });
}

/**
 * 8. Smooth Scrolling for Internal Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
