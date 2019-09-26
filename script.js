$(":checkbox").change(function () {
    $(this).parent().parent().toggleClass('checkbox-border');
});

document.querySelector('.form__dropdown').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.main').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
    document.querySelector('.footer').classList.add('blur');
})


document.querySelector('span.hide').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur')
    document.querySelector('.header').classList.remove('blur');
    document.querySelector('.footer').classList.remove('blur');
})