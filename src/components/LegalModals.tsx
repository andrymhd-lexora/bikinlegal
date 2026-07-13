import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Scale, FileText, Landmark, Phone, Mail, Globe } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  const isOpen = type !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            id="legal-modal-backdrop"
          />

          {/* Modal Content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[85vh] md:max-h-[80vh] flex flex-col bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 text-left text-slate-300"
            id="legal-modal-content"
          >
            {/* Header */}
            <div className="p-6 md:px-8 border-b border-white/5 flex justify-between items-center bg-slate-950/40 shrink-0">
              <div className="flex items-center space-x-3">
                {type === 'terms' ? (
                  <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 text-emerald-400">
                    <Scale className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-cyan-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg md:text-xl font-display font-black tracking-tight text-white uppercase">
                    {type === 'terms' ? 'Syarat & Ketentuan Umum' : 'Privacy Policy (Kebijakan Privasi)'}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-wider">
                    BIKINLEGAL.COM • PT. BIKIN LEGALITAS BISNIS • Versi 1.0 – 2026
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Close modal"
                id="legal-close-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-full space-y-8 font-sans text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/5">
              {type === 'terms' ? (
                /* TERMS AND CONDITIONS CONTENT */
                <div className="space-y-6">
                  <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                    <p className="text-slate-300">
                      Dokumen ini berisi Syarat dan Ketentuan penggunaan layanan{' '}
                      <strong className="text-white">BikinLegal.com</strong>, yaitu platform layanan digital dan konsultasi
                      legalitas usaha yang dikelola oleh <strong className="text-white">PT. Bikin Legalitas Bisnis</strong>.
                      Dengan menggunakan layanan BikinLegal.com, Anda dianggap telah membaca, memahami, dan menyetujui seluruh
                      isi Syarat & Ketentuan ini.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      1. DEFINISI
                    </h4>
                    <p className="text-slate-400">Dalam dokumen ini:</p>
                    <ul className="space-y-3 pl-2 sm:pl-4">
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0">1.1</span>
                        <span>
                          <strong className="text-slate-200">BikinLegal.com:</strong> Adalah platform layanan digital dan jasa
                          pengurusan legalitas usaha yang mencakup pendirian badan usaha dan perizan bisnis.
                        </span>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0">1.2</span>
                        <div className="space-y-1.5">
                          <strong className="text-slate-200 block">Layanan:</strong>
                          <span className="text-slate-400 block pb-1">
                            Seluruh jasa yang disediakan oleh BikinLegal.com, termasuk namun tidak terbatas pada:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pl-4 border-l border-white/5 bg-slate-950/20 p-3 rounded-xl">
                            <div>• Pendirian PT & PT Perorangan</div>
                            <div>• Pendirian CV</div>
                            <div>• Pendirian Koperasi</div>
                            <div>• Pendirian Yayasan</div>
                            <div>• Pengurusan NIB & OSS</div>
                            <div>• NPWP Badan & Pribadi</div>
                            <div>• SPPL</div>
                            <div>• SLF (Sertifikat Laik Fungsi)</div>
                            <div>• PBG (Persetujuan Bangunan Gedung)</div>
                            <div>• IMB (jika masih berlaku di wilayah tertentu)</div>
                            <div>• Sertifikasi ISO</div>
                            <div>• Konsultasi legalitas & perizinan usaha</div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0">1.3</span>
                        <span>
                          <strong className="text-slate-200">Klien / Pengguna:</strong> Individu, badan usaha, atau organisasi
                          yang menggunakan layanan BikinLegal.com.
                        </span>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0">1.4</span>
                        <span>
                          <strong className="text-slate-200">Dokumen Legalitas:</strong> Seluruh dokumen yang dihasilkan dari layanan,
                          termasuk akta, SK, NIB, sertifikat, dan dokumen pendukung lainnya.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      2. RUANG LINGKUP LAYANAN
                    </h4>
                    <p className="text-slate-400">BikinLegal.com menyediakan layanan berupa:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Konsultasi legalitas usaha</li>
                      <li>Pengurusan dokumen pendirian usaha</li>
                      <li>Pengurusan perizinan OSS RBA</li>
                      <li>Pembuatan dokumen administratif usaha</li>
                      <li>Pengurusan sertifikasi & standar usaha</li>
                    </ul>
                    <p className="text-[11px] text-slate-400 italic bg-slate-950/20 p-2.5 rounded-lg border border-white/5">
                      Note: BikinLegal.com dapat menambah, mengubah, atau menghentikan layanan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      3. PERSETUJUAN PENGGUNAAN
                    </h4>
                    <p className="text-slate-400">Dengan menggunakan layanan, Klien menyatakan bahwa:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Data yang diberikan adalah benar dan sah</li>
                      <li>Memiliki kewenangan untuk mengajukan permohonan legalitas</li>
                      <li>Menyetujui seluruh proses pengurusan dilakukan oleh tim BikinLegal.com</li>
                      <li>Bersedia mengikuti prosedur dan ketentuan yang berlaku</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      4. DATA & DOKUMEN KLIEN
                    </h4>
                    <p className="text-slate-300 font-medium">Klien wajib menyediakan:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Data identitas yang valid</li>
                      <li>Data usaha yang benar</li>
                      <li>Dokumen pendukung sesuai kebutuhan perizinan</li>
                    </ul>
                    <p className="text-slate-300 font-medium pt-1.5">BikinLegal.com tidak bertanggung jawab atas:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Data yang tidak benar</li>
                      <li>Penolakan dari instansi pemerintah akibat kesalahan data Klien</li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      5. PROSES LAYANAN
                    </h4>
                    <p className="text-slate-400">Proses layanan meliputi:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/20 p-3 rounded-2xl border border-white/5 text-center">
                      <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs block mb-1">01</span>
                        <span className="text-[11px] text-slate-200">Verifikasi data</span>
                      </div>
                      <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs block mb-1">02</span>
                        <span className="text-[11px] text-slate-200">Pengajuan Instansi</span>
                      </div>
                      <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs block mb-1">03</span>
                        <span className="text-[11px] text-slate-200">Administrasi</span>
                      </div>
                      <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs block mb-1">04</span>
                        <span className="text-[11px] text-slate-200">Penerbitan Dokumen</span>
                      </div>
                    </div>
                    <p className="text-slate-400">Waktu pengerjaan dapat berbeda tergantung:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Instansi pemerintah</li>
                      <li>Jenis layanan</li>
                      <li>Kelengkapan dokumen</li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      6. PEMBAYARAN
                    </h4>
                    <p className="text-slate-400">Ketentuan pembayaran:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Pembayaran dilakukan di muka atau sesuai kesepakatan.</li>
                      <li>Biaya layanan tidak dapat dikembalikan (non-refundable), kecuali ada kesepakatan tertulis.</li>
                      <li>Biaya pihak ketiga (PNBP, pajak, notaris, dll) ditanggung klien.</li>
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      7. KEBIJAKAN REFUND
                    </h4>
                    <p className="text-slate-400">Refund hanya berlaku jika:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Layanan belum diproses sama sekali.</li>
                      <li>Terdapat kesalahan dari pihak BikinLegal.com yang menyebabkan layanan tidak dapat dilakukan.</li>
                    </ul>
                    <p className="text-[11px] text-amber-400 font-mono uppercase tracking-wide">
                      ⚠️ Jika proses sudah berjalan, maka tidak dapat dilakukan pengembalian dana.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      8. TANGGUNG JAWAB
                    </h4>
                    <p className="text-slate-300">
                      BikinLegal.com bertindak sebagai penyedia jasa pengurusan, bukan lembaga pemerintah.
                    </p>
                    <p className="text-slate-400">BikinLegal.com tidak bertanggung jawab atas:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Penolakan permohonan oleh instansi terkait</li>
                      <li>Perubahan regulasi pemerintah</li>
                      <li>Keterlambatan proses dari pihak ketiga</li>
                      <li>Kesalahan data dari klien</li>
                    </ul>
                  </div>

                  {/* Section 9 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      9. HAK KEKAYAAN INTELEKTUAL
                    </h4>
                    <p className="text-slate-300">Seluruh:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Brand BikinLegal.com</li>
                      <li>Sistem, desain, konten, dan materi</li>
                      <li>Template dokumen dan SOP</li>
                    </ul>
                    <p className="text-slate-300 font-medium">
                      merupakan milik <strong className="text-emerald-400">PT. Bikin Legalitas Bisnis</strong> dan tidak boleh digunakan tanpa izin tertulis.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      10. PENGHENTIAN LAYANAN
                    </h4>
                    <p className="text-slate-400">BikinLegal.com berhak menolak atau menghentikan layanan apabila:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-300 list-disc">
                      <li>Data tidak valid</li>
                      <li>Terindikasi aktivitas ilegal</li>
                      <li>Penyalahgunaan layanan</li>
                      <li>Pelanggaran ketentuan hukum Indonesia</li>
                    </ul>
                  </div>

                  {/* Section 11 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      11. KERAHASIAAN DATA
                    </h4>
                    <p className="text-slate-300">
                      BikinLegal.com menjaga kerahasiaan data klien dan tidak akan membagikannya kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      12. PERUBAHAN KETENTUAN
                    </h4>
                    <p className="text-slate-300">
                      Ketentuan ini dapat diperbarui sewaktu-waktu. Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap versi terbaru.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      13. HUKUM YANG BERLAKU
                    </h4>
                    <p className="text-slate-300">
                      Syarat & Ketentuan ini tunduk pada hukum Republik Indonesia. Apabila terjadi sengketa, akan diselesaikan secara musyawarah atau melalui pengadilan yang berwenang di Indonesia.
                    </p>
                  </div>

                  {/* Section 14 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      14. KONTAK RESMI
                    </h4>
                    <div className="p-4 bg-slate-950/40 rounded-2xl border border-white/5 space-y-2.5 text-xs sm:text-sm font-sans">
                      <p className="text-white font-bold font-display">PT. BIKIN LEGALITAS BISNIS</p>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <FileText className="h-4 w-4 text-emerald-400" />
                        <span>Produk: BikinLegal.com</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Phone className="h-4 w-4 text-emerald-400" />
                        <span>WhatsApp: +62 858 3083 1654</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Mail className="h-4 w-4 text-emerald-400" />
                        <span>Email: info@bikinlegal.com</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Globe className="h-4 w-4 text-emerald-400" />
                        <span>Website: www.bikinlegal.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 15 */}
                  <div className="space-y-2 text-center pt-4 border-t border-white/5">
                    <h4 className="text-sm font-bold font-display text-white uppercase tracking-wide">
                      15. PENUTUP
                    </h4>
                    <p className="text-slate-400 text-xs italic">
                      With using the service BikinLegal.com, Klien menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan ini secara sadar tanpa paksaan.
                    </p>
                  </div>
                </div>
              ) : (
                /* PRIVACY POLICY CONTENT */
                <div className="space-y-6">
                  <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                    <p className="text-slate-300">
                      Kebijakan Privasi ini menjelaskan bagaimana{' '}
                      <strong className="text-white">BikinLegal.com</strong> mengumpulkan, menggunakan, menyimpan, dan melindungi
                      data pribadi pengguna layanan kami. Dengan menggunakan layanan BikinLegal.com, Anda menyetujui seluruh
                      ketentuan dalam Kebijakan Privasi ini.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      1. DEFINISI
                    </h4>
                    <ul className="space-y-3 pl-2 sm:pl-4">
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold shrink-0">1.1</span>
                        <span>
                          <strong className="text-slate-200">BikinLegal.com:</strong> Adalah layanan digital dan platform jasa
                          pengurusan legalitas usaha yang dimiliki oleh <strong className="text-white">PT. Bikin Legalitas Bisnis</strong>.
                        </span>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold shrink-0">1.2</span>
                        <span>
                          <strong className="text-slate-200">Layanan:</strong> Seluruh layanan yang mencakup: Pendirian PT & PT Perorangan,
                          CV, Koperasi, Yayasan, NIB & OSS, NPWP, SPPL, SLF, PBG, IMB, Sertifikasi ISO, dan Konsultasi legalitas usaha.
                        </span>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold shrink-0">1.3</span>
                        <span>
                          <strong className="text-slate-200">Pengguna / Klien:</strong> Individu atau badan usaha yang menggunakan layanan BikinLegal.com.
                        </span>
                      </li>
                      <li className="list-none flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold shrink-0">1.4</span>
                        <div className="space-y-1">
                          <strong className="text-slate-200 block">Data Pribadi:</strong>
                          <span className="text-slate-400">Informasi yang dapat mengidentifikasi pengguna seperti:</span>
                          <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300 pl-4 border-l border-white/5 mt-1">
                            <div>• Nama lengkap</div>
                            <div>• Nomor telepon aktif</div>
                            <div>• Alamat email resmi</div>
                            <div>• Alamat domisili / kantor</div>
                            <div>• Data identitas resmi (KTP, NPWP, dll)</div>
                            <div>• Data usaha utama & dokumen pendukung</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      2. INFORMASI YANG KAMI KUMPULKAN
                    </h4>
                    <p className="text-slate-400">Kami dapat mengumpulkan data berikut:</p>
                    <ul className="space-y-3 pl-2 sm:pl-4">
                      <li className="list-none">
                        <strong className="text-slate-200">2.1 Data yang diberikan langsung:</strong>
                        <p className="text-slate-400 pl-4">• Data pendaftaran akun atau pemesanan layanan, data identitas pribadi, data perusahaan/usaha, serta dokumen legalitas pendukung.</p>
                      </li>
                      <li className="list-none">
                        <strong className="text-slate-200">2.2 Data komunikasi:</strong>
                        <p className="text-slate-400 pl-4">• Percakapan / chat via WhatsApp, komunikasi email, dan riwayat konsultasi legalitas bersama tim administrasi.</p>
                      </li>
                      <li className="list-none">
                        <strong className="text-slate-200">2.3 Data teknis:</strong>
                        <p className="text-slate-400 pl-4">• Alamat IP web visitor, jenis perangkat yang dipakai, analisis aktivitas penggunaan layanan, cookies pelacakan dasar, dan log sistem.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      3. PENGGUNAAN DATA
                    </h4>
                    <p className="text-slate-400">Data yang kami kumpulkan digunakan eksklusif untuk:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Memproses permintaan layanan pengurusan legalitas perusahaan.</li>
                      <li>Verifikasi identitas pendiri dan validasi kebenaran dokumen bisnis.</li>
                      <li>Pengurusan ke instansi kementerian pemerintah (OSS RBA, Kemenkumham, Direktorat Pajak, dll).</li>
                      <li>Memberikan update proses penyusunan akta, SK, dan perizinan.</li>
                      <li>Menghubungi pengguna terkait tindak lanjut layanan konsultasi.</li>
                      <li>Peningkatan kualitas performa platform layanan BikinLegal.com.</li>
                      <li>Kepatuhan penuh terhadap hukum regulasi undang-undang Republik Indonesia yang berlaku.</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      4. PENGUNGKAPAN DATA KEPADA PIHAK KETIGA
                    </h4>
                    <p className="text-slate-400">Kami dapat membagikan data kepada mitra instansi berikut:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Instansi pemerintah berwenang (OSS, Kemenkumham, Direktorat Jenderal Pajak, dll).</li>
                      <li>Notaris rekanan resmi dan penasihat hukum litigasi/non-litigasi.</li>
                      <li>Penyedia layanan pendukung (email server, storage cloud, database system administrasi).</li>
                      <li>Pihak berwajib lainnya apabila diwajibkan secara mutlak oleh landasan hukum negara Indonesia.</li>
                    </ul>
                    <p className="text-cyan-400 font-mono text-xs font-semibold bg-slate-950/20 p-2.5 rounded-lg border border-white/5">
                      ✓ Kami berkomitmen penuh tidak pernah menjual atau memperdagangkan data pribadi pengguna kepada pihak luar manapun.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      5. PENYIMPANAN DATA
                    </h4>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Data disimpan selama pengguna aktif menggunakan layanan kami.</li>
                      <li>Data dapat disimpan lebih lama untuk melayani kepentingan kepatuhan regulasi hukum nasional dan pembukuan administrasi.</li>
                      <li>Data akan segera dihapus secara aman atau dianonimkan secara permanen apabila tidak lagi diperlukan dalam operasional sistem.</li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      6. KEAMANAN DATA
                    </h4>
                    <p className="text-slate-400">BikinLegal.com berkomitmen tinggi menjaga keamanan data dengan:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Sistem penyimpanan database terenkripsi secara aman.</li>
                      <li>Kontrol otorisasi akses staf internal yang sangat terbatas.</li>
                      <li>Proteksi firewall dan penangkalan akses ilegal yang tidak sah.</li>
                      <li>Pemantauan keamanan sistem server secara berkala.</li>
                    </ul>
                    <p className="text-slate-500 text-[11px] italic">
                      Disclaimer: Namun, kami tidak dapat menjamin sistem 100% bebas dari risiko teknis eksternal seperti gangguan keamanan internet global atau serangan siber.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      7. HAK PENGGUNA
                    </h4>
                    <p className="text-slate-400">Pengguna memiliki hak penuh untuk:</p>
                    <ul className="space-y-2 pl-4 text-slate-300 list-disc">
                      <li>Mengakses kembali data pribadi yang tersimpan dalam sistem kami.</li>
                      <li>Memperbarui atau memperbaiki kekeliruan data pendirian yang pernah diserahkan.</li>
                      <li>Meminta penghapusan data secara tuntas (sesuai koridor hukum dsan ketentuan berlaku).</li>
                      <li>Menarik kembali persetujuan penggunaan data tertentu.</li>
                    </ul>
                    <span className="block text-xs font-mono text-cyan-400">
                      Permintaan dapat diajukan secara langsung melalui kontak bantuan resmi kami.
                    </span>
                  </div>

                  {/* Section 8 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      8. COOKIE & TEKNOLOGI PELACAKAN
                    </h4>
                    <p className="text-slate-400">BikinLegal.com dapat menggunakan cookie atau teknologi pelacakan internet serupa untuk:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-400 list-disc">
                      <li>Meningkatkan kenyamanan navigasi website dan pengalaman pengguna.</li>
                      <li>Menganalisis frekuensi penggunaan layanan dan profil demografi umum.</li>
                      <li>Mendukung optimalisasi dan efisiensi sistem internal.</li>
                    </ul>
                  </div>

                  {/* Section 9 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      9. LAYANAN PIHAK KETIGA
                    </h4>
                    <p className="text-slate-400">Layanan kami terintegrasi aman dengan pihak ketiga penyedia infrastruktur seperti:</p>
                    <ul className="space-y-1.5 pl-4 text-slate-300 list-disc">
                      <li>WhatsApp Official Business API</li>
                      <li>Gerbang Pembayaran Elektronik (Payment Gateway)</li>
                      <li>Sistem OSS RBA dan KBLI Instansi Pemerintah RI</li>
                      <li>External server cloud hosting</li>
                    </ul>
                    <p className="text-[11px] text-slate-500 italic bg-slate-950/20 p-2.5 rounded-lg border border-white/5">
                      Disclaimer: Kami tidak bertanggung jawab secara langsung atas kebijakan privasi yang dijalankan masing-masing pihak ketiga eksternal tersebut. Klien dihimbau membaca kebijakan privasi pihak tersebut secara independen.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      10. PERUBAHAN KEBIJAKAN PRIVASI
                    </h4>
                    <p className="text-slate-300">
                      Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan terbaru akan diumumkan transparan melalui media berikut:
                    </p>
                    <ul className="space-y-1 pl-4 text-slate-400 list-disc">
                      <li>Situs resmi BikinLegal.com</li>
                      <li>Dashboard aplikasi Klien</li>
                      <li>Pemberitahuan email atau chat WhatsApp resmi</li>
                    </ul>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                      Penggunaan layanan setelah adanya perubahan dianggap menyetujui kebijakan privasi terbaru.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      11. HUKUM YANG BERLAKU
                    </h4>
                    <p className="text-slate-300">
                      Kebijakan ini sepenuhnya tunduk pada hukum Republik Indonesia. Setiap sengketa terkait kebijakan privasi ini akan diselesaikan mengutamakan forum musyawarah terlebih dahulu. Jika tidak dicapai kesepakatan, maka sengketa hukum diselesaikan di Pengadilan Negeri Jakarta Selatan.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-display text-white border-b border-white/5 pb-1.5 uppercase tracking-wide">
                      12. KONTAK RESMI
                    </h4>
                    <div className="p-4 bg-slate-950/40 rounded-2xl border border-white/5 space-y-2.5 text-xs sm:text-sm font-sans">
                      <p className="text-white font-bold font-display">PT. BIKIN LEGALITAS BISNIS</p>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <FileText className="h-4 w-4 text-cyan-400" />
                        <span>Produk: BikinLegal.com</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Phone className="h-4 w-4 text-cyan-400" />
                        <span>WhatsApp: +62 858 3083 1654</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Mail className="h-4 w-4 text-cyan-400" />
                        <span>Email: info@bikinlegal.com</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-400">
                        <Globe className="h-4 w-4 text-cyan-400" />
                        <span>Website: www.bikinlegal.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 13 */}
                  <div className="space-y-2 text-center pt-4 border-t border-white/5">
                    <h4 className="text-sm font-bold font-display text-white uppercase tracking-wide">
                      13. PERSETUJUAN PENGGUNA
                    </h4>
                    <p className="text-slate-400 text-xs italic">
                      Dengan menggunakan layanan BikinLegal.com, Anda menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi ini secara penuh.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer containing accept/close button */}
            <div className="p-4 sm:p-5 border-t border-white/5 bg-slate-950/60 uppercase flex justify-end shrink-0">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-bold text-xs tracking-wider transition-all cursor-pointer"
                id="legal-footer-close-btn"
              >
                Tutup Dokumen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
