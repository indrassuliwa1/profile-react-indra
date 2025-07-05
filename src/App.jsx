import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode Yang Indah, lahir dari ketekunan.😂</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Indra Suliwa</h1>
          <p className="text-base/loose mb-6 opacity-60">Halo! Saya Indra Suliwa, mahasiswa semester 6 jurusan Teknik Informatika. Saat ini saya sedang mendalami berbagai bidang dalam dunia teknologi, khususnya pengembangan perangkat lunak, keamanan siber, serta Internet of Things (IoT).
            Saya memiliki ketertarikan besar terhadap pemrograman backend, integrasi API, serta pengembangan aplikasi berbasis web dan mobile. 
            
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV<i className="ri-download-fill ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">Lihat Project Saya<i className="ri-arrow-right-fill ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[400px] md:ml-auto" />
      </div>
      <div>
        {/* Tentang */}
        <div className="tentang mt-32 py-10">
          <div className="w-2/3 mx-auto p-7 bg-zinc-800 rounded-lg">
            <p className="text-base/loose mb-10">
              Hi, Perkenalkan saya Indra Suliwa wmnwaekjawlekjalwk jlekajwlej alkwjelk ajwl jekjwalkje law
              alwkej lakwj elkjawlkj elakwjel kjawlkje kawj elkajwkhe alwkelk awke lkawje kljawklej lkjawkle jekjwalkje
              awjke kjawh jhawkj ehkjawh ejkahwjkehJEKKJ HKWJQ HKJAKJSDHKJA jdh kajshdkja shdkj hasjkdhkjashdkjahskdjh
              asdjaskldjalskjd lkasjdlkjaslkhflasjflkajsflalskdjlka sjlkflaksdjlkasjdlkjasldjlaksjdlkjaslkdjklashflajsdk
              alksjflakjfslkajslkfjalskdjlkasj lfhlaksjflkja slkjflasjkfl jaslkfjkl asjlkfhlaksjlfkaslkhflkajsflkjlajlaksjd
            </p>
            <div className="flex items-center justify-between">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md" />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    45 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Project Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    4 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tentang */}
      </div>
    </>
  );
}

export default App
