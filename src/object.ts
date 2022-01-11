enum Prodi {
  IF = 'Teknik Informatika',
  SI = 'Sistem Informasi',
  ITIL = 'Ilmu Ternak Ikan Lele'
}

type Mahasiswa = {
  nama: string,
  nim: string,
  prodi: Prodi
}

const taufik: Mahasiswa = {
  nama: 'Taufik Hidayat',
  nim: '301200032',
  prodi: Prodi.IF
}

const fauzi: Mahasiswa = {
  nama: 'Fauzi',
  nim: '69420',
  prodi: Prodi.ITIL
}

console.log(taufik)
console.log(fauzi)
