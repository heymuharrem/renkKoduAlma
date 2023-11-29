// Sayfanın ana elementini seç
var root = document.documentElement;

// Stil bilgilerini al
var styles = getComputedStyle(root);

// '--hero' değişkeninin değerini al ve '#' işaretini kaldır
var heroColor = styles.getPropertyValue('--hero').trim().slice(1);

// Kullanıcıya prompt penceresi göster
var userInput = prompt(`Hero Rengini buradan kopyala #${heroColor}`, heroColor);

// İsteğe bağlı: Kullanıcının girdiği değeri kullanma
console.log(userInput);