const accordion = (() => {
    const questions = document.querySelectorAll('.question')

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('bold')
            question.lastElementChild.classList.toggle('arrow-flip');
            question.nextElementSibling.classList.toggle('hidden');
        })
   })
})();