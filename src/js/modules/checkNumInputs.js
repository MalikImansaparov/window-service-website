const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
//replace string to empty space
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;