const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Selesai, apa pun hasilnya"));

  // promise gagal

  const promiseGagal = new Promise((resolve, reject) => {
  const success = false;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

promiseGagal
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Selesai, apa pun hasilnya"));

  // Promise Delay

  function simulateFetch(shouldSucceed) {
  return new Promise((resolve, reject) => {
    console.log("Mulai mengambil data...");
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ id: 1, title: "Laptop" });
      } else {
        reject("Gagal mengambil data dari server");
      }
    }, 2000); // simulasi delay 2 detik
  });
}

console.log("Sebelum panggil Promise");
simulateFetch(true)
  .then(data => console.log("Berhasil:", data))
  .catch(error => console.error("Gagal:", error))
  .finally(() => console.log("Proses selesai"));
console.log("Setelah panggil Promise (tapi Promise belum tentu selesai)");