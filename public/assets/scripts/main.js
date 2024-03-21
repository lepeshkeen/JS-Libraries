$(document).ready(function () {
    // Initialize Glide.js for the slider
    new Glide('.glide').mount();

    // Initialize AOS for animations on scroll
    AOS.init();

    // Initialize Masonry for the grid layout
    var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: 200
    });
});