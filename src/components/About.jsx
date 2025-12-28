const About = () => {
  return (
    <section className="px-6 md:px-20 py-10 bg-white">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 bg-black text-white p-16 rounded-[3rem] flex flex-col justify-between min-h-[400px]">
          <h2 className="text-5xl font-bold leading-[1.1] tracking-tight">
            I craft <span className="text-[#bef264]">Full-Stack</span> solutions <br />
            that turn complex ideas into <br />
            seamless digital reality.
          </h2>
          <div className="flex justify-between items-end mt-20">
            <p className="max-w-xs text-gray-400">Utkarsh Shende — 2024 MCA Graduate specialized in the MERN Ecosystem.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;