<?php echo "Hello, Andika Pratama Aji Purnomo!"; ?>

<?php $nama = "Mbak Fufufafa";
$umur = 22;
echo "Halo, nama saya $nama dan saya berumur $umur tahun.";
?>

<?php $a = 10;
$b = 5;
echo "<br>";
echo $a + $b; // Penjumlahan
echo "<br>";
echo $a - $b; // Pengurangan 
echo "<br>";
echo $a * $b; // Perkalian 
echo "<br>";
echo $a / $b; // Pembagian 
echo "<br>";
echo $a % $b; // Modulus 
echo "<br>";
echo "<br>";
echo "<br>";
?>

<?php
$nilai = 80;
if ($nilai >= 75) {
    echo "Lulus";
} else {
    echo "Tidak Lulus";
}
?>

<?php
$hari = "Senin";
 
switch ($hari) {
    case "Senin":
        echo "Hari ini Senin";
        break;
    case "Selasa":
        echo "Hari ini Selasa";
        break;
    default:
        echo "Hari tidak diketahui";
}
echo "<br>";
echo "<br>";
echo "<br>";
?>


<?php for ($i = 1; $i <= 5; $i++) {
    echo "Angka ke-$i <br>";
}
echo "<br>";
echo "<br>";
echo "<br>";
?>

<?php
$x = 1;
while ($x <= 5) {
    echo "Angka $x <br>";
    $x++;
}
echo "<br>";
echo "<br>";
echo "<br>";
?>

<?php
$buah = ["Apel", "Jeruk", "Mangga", "Anggur", "Durian"];
foreach ($buah as $b) {
    echo "Buah: $b <br>";
}
echo "<br>";
echo "<br>";
echo "<br>";
?>

<?php $hewan = ["Kucing", "Anjing", "Burung"]; echo $hewan[0]; // Output: Kucing 
echo "<br>";
echo "<br>";
echo "<br>";
?>