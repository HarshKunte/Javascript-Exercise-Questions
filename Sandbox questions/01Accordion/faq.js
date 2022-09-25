const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector('.accordian_body');
const faqs = [];

faqData.forEach(faq =>{
  createFaq(faq)
})

const showBtns = document.querySelectorAll(".show_btn")

showBtns.forEach(showBtn => {
    showBtn.addEventListener('click', showFaq);
});

function showFaq(event) {
  const btn = event.target;
  btnStatusUpdate(btn)
  let faqHeader = btn.parentElement;
  let p = faqHeader.nextSibling;
  p.classList.contains('hidden') ? p.classList.remove('hidden') : p.classList.add('hidden');
}

function createFaq(faq) {
    const faqDiv = document.createElement('div')
    const faqHeader = document.createElement('div')
    const hTag = document.createElement('h3');
    const showIcon = document.createElement('button')
    const faqInfo = document.createElement('p');

    faqDiv.classList.add('faq');
    faqHeader.classList.add('faq_header');
    showIcon.classList.add('show_btn');
    faqInfo.classList.add('hidden');

    hTag.innerText = faq.question;
    showIcon.innerText = '+'
    faqInfo.innerText = faq.answer

    faqHeader.appendChild(hTag)
    faqHeader.appendChild(showIcon)
    faqDiv.appendChild(faqHeader)
    faqDiv.appendChild(faqInfo)
    accordianBody.appendChild(faqDiv)
}

function btnStatusUpdate(btn) {
  btn.innerText == '+'? btn.innerText = '-' : btn.innerText = '+';
}


