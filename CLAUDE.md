# CLAUDE.md — ID Home Rénovation & Dépannage

## Proje Özeti

**Site:** idhome-travaux.fr
**Müşteri:** ID Home — Rénovation & Dépannage (Fransa merkezli ev renovasyon ve acil tamir şirketi)
**Dil:** Fransızca (Tüm UI metinleri, meta taglar, açıklamalar Fransızca olacak. Bu CLAUDE.md Türkçe.)
**Framework:** Next.js 15 (App Router) + TypeScript + Tailwind CSS
**Hosting:** Hostinger — GitHub entegrasyonu ile auto-deploy (`main` branch push = deploy)
**Repo:** https://github.com/Fyned/idhome-travaux.fr.git

---

## Şu Anki Görev: MAINTENANCE SAYFASI

Site henüz yapım aşamasında. İlk iş olarak **profesyonel, etkileyici bir maintenance (yapım aşamasında) sayfası** oluşturulacak. Bu sayfa müşterinin potansiyel müşterilerinin göreceği ilk şey — **çok kaliteli ve etkileyici olmalı**.

### Maintenance Sayfası Gereksinimleri

**Olması gerekenler:**
- ID Home logosu → Header'da `public/idhome-header-logo-white-orange.svg` kullan
- Favicon → `public/idhome-favicon-logo.svg` kullan (layout.tsx metadata'da tanımla)
- "Notre site est en cours de construction" mesajı (zarif, dikkat çekici)
- "Intervention Rapide — 7J/7" ana mesajı (büyük, etkileyici tipografi)
- Hizmet listesi: Plomberie, Électricité, Serrurerie (acil), Peinture, Isolation, Rénovation Complète
- Telefon numarası CTA butonu: **09 87 52 91 81** (tıklanabilir tel: link)
- Email: **contact@id-home.fr**
- Çalışma saatleri: Du lundi au samedi, 9h–18h
- "Devis gratuit — Prix transparents" mesajı
- Footer'da küçük logo → `public/idhome-logo-white-orange.svg`

**Tasarım yönlendirmesi:**
- **KOYU TEMA** — Koyu arka plan (#1A1A1A veya benzeri) üzerine turuncu (#E8882D) vurgular
- **Premium hissi** — Glass morphism kartlar, subtle animasyonlar, gradient mesh arka plan
- **Minimal ama etkileyici** — Gereksiz şey yok ama gördüğünde "vay" dedirtecek
- **Mobile-first responsive** — Telefondan da mükemmel görünmeli
- **Fransız pazarına uygun** — Profesyonel, güvenilir, ciddi ama modern

**Animasyonlar:**
- Sayfa yüklenirken elementlerin fade-in-up ile gelişi (staggered)
- Hover efektleri kartlarda
- Telefon butonunda glow/pulse efekti (dikkat çeksin — bu ana CTA)
- Floating/subtle background animasyonları

**YAPMA:**
- Countdown timer koyma (ne zaman biteceğini bilmiyoruz)
- Email subscription formu koyma (gerekli değil)
- Çok fazla animasyon koyup performansı düşürme

---

## Marka Kimliği

### Logo Dosyaları

Tüm logo SVG dosyaları proje kök dizininde mevcut. Bunları `public/` klasörüne taşı ve kullan.

**Dosyalar ve kullanım yerleri:**

| Dosya | Boyut | Nerede Kullanılacak |
|-------|-------|---------------------|
| `idhome-favicon-logo.svg` | 7 KB | **Favicon** — `<link rel="icon">` olarak kullan |
| `idhome-header-logo-white-orange.svg` | 58 KB | **Header/Navbar — koyu arka plan** — Maintenance sayfasında BU KULLANILACAK (koyu tema) |
| `idhome-header-logo-black-orange.svg` | 58 KB | **Header/Navbar — açık arka plan** — İleride açık temalı sayfalarda kullanılacak |
| `idhome-logo-white-orange.svg` | 13 KB | **Küçük logo — koyu arka plan** — Footer, küçük alanlar (koyu tema) |
| `idhome-logo-black-orange.svg` | 13 KB | **Küçük logo — açık arka plan** — Footer, küçük alanlar (açık tema) |
| `idhome-logo-white.svg` | 13 KB | **Tek renkli beyaz logo** — Watermark, overlay kullanımları |
| `idhome-logo-black.svg` | 13 KB | **Tek renkli siyah logo** — Baskı, faks gibi tek renkli kullanımlar |

**Logo yapısı:**
- "id" kısmı her zaman **turuncu (#E8882D)**
- "home" kısmı **beyaz** (koyu arka planda) veya **siyah** (açık arka planda)
- Logonun üstünde **ev çatısı ikonu** var (turuncu)
- Header varyantları (58 KB) logonun yanında "Rénovation & Dépannage" yazısını da içeriyor
- Küçük varyantlar (13 KB) sadece ikon + "id home" yazısı

**Maintenance sayfası için:**
- Header'da → `idhome-header-logo-white-orange.svg` (turuncu "id" + beyaz "home" + tagline)
- Footer'da → `idhome-logo-white-orange.svg` (küçük versiyon)
- Favicon → `idhome-favicon-logo.svg`

**ÖNEMLİ:** Logo dosyalarını `<img>` veya Next.js `<Image>` bileşeni ile kullan, SVG inline etme. Dosyalar zaten optimize.

### Renk Paleti
```
Ana Turuncu:       #E8882D   → Tailwind: id-orange
Açık Turuncu:      #F5A623   → Tailwind: id-orange-light  
Koyu Turuncu:      #D47520   → Tailwind: id-orange-dark
Kömür Gri:         #2D2D2D   → Tailwind: id-charcoal
Koyu Arka Plan:    #1A1A1A   → Tailwind: id-dark
Gri:               #4A4A4A   → Tailwind: id-gray
Açık Arka Plan:    #F5F1EC   → Tailwind: id-light
Krem:              #FAF7F2   → Tailwind: id-cream
```

Renklerin tümü `tailwind.config.ts`'de `id-` prefix'i ile tanımlı.

### Tipografi
- **Başlıklar:** Montserrat — `font-heading` (Google Fonts, next/font ile import)
- **Gövde metinler:** DM Sans — `font-body` (Google Fonts, next/font ile import)
- Ağırlıklar: 400, 500, 600, 700, 800 (Montserrat'ta 900'e kadar)

### Hizmet İkonları
Görsellerde her hizmetin yanında küçük bir ikon var:
- **Plomberie:** Damla/su ikonu (turuncu)
- **Électricité:** Yıldırım ikonu (turuncu)
- **Serrurerie:** Anahtar/kilit ikonu (turuncu)
Bu ikonlar için lucide-react veya kendi SVG ikonlarını kullan.

---

## Müşteri & İş Bilgileri

### Şirket
**ID Home** — Fransa'da ev renovasyonu ve acil dépannage (tamir) hizmeti veren şirket.

### Hizmetler

**🔴 Acil Dépannage (DEPANNAGE D'URGENCE) — 7J/7:**
Bu hizmetler şirketin ana gelir kaynağı, öne çıkarılmalı:
- **Plomberie** — Tesisat: su kaçağı, tıkanıklık, montaj, acil müdahale
- **Électricité** — Elektrik: arıza, kısa devre, montaj, normlara uygunluk
- **Serrurerie** — Çilingir: kapı açma, kilit değişimi, güvenlik

**🟡 Rénovation Complète (RENOVATION COMPLETE):**
- Aménagements intérieurs — İç mekan düzenlemesi
- Salles de bain — Banyo renovasyonu
- Cuisines — Mutfak renovasyonu
- Petits travaux — Küçük tadilat işleri
- Peinture — Boya badana
- Isolation — Isı ve ses yalıtımı

### İletişim
- **Telefon:** 09 87 52 91 81
- **Email:** contact@id-home.fr
- **Site (mevcut):** id-home-renovation-depannage.fr
- **Site (yeni — bu proje):** idhome-travaux.fr
- **Çalışma saatleri:** Du lundi au samedi, 9h – 18h
- **Acil hizmet:** 7J/7 (7 gün 7 gece — acil dépannage için)

### Temel Pazarlama Mesajları (Fransızca)
Bu ifadeler müşterinin vitrininde ve tüm materyallerinde var, sitede de kullanılmalı:
- **"Intervention Rapide"** — Hızlı müdahale
- **"7J/7"** — Haftanın 7 günü
- **"Devis gratuit"** — Ücretsiz keşif/teklif
- **"Prix transparents"** — Şeffaf fiyatlandırma

---

## Teknik Konfigürasyon

### Proje Yapısı
```
idhome-travaux.fr/
├── public/                  # Logo SVG dosyalarını BURAYA TAŞI
│   ├── idhome-favicon-logo.svg           # Favicon (7 KB)
│   ├── idhome-header-logo-white-orange.svg  # Header logo koyu tema (58 KB)
│   ├── idhome-header-logo-black-orange.svg  # Header logo açık tema (58 KB)
│   ├── idhome-logo-white-orange.svg      # Küçük logo koyu tema (13 KB)
│   ├── idhome-logo-black-orange.svg      # Küçük logo açık tema (13 KB)
│   ├── idhome-logo-white.svg            # Tek renkli beyaz (13 KB)
│   └── idhome-logo-black.svg            # Tek renkli siyah (13 KB)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global stiller, Tailwind, özel animasyonlar
│   │   ├── layout.tsx       # Root layout, fontlar, metadata (SEO), favicon
│   │   └── page.tsx         # Maintenance sayfası
│   └── components/          # İleride kullanılacak bileşenler
├── CLAUDE.md                # Bu dosya
├── next.config.ts           # standalone output
├── tailwind.config.ts       # Özel renkler (id-orange, id-dark vs.)
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── .gitignore
```

**ÖNEMLİ:** Logo SVG dosyaları şu an proje kök dizininde. İlk iş olarak bunları `public/` klasörüne taşı:
```bash
mv idhome-*.svg public/
```

### Komutlar
```bash
npm install          # Bağımlılıkları yükle
npm run dev          # Dev server → localhost:3000
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
```

### Deploy
1. Kod `main` branch'e push edilir
2. Hostinger GitHub entegrasyonu ile otomatik çeker
3. `output: "standalone"` ayarı `next.config.ts`'de — Hostinger bunu kullanıyor

### next.config.ts ayarı
```ts
const nextConfig: NextConfig = {
  output: "standalone",
};
```

---

## Gelecek Geliştirme Planı (Roadmap)

Maintenance sayfasından sonra sırasıyla:

### Faz 1: Full Site
- Ana sayfa (Hero section, Hizmetler, Avantajlar, CTA)
- Hizmetler sayfası (her hizmet için ayrı detaylı bölüm)
- Hakkımızda / À propos
- İletişim sayfası (form + Google Maps)
- Header/Navbar + Footer bileşenleri

### Faz 2: SEO & İçerik
- Fransızca SEO (meta tags, structured data JSON-LD)
- LocalBusiness + Service schema markup
- sitemap.xml, robots.txt
- Open Graph + Twitter Cards
- Blog/Actualités bölümü

### Faz 3: Gelişmiş
- Online devis (teklif) formu
- Galeri / Réalisations (tamamlanan işler)
- Müşteri yorumları (Avis clients)
- WhatsApp butonu
- Performance optimizasyonu

---

## Kodlama Kuralları

1. **UI dili:** Her şey Fransızca
2. **Bileşen tipi:** React Server Components tercih, client sadece interaktif kısımlarda ("use client")
3. **Stil:** Tailwind CSS utility-first, özel şeyler globals.css'de
4. **Renkler:** Sadece `id-*` Tailwind renklerini kullan (id-orange, id-dark, vs.)
5. **Fontlar:** `font-heading` = Montserrat (başlıklar), `font-body` = DM Sans (gövde)
6. **Erişilebilirlik:** Semantic HTML, alt text, focus states, aria labels
7. **Görseller:** next/image kullan, public/ klasöründen serve et
8. **Responsive:** Mobile-first, md: ve lg: breakpoint'leri ile genişlet
9. **SEO:** Her sayfa export metadata ile proper meta tags
10. **Performans:** Gereksiz client-side JS'den kaçın, CSS animasyonları tercih et
