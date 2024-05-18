function hitung() {
    const a = parseFloat(document.getElementById('sisi-a').value);
    const b = parseFloat(document.getElementById('sisi-b').value);
    const c = parseFloat(document.getElementById('sisi-c').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(tinggi)) {
        alert('Masukkan semua nilai sisi dan tinggi dengan benar.');
        return;
    }

    // Menghitung keliling
    const perimeter = a + b + c;
    document.getElementById('perimeter').innerText = `Keliling: ${perimeter}`;

    // Menghitung luas
    const area = 0.5 * a * tinggi;
    document.getElementById('area').innerText = `Luas: ${area}`;
}
