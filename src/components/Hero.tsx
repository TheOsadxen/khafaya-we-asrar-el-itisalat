import genie from "../assets/genie.png";

export const Hero = () => {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 max-w-[2200px] mx-auto">
        {/* Left Side: Genie Image (Always on Left for Large Screens) */}
        <div className="flex flex-col items-center lg:items-start relative w-full lg:w-1/2 justify-center">
          <div className="relative animate-slide-in-left flex items-center justify-center w-full h-full lg:mt-20 ">
            {/* Genie Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image */}
            <img
              src={genie}
              alt="Magic Lantern"
              className="w-[300px] sm:w-[450px] md:w-[500px] lg:w-[600px] max-h-[500px] md:max-h-[900px] animate-float object-cover relative z-10 mix-blend-screen rounded-md"
            />
          </div>
        </div>

        {/* Right Side: Text Content (Always on Right for Large Screens) */}
        <div className="w-full lg:w-1/2 text-center lg:text-right space-y-3 p-6 flex flex-col items-center lg:items-end animate-slide-in-right">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight font-arabic">
            مرحبًا بك في عالم{" "}
            <span className="text-[#36BCE7]">خفايا واسرار الاتصالات</span>
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl opacity-80">
            اكتشف ازاي مارد الاتصالات ممكن يجيب لك أفضل العروض والخدمات بسهولة
            وسرعة
          </p>
          <p className="text-white text-base sm:text-lg lg:text-xl opacity-80 mb-6">
            شوف دلوقتي باقتنا المختلفه لو مسافر السعودية
          </p>
          <button
            onClick={() =>
              document
                .getElementById("target-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r font-arabic from-[#36BCE7] to-[#1E90FF] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg text-lg sm:text-xl font-extrabold transition-all hover:scale-105 hover:shadow-xl hover:from-[#1E90FF] hover:to-[#36BCE7] active:scale-95 active:shadow-md cursor-pointer"
          >
            اكتشف المزيد
          </button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-16 sm:w-24 h-16 sm:h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-[40%] right-[20%] w-12 sm:w-16 h-12 sm:h-16 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};
