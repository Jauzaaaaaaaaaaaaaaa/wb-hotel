window.AT = {
  label: 'WB Hotel, Denpasar',
  ms: 1700,
  intro: '<svg class="wb-seal" viewBox="0 0 200 260" aria-hidden="true">' +
    '<path pathLength="1" d="M20 250V100a80 80 0 0 1 160 0v150"/>' +
    '<path pathLength="1" d="M36 250V102a64 64 0 0 1 128 0v148"/>' +
    '<text x="100" y="150">WB</text></svg>'
};

/* Estimasi biaya: kode promo WBWEEKEND dan WBENDYEAR dari halaman promo, potongan 20% */
document.addEventListener('DOMContentLoaded', function () {
  var f = document.querySelector('.wb-est');
  if (!f) return;
  var harga = +f.getAttribute('data-harga'), out = f.querySelector('output');
  var rp = function (n) { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); };
  function hitung() {
    var malam = Math.max(1, Math.min(30, +f.malam.value || 1));
    var kode = f.kode.value.trim().toUpperCase();
    var promo = kode === 'WBWEEKEND' || kode === 'WBENDYEAR';
    var total = harga * malam * (promo ? .8 : 1);
    out.innerHTML = '<b>' + rp(total) + '</b><small>' + malam + ' malam' + (promo ? ', potongan 20%' : kode ? ', kode tidak dikenal' : '') + '</small>';
  }
  f.addEventListener('input', hitung);
  hitung();
});
