function topla(a, b) {
    return a + b;
}

// Basit bir test mantığı
const sonuc = topla(6, 10);
if (sonuc === 15) {
    console.log("✅ Test Başarılı: 5 + 10 = 15");
    process.exit(0); // Başarılı çıkış kodu
} else {
    console.error("❌ Test Başarısız!");
    process.exit(1); // Hata çıkış kodu (Action'ı durdurur)
}
