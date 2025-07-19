function showContent() {
    // Tampilkan konten utama setelah nama diisi
    // document.querySelector('main').style.display = 'block';
}

// Fungsi untuk meminta nama pengguna
function askForName() {
    let userName = '';
    while (userName === null || userName.trim() === '') {
        userName = prompt("Masukkan nama Anda:");
    }
    document.getElementById('user-name').textContent = "Hello " + userName;
    showContent();
}

// Panggil fungsi saat halaman dimuat
window.onload = askForName;

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Mencegah pengiriman form default yang akan memuat ulang halaman
    event.preventDefault();

    // Mengambil nilai dari input form
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Membangun pesan untuk pop-up
    const alertMessage = `Message Sent!\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;

    // Menampilkan pop-up alert
    alert(alertMessage);

    // Opsional: Mereset form setelah pesan terkirim
    this.reset();
});