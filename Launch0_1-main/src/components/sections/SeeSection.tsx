import Image from 'next/image';

const SeeSection = () => {
  return (
    <section className="relative bg-[linear-gradient(#1d1e2100_81%,#1d1e21),url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e33d96ef8a31a9829af36_top_bg.svg')] bg-[position:0_0,50%_80px] bg-[repeat:no-repeat,no-repeat] bg-[size:auto,auto]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="pt-0">
          <div className="flex flex-col gap-8 sm:gap-[72px]">
            {/* Hero Image Section */}
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-[#1f1a1fe3] z-0"></div>
              
              {/* Content container */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 sm:p-12">
                {/* Image container */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-[80%] max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#c8ff00]/20">
                    <Image
                      src="/assets/images/founder.jpg"
                      alt="Founder"
                      width={500}
                      height={500}
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    Most businesses are stuck in a <span className="text-[#c8ff00]">software trap</span>
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed">
                    We help businesses break free from inefficient processes and transform their operations with custom AI-powered solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo Section */}
            <div className="w-full">
              <div className="text-center mb-4 text-sm sm:text-base text-white/70">Trusted by top-tier service businesses</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 justify-items-center items-center">
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0b563f7f638639c63f_humi.png" alt="Humi" width={120} height={40} className="h-auto w-auto max-w-[100px] sm:max-w-[120px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0c3efd43518c914355_hornbeam.svg" alt="Hornbeam" width={103} height={40} className="h-auto w-auto max-w-[90px] sm:max-w-[103px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364d22bf0c013646afb00a_grantmatch.png" alt="Grantmatch" width={122} height={40} className="h-auto w-auto max-w-[100px] sm:max-w-[122px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0baf4771093543d629_lendly.svg" alt="Lendly" width={71} height={40} className="h-auto w-auto max-w-[60px] sm:max-w-[71px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0c7a4cee75533dbc5e_affinity.png" alt="Affinity" width={96} height={40} className="h-auto w-auto max-w-[80px] sm:max-w-[96px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0b51591846935335a5_launchpop.png" alt="Launchpop" width={130} height={40} className="h-auto w-auto max-w-[110px] sm:max-w-[130px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeSection; 