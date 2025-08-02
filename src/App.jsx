import DataImage from "./data";
import { listTools } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Ambatakuammmmmmmm.😂</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi IM Indra Suliwa</h1>
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
          <div className=" xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:hidden block" />
            <p className="text-base/loose mb-11">
              An undergraduate Informatics Engineering student at Universitas Islam Nusantara. A highly honest, detail-oriented, and hardworking
              individual with strong communication skills and the ability to collaborate effectively in a team. Passionate about Software Engineering and
              Cyber Security, and highly motivated to grow and contribute to the technology industry through continuous learning and hands-on
              experience.
            </p>
            <div className="flex items-center justify-between">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
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
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang saya pakai</h1>
          <p className="w-2/5 text-base/loose opacity-50">Berikut tools yang saya pakai untuk pembuatan websute ataupun design</p>
          <div className="tools-box mt-14 grid grid-cols-4 gap-4">
            
            {listTools.map((tool) => {
              return (
                <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md  hover:bg-zinc-800 group"key={tool.id}>
                  <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                  <div>
                    <h4>{tool.nama}</h4>
                    <p>{tool.ket}</p>
                  </div>
                </div>
              );
            })}


        </div>
      </div>
      {/* Tentang */}
    </div >
    </>
  );
}

export default App
