import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Ambatakuammmmmmmm.😂</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi My Name is Indra Suliwa</h1>
          <p className="text-base/loose mb-6 opacity-60">Hello! I am Indra Suliwa, a 6th-semester student majoring in Informatics Engineering. I am currently exploring various fields in the world of technology, particularly software development, cybersecurity, and the Internet of Things (IoT).
I have a strong interest in backend programming, API integration, as well as web and mobile application development.
            
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
              An undergraduate Informatics Engineering student at Universitas Islam Nusantara. A highly honest, detail-oriented, and hardworking
individual with strong communication skills and the ability to collaborate effectively in a team. Passionate about Software Engineering and
Cyber Security, and highly motivated to grow and contribute to the technology industry through continuous learning and hands-on
experience.
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
