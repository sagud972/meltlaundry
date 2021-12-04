const faqPage = document.getElementById('faq-page');
const dynamicFAQs = document.querySelectorAll('.dynamic-faq-block');
const faqWrapper = document.createElement('div');

dynamicFAQs.forEach(child => {
    faqWrapper.appendChild(child);
});
faqPage.appendChild(faqWrapper);
