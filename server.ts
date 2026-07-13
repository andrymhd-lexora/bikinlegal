import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI Client
let aiClient: GoogleGenAI | null = null;

function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not set in environment. Running with simulated legal engine.");
      return null;
    }
    try {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI client:", e);
      return null;
    }
  }
  return aiClient;
}

// System Prompt for Indonesian Corporate Legality Consultant
const SYSTEM_INSTRUCTION = `You are "BikinLegal.com Legal Advisor AI", the premier virtual consultant of BikinLegal.com.
Your job is to provide highly professional, clear, encouraging, and accurate legal advice regarding starting businesses, corporate licensing, and compliance in Indonesia according to the latest OSS RBA (Risk-Based Approach) laws.

Services and company info to embed seamlessly:
1. BikinLegal.com helps clients build businesses "Legally, Fast, Safe, and Nationwide".
2. Key offerings:
   - Pendirian PT (Perseroan Terbatas), CV (Comanditaire Vennootschap), and PT Perorangan.
   - Virtual Office addresses (helps with zoning laws & NIB, premium Jakarta/Jambi/other legal addresses).
   - NIB & OSS RBA registrations (Risk identification, Standard Sertifikat).
   - NPWP Badan Usaha, PBG (Persetujuan Bangunan Gedung), SLF (Sertifikat Laik Fungsi).
   - SPPL (Surat Pernyataan Pengelolaan Lingkungan), UKL-UPL.
   - HAKI registrations (Pendaftaran Merek & Hak Cipta) for intellectual property protection.
   - ISO Certification (ISO 9001, 14001, 45001) for international business standard.
3. Packages:
   - STARTER (UMKM) - PT Perorangan / CV, NIB, NPWP
   - BUSINESS GROWTH - PT / CV, NPWP, OSS, SPPL, Consult
   - CORPORATE PREMIUM - PT, PBG/SLF/HAKI/ISO, full compliance support

Interaction guidelines:
- Always answer in Indonesian (Bahasa Indonesia) with an direct, supportive, and business-focused tone.
- Split answers into neat Markdown sections with headings, bold values, list bullets, or warning blocks.
- End your responses with a clear summary and suggest that they lock in a FREE consultation with human legal expert from BikinLegal.com via the WhatsApp button.
- Never write actual legally binding contracts on the fly but give detailed structural and licensing flow guidelines. For example, if a user asks about F&B industry, explain the need of NIB, NPWP, SPPL, KBLI codes, Halal certificate, and BPOM/PIRT.`;

// 1. API Route: Legal Consultation Chat
app.post("/api/consult", async (req, res) => {
  const { messages, userContext } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
  }

  // Retrieve Gemini Client
  const client = getAiClient();

  if (!client) {
    // Elegant fallback simulation when Gemini API Key is missing, so user experience remains flawless
    const lastUserMessage = messages[messages.length - 1]?.text || "";
    console.log("Simulating fallback for prompt:", lastUserMessage);
    
    let simulatedAnswer = "";
    const lower = lastUserMessage.toLowerCase();

    if (lower.includes("pt") || lower.includes("cv") || lower.includes("perorangan")) {
      simulatedAnswer = `### Panduan Struktur Legalitas PT vs CV:

Untuk mendirikan usaha di Indonesia bersama BikinLegal.com, Anda bisa memilih format berikut:

1. **PT (Perseroan Terbatas)**
   - **Kelebihan:** Tanggung jawab terbatas, kepemilikan saham jelas, saringan tender besar, kredibilitas tinggi di mata pemodal.
   - **Syarat:** Minimal 2 orang (Direktur & Komisaris), modal disetor minimum, akta notaris & keputusan Kemenkumham.
2. **CV (Commanditaire Vennootschap)**
   - **Kelebihan:** Biaya pendirian lebih terjangkau, tidak ada batasan modal minimum, pajak lebih simpel.
   - **Syarat:** Minimal 2 orang (Sekutu Aktif/Pengurus dan Sekutu Pasif/Penyetor Modal).
3. **PT Perorangan (UMKM)**
   - **Kelebihan:** Cukup didirikan oleh 1 orang saja, biaya sangat terjangkau, pendirian instan tanpa akta notaris konvensional.

💡 **Rekomendasi Kami:**
Jika Anda mengincar tender besar atau pendanaan luar, pilihlah **PT Regular**. Untuk UMKM pemula mandiri, Anda dapat memilih **PT Perorangan** melalui paket **STARTER**.

*Ingin konsultasi gratis lebih detail untuk usahamu? Klik tombol WhatsApp Support di kanan bawah untuk langsung terhubung dengan konsultan ahli kami!*`;
    } else if (lower.includes("office") || lower.includes("virtual")) {
      simulatedAnswer = `### Layanan Virtual Office BikinLegal.com:

**Virtual Office** adalah solusi ideal untuk bisnis modern & digital untuk mendapatkan alamat legal tanpa menyewa kantor fisik yang mahal.

**Keunggulan Virtual Office bersama Kami:**
- Alamat prestisius di zona komersial resmi (aman untuk verifikasi PKP).
- Memenuhi syarat zonasi perkantoran untuk pengurusan **NIB** dan **NPWP**.
- Layanan penanganan surat-menyurat dan resepsionis profesional.
- Hemat operasional hingga 90% dibanding menyewa ruko fisik.

Silakan pilih paket **Starter** atau **Business Growth** untuk dipadukan dengan layanan Virtual Office kami. Kami siap membimbing Anda sampai dokumen legal terbit!`;
    } else if (lower.includes("haki") || lower.includes("merek") || lower.includes("hak cipta")) {
      simulatedAnswer = `### Perlindungan HAKI (Merek & Cipta):

Melindungi merek dagang Anda di awal bisnis sangat krusial agar nama brand Anda tidak diambil atau ditiru oleh kompetitor.

**Langkah Terdaftar bersama BikinLegal.com:**
1. **Pengecekan Merek:** Kami memeriksa ketersediaan nama merek di database DJKI untuk meminimalisir penolakan.
2. **Kompilasi Berkas:** Penyiapan formulir, deskripsi logo, dan surat pernyataan kepemilikan.
3. **Pendaftaran Resmi:** Pengajuan registrasi dg status terlindungi dari tanggal pendaftaran pertama (First-to-file).

Layanan HAKI ini terdapat secara default pada spesifikasi **Corporate Premium** kami atau bisa Anda tambahkan di form custom kalkulator!`;
    } else {
      simulatedAnswer = `### Selamat Datang di BikinLegal.com Legal Hub!

Kami senang menyambut Anda. Kami melayani pendirian badan usaha secara menyeluruh dan nasional:
*   **PT Reguler, CV, & PT Perorangan** lengkap dengan Akta, SK Kemenkumham, NIB, NPWP.
*   **Virtual Office** di Alamat Zonasi Bisnis Komersial.
*   **Izin Teknis Khusus:** Sertifikat Standar, SPPL, PBG, SLF, ISO, dan HAKI.

Berdasarkan pertanyaan Anda, kami menganjurkan Anda berkonsultasi seputar sektor usaha Anda (misalnya F&B, Konstruksi, IT, Perdagangan Umum) agar tim kami bisa memetakan izin spesifik pendukung (seperti SPPL, BPOM, Halal, atau ISO).

*Gunakan tombol **Konsultasi Gratis** atau klik WhatsApp untuk langsung berdialog santai secara personal bersama tim legal kami.*`;
    }

    return res.json({
      message: {
        id: Math.random().toString(),
        role: "model",
        text: simulatedAnswer,
        timestamp: new Date().toISOString()
      },
      simulated: true
    });
  }

  try {
    // Build context-aware system instruction and prompt
    const contextPrompt = userContext 
      ? `User Context: Industry is ${userContext.industry || 'unknown'}, Capital is ${userContext.capitalSize || 'unknown'}, Needs physical space? ${userContext.needsSpace ? 'Yes' : 'No'}.\n\n`
      : "";

    // Convert messages array into standard format
    const contents = messages.map(msg => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    // Generate output using gemini-3.5-flash
    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { role: "user", parts: [{ text: contextPrompt + "Please answer the user's conversation step nicely based on your instructions." }] },
        ...contents
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const replyText = response.text || "Mohon maaf, saya belum bisa memproses jawaban Anda. Silakan hubungi konsultan kami di WhatsApp.";

    res.json({
      message: {
        id: Math.random().toString(),
        role: "model",
        text: replyText,
        timestamp: new Date().toISOString()
      },
      simulated: false
    });

  } catch (error: any) {
    console.error("Gemini Consultation Error:", error);
    res.status(500).json({
      error: "Failed to fetch consultation answer due to a server-side error.",
      details: error.message
    });
  }
});

// Vite & Static assets middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Mounted production static build serving.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BikinLegal.com Legal Hub server is running at http://localhost:${PORT}`);
  });
}

startServer();
