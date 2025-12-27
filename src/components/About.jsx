const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-black text-white p-12 rounded-[2.5rem] flex flex-col justify-between">
          <h2 className="text-4xl font-bold leading-tight">
            I build digital products that balance <br /> 
            <span className="text-[#bef264]">technical performance</span> and <br /> visual elegance.
          </h2>
          <p className="text-gray-400 mt-10 max-w-sm">
            Based in India, I help startups and businesses turn complex ideas into functional MERN stack applications.
          </p>
        </div>
        
        <div className="bg-[#f9f9f9] p-12 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center items-center text-center">
            <div className="text-6xl font-black mb-2">2024</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">MCA Graduate</div>
        </div>
      </div>
    </section>
  );
};

export default About;