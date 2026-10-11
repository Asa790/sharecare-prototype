import { COLORS } from '../constants/theme';

export const HERO_BANNERS = [
  {
    id: 'b1',
    title: 'Connecting Hearts Through Kindness',
    subtitle: 'Bantu sesama dan ciptakan perubahan nyata hari ini',
    badge: 'Program Unggulan',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'b2',
    title: 'Aksi Peduli Banjir & Bencana',
    subtitle: 'Salurkan uluran tangan cepat untuk warga terdampak',
    badge: 'Tanggap Darurat',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
  },
];

export const CATEGORIES = [
  {
    id: 'edukasi',
    title: 'Edukasi',
    iconName: 'school-outline',
    bgColor: COLORS.secondary, // Bright Yellow
    iconColor: COLORS.textDark,
  },
  {
    id: 'lingkungan',
    title: 'Lingkungan',
    iconName: 'leaf-outline',
    bgColor: COLORS.subAccent, // Muted Teal Green
    iconColor: '#FFFFFF',
  },
  {
    id: 'kesehatan',
    title: 'Kesehatan',
    iconName: 'heart-outline',
    bgColor: COLORS.accent, // Warm Orange
    iconColor: '#FFFFFF',
  },
  {
    id: 'bencana',
    title: 'Bencana',
    iconName: 'alert-circle-outline',
    bgColor: '#FF5E5E', // Warm Red Alert for Disaster
    iconColor: '#FFFFFF',
  },
];

export const DONASI_DATA = [
  {
    id: 'd1',
    title: 'Donasi Banjir Bandang Aceh',
    organization: 'Relawan Tanggap Darurat',
    category: 'Bencana',
    imageUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=600&auto=format&fit=crop',
    collected: 18500000,
    target: 25000000,
    progress: 74,
    daysLeft: 5,
    location: 'Jl. Samudera No. 4, Lhoksukon, Aceh Utara, Indonesia',
    contactEmail: 'tanggap.bencana@gmail.com',
    contactPhone: '081298765432',
    website: 'www.tanggapdarurat.org',
    description:
      'Curah hujan yang tinggi telah menyebabkan banjir bandang melanda pemukiman warga di Aceh Utara. Ribuan keluarga membutuhkan bantuan mendesak berupa makanan siap saji, air bersih, pakaian layak pakai, dan obat-obatan. Uluran tangan Anda sangat berarti untuk memulihkan senyum mereka.',
  },
  {
    id: 'd2',
    title: 'Donasi Panti Asuhan St. Andreas',
    organization: 'Yayasan Kasih Bangsa',
    category: 'Edukasi & Sosial',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    collected: 11000000,
    target: 20000000,
    progress: 55,
    daysLeft: 12,
    location: 'Jalan Melati Kasih No. 12, Jatiasih, Bekasi 17423, Indonesia.',
    contactEmail: 'bersama.kitabisa@gmail.com',
    contactPhone: '809876543',
    website: 'www.kitabisa.com',
    description:
      'Di balik senyum anak-anak Panti Asuhan St. Andreas, masih ada banyak kebutuhan yang harus dipenuhi setiap harinya. Melalui donasi kecil yang Anda berikan, Anda telah membantu menciptakan harapan, kenyamanan, dan masa depan yang lebih baik bagi mereka.',
  },
  {
    id: 'd3',
    title: 'Bantu Renovasi Sarana TK Alam Bersih',
    organization: 'Peduli Pendidikan Mandiri',
    category: 'Edukasi',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    collected: 8400000,
    target: 12000000,
    progress: 70,
    daysLeft: 8,
    location: 'Jl. Pengasinan Raya No. 15, Bekasi Timur 17115, Indonesia.',
    contactEmail: 'pendidikan.alam@gmail.com',
    contactPhone: '082155443322',
    website: 'www.pendidikanmandiri.id',
    description:
      'TK Alam Bersih adalah sarana belajar bagi anak-anak prasejahtera yang kini mengalami kerusakan atap dan ruang kelas. Donasi ini akan dialokasikan penuh untuk perbaikan fasilitas belajar yang aman dan nyaman.',
  },
  {
    id: 'd4',
    title: 'Bantu Health Check Up Gratis RS Mulia Bakti',
    organization: 'Komunitas Medis Peduli',
    category: 'Kesehatan',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
    collected: 15400000,
    target: 28000000,
    progress: 55,
    daysLeft: 16,
    location: 'Jl. Veteran No. 46, Margajaya, Bekasi Selatan 17141, Indonesia.',
    contactEmail: 'medispeduli@gmail.com',
    contactPhone: '081399887766',
    website: 'www.medispeduli.org',
    description:
      'Pemeriksaan kesehatan gratis diperuntukkan bagi lansia dan warga kurang mampu di daerah pinggiran kota. Donasi mendukung penyediaan obat-obatan esensial, tensimeter, dan alat uji darah gratis.',
  },
];

export const VOLUNTEER_DATA = [
  {
    id: 'v1',
    title: 'Volunteer Kerja Bhakti Alun-alun Kota Bekasi',
    organization: 'Satu Bangsa Community',
    category: 'Lingkungan',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop',
    currentParticipants: 73,
    maxParticipants: 100,
    date: '10 Mei 2026',
    location: 'Jl. Veteran No. 46, Margajaya, Bekasi Selatan, Bekasi 17141, Indonesia.',
    contactEmail: 'satubangsa@gmail.com',
    contactPhone: '801234567',
    website: 'www.ksatubangsa.com',
    description:
      'Ciptakan lingkungan yang lebih bersih melalui kegiatan ini, para volunteer diajak untuk bersama-sama menjaga kebersihan area publik sekaligus membangun rasa peduli terhadap lingkungan sekitar.',
  },
  {
    id: 'v2',
    title: 'Volunteer Bersih Sungai Ciliwung & Tebet',
    organization: 'Gerakan Bersih Nusantara',
    category: 'Lingkungan',
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=600&auto=format&fit=crop',
    currentParticipants: 55,
    maxParticipants: 100,
    date: '11 Mei 2026',
    location: 'Tebet Eco Park & Bantaran Kali Ciliwung, Jakarta Selatan.',
    contactEmail: 'bersihnusan@gmail.com',
    contactPhone: '085712349988',
    website: 'www.bersihnusantara.org',
    description:
      'Aksi kolaboratif membersihkan aliran sungai dan memilah sampah plastik bersama komunitas lokal untuk meminimalisir potensi banjir dan pencemaran air.',
  },
  {
    id: 'v3',
    title: 'Volunteer Aksi Donor Darah Puskesmas Kranji',
    organization: 'Palang Merah & Puskesmas',
    category: 'Kesehatan',
    imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=600&auto=format&fit=crop',
    currentParticipants: 55,
    maxParticipants: 100,
    date: '15 Mei 2026',
    location: 'Jl. Jenderal Sudirman No. 2, Kranji, Bekasi Barat 17135, Indonesia.',
    contactEmail: 'pmi.kranji@gmail.com',
    contactPhone: '081288331122',
    website: 'www.pmikranji.org',
    description:
      'Dibutuhkan relawan pendukung untuk registrasi donor, pengecekan tensi pendonor, serta pembagian konsumsi nutrisi pasca-donor darah.',
  },
  {
    id: 'v4',
    title: 'Volunteer Edukasi Literasi Anak Pesisir',
    organization: 'Sahabat Pesisir Mengajar',
    category: 'Edukasi',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    currentParticipants: 28,
    maxParticipants: 40,
    date: '20 Mei 2026',
    location: 'Desa Pantai Harapan Jaya, Muara Gembong, Kabupaten Bekasi.',
    contactEmail: 'sahabatpesisir@gmail.com',
    contactPhone: '081900112233',
    website: 'www.pesisirmengajar.id',
    description:
      'Program mengajar membaca ceria, dongeng interaktif, dan donasi buku bacaan untuk adik-adik di perkampungan nelayan pesisir Bekasi.',
  },
];
