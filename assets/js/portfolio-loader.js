const categoryData = {
  cctv: {
    title: 'CCTV & Security System',
    subtitle: 'Layanan instalasi dan pengawasan sistem keamanan CCTV terpadu.',
    images: ['assets/img/portfolio/infra.png'],
    paragraphs: [
      'Pemasangan sistem kamera pengawas (CCTV) berbasis IP maupun Analogue HD untuk menjaga keamanan aset area kantor, pabrik, maupun hunian.',
      'Integrasi sistem pemantauan terpusat yang bisa diakses secara remote kapan saja dan dari mana saja secara real-time via smartphone.',
    ],
    client: 'PT. Sentosa Abadi',
    date: '10 Januari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  networking: {
    title: 'Networking Solutions',
    subtitle: 'Perancangan dan manajemen jaringan LAN/WAN & Wi-Fi Enterprise.',
    images: ['assets/img/portfolio/infra.png'],
    paragraphs: [
      'Solusi penataan jaringan komputer yang stabil, aman, dan berkecepatan tinggi untuk mendukung kelancaran operasional perusahaan.',
      'Konfigurasi router, switch, access point, serta firewall untuk mengoptimalkan lalu lintas data bisnis Anda.',
    ],
    client: 'PT. Trans Logistik Indonesia',
    date: '15 Februari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  server: {
    title: 'Server & System Integration',
    subtitle: 'Server and system integration services to streamline your business operations.',
    images: ['assets/img/portfolio/infra.png', 'assets/img/portfolio/cabling.png', 'assets/img/portfolio/fiber_optic.png', 'assets/img/portfolio/server.png'],
    paragraphs: [
      'Server and system integration services are essential for businesses looking to streamline their operations and improve efficiency. By integrating various systems and technologies, businesses can create a cohesive IT infrastructure.',
      'Our team of experts specializes in server and system integration, providing customized solutions that meet the unique needs of each business.',
      'Our services include the installation and configuration of servers, networking equipment, and software applications, alongside ongoing support and maintenance.',
      'By leveraging our integration services, businesses can improve operational efficiency, reduce costs, and enhance overall performance.',
    ],
    client: 'PT. Goods Delivery Services',
    date: '01 March, 2026',
    url: 'https://google.com',
  },
  'fiber-optic': {
    title: 'Fiber Optic Installation',
    subtitle: 'Infrastruktur jaringan kabel fiber optik kencang tanpa hambatan.',
    images: ['assets/img/portfolio/fiber_optic.png'],
    paragraphs: ['Pemasangan kabel Fiber Optic indoor/outdoor, penyambungan (splicing), serta pengujian konektivitas menggunakan OTDR.', 'Penanganan kendala jaringan FO terputus serta optimasi jaringan transmisi data backbone.'],
    client: 'PT. Nusantara Data Center',
    date: '20 Januari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  videotron: {
    title: 'Videotron & Videowall',
    subtitle: 'Pengadaan dan instalasi media display digital Indoor/Outdoor.',
    images: ['assets/img/portfolio/infra.png'],
    paragraphs: ['Pemasangan display digital Videotron dan Videowall untuk kebutuhan ruang rapat, command center, maupun iklan outdoor.', 'Dilengkapi setup CMS (Content Management System) untuk kemudahan kontrol konten dari jauh.'],
    client: 'Mall Surabaya Center',
    date: '05 Februari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  ups: {
    title: 'UPS & Electrical System',
    subtitle: 'Sistem backup daya listrik terintegrasi untuk menjaga kelangsungan sistem.',
    images: ['assets/img/portfolio/server.png'],
    paragraphs: [
      'Pemasangan UPS Industri kapasitas besar dan penataan panel listrik khusus untuk perlindungan perangkat kritikal server/data center.',
      'Mencegah resiko kerusakan perangkat dan kehilangan data akibat pemadaman listrik mendadak.',
    ],
    client: 'PT. Bank Jaya Mandiri',
    date: '12 Februari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  cabling: {
    title: 'Cabling Management',
    subtitle: 'Manajemen dan penataan kabel data agar terstruktur dan efisien.',
    images: ['assets/img/portfolio/cabling.png'],
    paragraphs: [
      'Jasa kerapihan dan repacking kabel server rack/patch panel agar sistem mudah di-maintenance dan terhindar dari bentrok instalasi.',
      'Meliputi pemberian label (labeling), dokumentasi jalur kabel, dan instalasi ducting/cable tray.',
    ],
    client: 'Gedung Perkantoran Menara 1',
    date: '28 Februari 2026',
    url: 'https://onesolutionstechnic.com',
  },
  'it-infra': {
    title: 'IT Infrastructure Solutions',
    subtitle: 'Perancangan total infrastruktur IT dari tahap perencanaan hingga eksekusi.',
    images: ['assets/img/portfolio/infra.png'],
    paragraphs: [
      'Pembangunan server room/data center mini lengkap dengan Precision AC, Raised Floor, Access Control, dan Fire Suppression System.',
      'Solusi satu pintu bagi perusahaan yang sedang membangun kantor baru atau merenovasi infrastruktur IT lama.',
    ],
    client: 'PT. Inovasi Teknologi Bangsa',
    date: '10 Maret 2026',
    url: 'https://onesolutionstechnic.com',
  },
  'laptop-desktop': {
    title: 'Servis Laptop & Desktop',
    subtitle: 'Layanan perbaikan, pemeliharaan, dan upgrade perangkat keras maupun lunak PC & Laptop.',
    images: [
      'assets/img/portfolio/server.png', // Ganti dengan path gambar servis laptop/desktop kamu
    ],
    paragraphs: [
      'Layanan perbaikan profesional untuk berbagai masalah hardware dan software pada perangkat Laptop dan PC Desktop kantor maupun personal.',
      'Meliputi perbaikan motherboard, penggantian komponen (LCD, keyboard, Baterai, SSD/RAM Upgrade), pembersihan sistem pendingin (thermal paste), hingga instalasi sistem operasi dan software kerja.',
      'Kami juga menyediakan kontrak pemeliharaan berkala (IT Maintenance) untuk memastikan seluruh perangkat kerja di perusahaan Anda tetap berkinerja optimal.',
    ],
    client: 'PT. Digital Solusi Perkasa',
    date: '15 Maret 2026',
    url: 'https://onesolutionstechnic.com',
  },
};

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category');

  // Jika parameter tidak ada atau tidak cocok, gunakan default 'server'
  const data = categoryData[categoryKey] || categoryData['server'];

  // Update Judul & Subtitle
  document.getElementById('doc-title').innerText = `${data.title} - One Solutions Technic`;
  document.getElementById('header-title').innerText = data.title;
  document.getElementById('header-subtitle').innerText = data.subtitle;
  document.getElementById('breadcrumb-active').innerText = data.title;
  document.getElementById('details-title').innerText = data.title;

  // Render Paragraf Deskripsi
  const detailsContent = document.getElementById('details-content');
  detailsContent.innerHTML = '';
  data.paragraphs.forEach((text) => {
    const p = document.createElement('p');
    p.innerText = text;
    detailsContent.appendChild(p);
  });

  // Render Informasi Proyek (Sidebar kanan)
  document.getElementById('info-category').innerText = data.title;
  document.getElementById('info-client').innerText = data.client;
  document.getElementById('info-date').innerText = data.date;

  const infoUrl = document.getElementById('info-url');
  infoUrl.href = data.url;
  infoUrl.innerText = data.url.replace('https://', '').replace('http://', '');

  const visitBtn = document.getElementById('info-btn-visit');
  visitBtn.href = data.url;

  // Render Slider Gambar
  const sliderWrapper = document.getElementById('slider-wrapper');
  sliderWrapper.innerHTML = '';
  data.images.forEach((imgSrc) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${imgSrc}" alt="${data.title}" />`;
    sliderWrapper.appendChild(slide);
  });

  // Re-initialize Swiper
  if (typeof Swiper !== 'undefined') {
    new Swiper('.portfolio-details-slider', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }
});
