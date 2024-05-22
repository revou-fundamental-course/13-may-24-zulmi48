const areaKeliling = document.getElementById("area-keliling");
const areaLuas = document.getElementById("area-luas");

function hidden() {
    areaLuas.classList.add("hidden");
    areaKeliling.classList.add("hidden");
}

hidden();

function luas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan semua nilai alas dan tinggi dengan benar!");
    }

    // Menghitung luas
    const luas = 0.5 * alas * tinggi;
    document.getElementById("luas").innerHTML = `
        Luas: 1/2 x Alas X Tinggi <hr>
        Luas: 1/2 x ${alas} x ${tinggi} = ${luas}
    `;

    // Reset Value
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
}

function keliling() {
    const a = parseFloat(document.getElementById("sisi-a").value);
    const b = parseFloat(document.getElementById("sisi-b").value);
    const c = parseFloat(document.getElementById("sisi-c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Masukkan semua nilai sisi benar!");
        return;
    }

    // Menghitung keliling
    const keliling = a + b + c;
    document.getElementById("keliling").innerHTML = `
        Keliling: Sisi A + Sisi B + Sisi C <hr>
        Keliling: ${a} + ${b} + ${c} = ${keliling}
    `;

    // Reset Value
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
}

function menuKeliling() {
    areaKeliling.classList.toggle("show");
    areaKeliling.classList.toggle("hidden");
    document.getElementById("keliling").innerText = "Hasil";
}

function menuLuas() {
    areaLuas.classList.toggle("show");
    areaLuas.classList.toggle("hidden");
    document.getElementById("luas").innerText = "Hasil";
}
