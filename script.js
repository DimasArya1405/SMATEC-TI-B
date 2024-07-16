const navbarNav = document.querySelector
('.nav-links');
const hamburger = document.querySelector
('#hamburger-menu');

document.querySelector('#hamburger-menu').
onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.filter-btn');
//     const galleryItems = document.querySelectorAll('.gallery-item');

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const category = button.getAttribute('data-category');
//             filterGallery(category);
//         });
//     });

//     function filterGallery(category) {
//         galleryItems.forEach(item => {
//             const itemCategory = item.getAttribute('data-category');
//             if (category === 'all' || itemCategory === category) {
//                 item.classList.remove('hidden');
//                 item.classList.add('visible');
//                 if (category === 'all') {
//                     item.classList.remove('top');
//                 } else if (itemCategory === category) {
//                     item.classList.add('top');
//                 } else {
//                     item.classList.remove('top');
//                 }
//             } else {
//                 item.classList.remove('visible');
//                 item.classList.add('hidden');
//                 item.classList.remove('top');
//             }
//         });
//         // To make sure the gallery gets visible after filtering
//         const gallery = document.querySelector('.gallery');
//         gallery.style.opacity = 0;
//         setTimeout(() => {
//             gallery.style.opacity = 1;
//         }, 10);
//     }

//     // Initial load: show all items
//     filterGallery('all');
// });
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category');
    const photos = document.querySelectorAll('.photo');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Hapus kelas show dari semua foto
            photos.forEach(photo => {
                photo.classList.remove('show');
                photo.style.opacity = '0';
            });

            // Hapus kelas aktif dari semua tombol kategori
            buttons.forEach(btn => btn.classList.remove('active'));

            // Tambahkan kelas aktif ke tombol yang diklik
            button.classList.add('active');

            // Tampilkan foto sesuai kategori
            if (category === 'all') {
                photos.forEach(photo => {
                    photo.classList.add('show');
                    setTimeout(() => photo.style.opacity = '1', 10); // Delay kecil untuk transisi smooth
                });
            } else {
                photos.forEach(photo => {
                    if (photo.getAttribute('data-category') === category) {
                        photo.classList.add('show');
                        setTimeout(() => photo.style.opacity = '1', 10); // Delay kecil untuk transisi smooth
                    }
                });
            }
        });
    });

    // Tampilkan semua foto pada awalnya
    document.querySelector('.category[data-category="all"]').click();
});
