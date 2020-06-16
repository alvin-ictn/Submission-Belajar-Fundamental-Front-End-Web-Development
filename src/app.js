/*
Anda bebas menentukkan tema aplikasi yang ingin dibuat, terkecuali tema Club Finder atau Pencarian Klub Olahraga atau Sepakbola dan Dicoding Books.
Menggunakan standar ES6 sintaks dalam menuliskan kode JavaScript pada proyek yang dibuat.
Terdapat minimal satu penerapan custom element.
Menggunakan Webpack sebagai module bundler (tahap production). 
Memanfaatkan Webpack sebagai environment dalam pengembangan proyek (tahap development).
Memanfaatkan API dengan menggunakan konsep AJAX dalam menampilkan data yang dinamis pada aplikasi yang dibuat.

Bintang 1 : Semua ketentuan terpenuhi, namun terdapat indikasi plagiat yaitu dengan menggunakan proyek orang lain dan hanya mengubah kontennya saja.

Bintang 2 : Semua ketentuan terpenuhi, namun tidak lebih baik dari latihan yang diberikan.

Bintang 3 : Semua ketentuan terpenuhi, namun hanya mengikuti latihan yang ada di kelas.

Bintang 4 : Semua ketentuan terpenuhi, memiliki tampilan yang menarik, menggunakan package pihak ketiga dalam membangun proyek, kode yang dituliskan rapi.

Bintang 5 : Semua ketentuan terpenuhi, memiliki tampilan yang menarik, menggunakan package pihak ketiga, kode rapi, dan bermain-main atau bereksplorasi dengan penggunaan plugin dan loader pada penerapan Webpack.
*/

import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/navbar.js";
import apps from "./script/view/main.js";
 
document.addEventListener("DOMContentLoaded", apps);