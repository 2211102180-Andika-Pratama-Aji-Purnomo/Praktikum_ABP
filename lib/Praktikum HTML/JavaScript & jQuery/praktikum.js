<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Belajar JavaScript & jQuery</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #kotak, #box, #panel {
      width: 100px;
      height: 100px;
      background-color: #3498db;
      margin: 10px 0;
    }
    #panel, #box {
      display: none;
    }
    button {
      margin: 5px;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h2 id="judul">Judul Awal</h2>
  <p class="paragraf">Paragraf 1</p>
  <p class="paragraf">Paragraf 2</p>

  <button id="tombol">Klik Saya</button>
  <button id="toggleButton">Slide Toggle Panel</button>
  <button id="fadeButton">Fade Toggle Box</button>

  <div id="kotak"></div>
  <div id="panel">Ini Panel</div>
  <div id="box">Ini Box</div>

  <script>
    // 2. Variabel dan Tipe Data
    var nama = "Febrilia";
    let umur = 21;
    const kota = "Purwokerto";

    let teks = "Hello";
    let angka = 42;
    let benar = true;
    let array = [1, 2, 3];
    let objek = { nama: "Febrilia", umur: 21 };
    let tidakDidefinisikan;
    let kosong = null;

    // 3. Operator dan Control Flow
    if (umur > 18) {
      console.log("Dewasa");
    } else {
      console.log("Anak-anak");
    }

    for (let i = 0; i < 5; i++) {
      console.log("for loop:", i);
    }

    let j = 0;
    while (j < 5) {
      console.log("while loop:", j);
      j++;
    }

    // 4. Fungsi dan Objek
    function sapa(nama) {
      return "Halo, " + nama;
    }

    console.log(sapa("Febrilia"));

    const mahasiswa = {
      nama: "Febrilia",
      umur: 21,
      sapa: function() {
        return "Halo, saya " + this.nama;
      }
    };

    console.log(mahasiswa.sapa());

    // 5. jQuery
    $(document).ready(function() {
      // Seleksi Elemen
      $("#judul").text("Belajar jQuery");
      $(".paragraf").css("color", "blue");

      // Event Handling
      $("#tombol").click(function() {
        alert("Tombol diklik!");
        $("#kotak").fadeOut(500).fadeIn(500);
      });

      // Slide Toggle
      $("#toggleButton").click(function() {
        $("#panel").slideToggle();
      });

      // Fade Toggle
      $("#fadeButton").click(function() {
        $("#box").fadeToggle();
      });

      // 6.1 AJAX
      $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
        console.log("Data dari AJAX:", data.slice(0, 3)); // Tampilkan 3 data pertama
      });
    });

    // 6.2 Fetch API
    async function getData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      console.log("Data dari Fetch:", data.slice(0, 3));
    }

    getData();

    // 6.3 Fetch API POST
    async function kirimData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "Belajar JavaScript",
          body: "Ini contoh pengiriman data",
          userId: 1
        })
      });

      let data = await response.json();
      console.log("Response POST:", data);
    }

    kirimData();
  </script>

</body>
</html>
