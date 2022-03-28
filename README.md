# Frontend Service Users
Project ini saya buat dengan Next.js, React hook, Tailwind, Daisy, Typescript dan Axios

## Cara memulai dan menjalankan project
-   Lakukan git clone https://gitlab.com/ferdianar/privy-frontend.git
-   Masuk direktori project dan Install dependencies menggunakan npm Install

## Merubah PORT sesuai config PORT di backend
Berikutnya untuk merubah PORT backend sesuai config env backend, masuk ke Folder Pages, yang perlu dirubah port nya di file 
-   Profile.tsx untuk profile endpoint, terus masuk folder 
-   auth/register.tsx  untuk register,
-   auth/login.tsx untuk login, dan di folder 
-   component/navbar.tsx untuk ngerubah port endpoint logout

##  Kalau sudah, jalankan dengan perintah npm run dev
Otomatis akan berjalan di port 3000. akan tampil halaman index dan progress bar akan berjalan sampai penuh, otomatis akan diredirect ke halaman login. 

## Mendaftar User
Jika belum ada user di database, bisa daftar ke hamburger profile kanan atas dan pilih register
password yang dimasukkan harus cocok, kalau tidak cocook akan mengeluarkan errror "password tidak cocok"
dan email harus terisi, Jika tidakk akan mengeluarkan error "email wajib diisi"

kalau sudah terisi semua, register. dan otomatis kalau sukses di arahkan ke halaman login

## Login User
Masukkan email dan password sesuai di database
Kalau sudah login, diarahkan ke menu profile, data lainnnya null, jadi kosong, untuk menu setting update nya masih belum karena saya ada gangguan di minggu minggu ini, jadi untuk menge test nya bisa mengupdate manual di mysql phpmyadmin, kecuali kolom cover dan phooto.

kalau sudah terisi, reload halaman profile , otomatis data akan tampil otomatis. sesuai data di database

## Logout Users
Untuk log out klik kanan atas profile
Klik Logout, otomatis refresh token akan di cleardari cookies, dan diredirect ke halaman login. sehingga kalau masuk ke halaman profile lagi, akan ditolak, dan diredirect ke halaman login lagi. 

## Preview Halaman Home ketika dijalankan pertama kali
Judul halaman di atas akan otomatis tampil sesuai kondisi halaman. Kalau sedang di homepage, akan tampil **Homepage**
Dan karena awal user belum login, jadi untuk nama user di pojok kanan atas masih **undefined** karena tidak terdeteksi access token yang valid. 
<img src="https://gitlab.com/ferdianar/privy-frontend/-/raw/main/assets/test.png" alt="previewhome" />

## Preview Halaman Profile
Jika sudah sukses login, akan tampil seperti ini. Nama user di pojok kanan atas otomatis ter update. Sesuai access token
<img src="https://gitlab.com/ferdianar/privy-frontend/-/raw/main/assets/profile.png" alt="preview" />

## Letak tombol log out untuk mengakhiri sesi dan refresh token
Halaman Profile di required untuk login dahulu, jadi ketika sudah logout , masuk ke profile lagi akan ditolak
<img src="https://gitlab.com/ferdianar/privy-frontend/-/raw/main/assets/logout.png" alt="logout" />

## Mobile Friendly, menggunakan Tailwind CSS, Daisy + Grid
Karena selalu suka mobile version, jadi tidak lupa untuk responsive nya <br />
<img src="https://gitlab.com/ferdianar/privy-frontend/-/raw/main/assets/mobile.png" alt="mobile" />


### Thank You ..... Greeting from Ferdian Ahmad R
