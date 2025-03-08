import genie from "../assets/genie.png";
import lantern from "../assets/lantern.png";

export const Hero = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex lg:flex-row items-center justify-center gap-8 max-w-[2200px]">
        {/* Left Side: Genie + Speech Bubble */}
        <div className="flex flex-col items-start relative w-full lg:w-1/2 mt-20 justify-center">
          {/* Genie Container with Glow Effect */}
          <div className="relative animate-slide-in-left flex items-center justify-center w-full h-full">
            {/* Genie Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image */}
            <img
              src={genie}
              alt="Magic Lantern"
              className="mt-20 w-full max-h-[500px] object-fit relative z-10 mix-blend-screen rounded-md justify-center self-center flex"
            />

            {/* Lantern Positioned at Genie's Base */}
            <img
              src={lantern}
              alt="Lantern"
              className="absolute bottom-[-60%] left-[62%] transform  w-[50%] scale-125 z-0"
            />
          </div>

          {/* Speech Bubble */}
          <div className="speech-bubble animate-float p-6 shadow-xl  lg:w-[500px] -translate-y-150 translate-x-50">
            <p
              className="text-2xl lg:text-4xl text-right font-arabic font-bold text-white tracking-wide"
              style={{ direction: "rtl" }}
            >
              شبيك لبيك مارد الاتصالات بين ايديك!
            </p>
          </div>
        </div>

        {/* Right Side: Title & Description */}
        <div className="w-full lg:w-1/2 lg:text-right space-y-3 p-8 flex text-right items-center justify-center mx-auto animate-slide-in-right">
          <div className="mx-auto w-full flex flex-col items-end">
            <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight text-right font-arabic">
              مرحبًا بك في عالم{" "}
              <span className="text-[#36BCE7]">خفايا واسرار الاتصالات</span>
            </h1>
            <p className="text-white text-lg lg:text-xl opacity-80 text-right right-to-left">
              اكتشف ازاي مارد الاتصالات ممكن يجيب لك أفضل العروض والخدمات بسهولة
              وسرعة
            </p>
            <p className="text-white text-lg lg:text-xl opacity-80 mb-8 text-right right-to-left">
              شوف دلوقتي باقتنا المختلفه لو مسافر السعودية
            </p>
            <button className="bg-gradient-to-r from-[#36BCE7] to-[#1E90FF] text-white px-8 py-4 rounded-full shadow-lg text-2xl font-extrabold transition-all hover:scale-105 hover:shadow-xl hover:from-[#1E90FF] hover:to-[#36BCE7] active:scale-95 active:shadow-md cursor-pointer">
              اكتشف المزيد
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};
