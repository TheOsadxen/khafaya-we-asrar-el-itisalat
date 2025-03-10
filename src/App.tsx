import { createColumnHelper } from "@tanstack/table-core";
import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Table } from "./components/UI/Table";
import genie2 from "./assets/genie2.png";
import geniee from "./assets/geniee.png";
import lastGenie from "./assets/lastGenie.png";

import { useEffect, useRef, useState } from "react";
import {
  allNetworksData,
  flags,
  flexPackagesData,
  internationalPackagesData,
  internationalPackagesData2,
  libaraNetworkData,
  onlyInterntData,
  yallaPackageData,
} from "./data/tables";

function App() {
  const columnHelper = createColumnHelper();

  const genieRef = useRef(null);
  const genie2Ref = useRef(null);

  const [isVisible, setIsVisible] = useState({
    flexGenie: false,
    onlyNetGenie: false,
  });

  useEffect(() => {
    const flexGenieObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible({ flexGenie: true, onlyNetGenie: false }); // Set visibility to true only when in view
        }
      },
      { threshold: 0.3 }
    );

    if (genieRef.current) {
      flexGenieObserver.observe(genieRef.current);
    }

    const onlyNetGenieObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible({ flexGenie: false, onlyNetGenie: true }); // Set visibility to true only when in view
        }
      },
      { threshold: 0.3 }
    );

    if (genie2Ref.current) {
      onlyNetGenieObserver.observe(genie2Ref.current);
    }

    return () => {
      if (genieRef.current) flexGenieObserver.unobserve(genieRef.current);
      if (genie2Ref.current) onlyNetGenieObserver.unobserve(genie2Ref.current);
    };
  }, []);

  const internationalPackagesColumns = [
    columnHelper.accessor("country", {
      header: () => <span className="font-arabic font-bold">الدولة</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("packageName", {
      header: () => <span className="font-arabic font-bold">اسم الباقة</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("internationalMinutes", {
      header: () => (
        <span className="font-arabic font-bold">الدقائق الدولية</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("localMinutes", {
      header: () => (
        <span className="font-arabic font-bold">
          الدقائق المحلية والدولية (فليكس)
        </span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("data", {
      header: () => <span className="font-arabic font-bold">البيانات</span>,
      cell: (info) => (
        <div className="font-arabic text-blue-600 font-bold">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("price", {
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة /ريال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("validity", {
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("activationCode", {
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
      cell: (info) => (
        <span className="font-arabic font-mono">{info.getValue()}</span>
      ),
    }),
  ];

  const yallaPackageColumns = [
    columnHelper.accessor("package", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">الباقــة</span>,
    }),
    columnHelper.accessor("duration", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => (
        <span className="font-arabic font-bold">
          دقائق محلية (داخل وخارج الشبكة)
        </span>
      ),
    }),
    columnHelper.accessor("minutes", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">بيانات</span>,
    }),
    columnHelper.accessor("data", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">سوشيال ميديا</span>,
    }),
    columnHelper.accessor("socialData", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">عرض ترويجي</span>,
    }),
    columnHelper.accessor("price", {
      cell: (info) => `${info.getValue()}`,
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة/ ريال</span>
      ),
    }),
    columnHelper.accessor("validity", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
    }),
    columnHelper.accessor("activationCode", {
      cell: (info) => <span className="font-arabic "> {info.getValue()}</span>,
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
    }),
  ];

  /*----------------------------------------------*/
  const internationalPackagesColumns2 = [
    columnHelper.accessor("country", {
      header: () => <span className="font-arabic font-bold">الدولة</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("packageName", {
      header: () => <span className="font-arabic font-bold">اسم الباقة</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("internationalMinutes", {
      header: () => (
        <span className="font-arabic font-bold">الدقائق الدولية</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("localMinutes", {
      header: () => (
        <span className="font-arabic font-bold">الدقائق المحلية</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("data", {
      header: () => <span className="font-arabic font-bold">البيانات</span>,
      cell: (info) => (
        <div className="font-arabic text-blue-600 font-bold">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("price", {
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة /ريال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("validity", {
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("activationCode", {
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
  ];

  const flexPackagesColumns = [
    columnHelper.accessor("plan", {
      header: () => <span className="font-arabic font-bold">الباقة</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("flex_minutes", {
      header: () => (
        <span className="font-arabic font-bold">
          الدقائق المحلية والدولية (فليكس)
        </span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("social_media", {
      header: () => <span className="font-arabic font-bold">سوشال ميديا</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("extra_data", {
      header: () => (
        <span className="font-arabic font-bold">بيانات إضافية</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("price", {
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة /ريال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("validity", {
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("activation_code", {
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
  ];

  const networkColumns = [
    columnHelper.accessor("package", {
      header: () => (
        <span className="font-arabic font-bold">الــبــاقــــة</span>
      ),
      cell: (info) => (
        <span className="font-arabic text-[#1670B9] text-xl">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("insideOutsideNetwork", {
      header: () => (
        <span className="font-arabic font-bold"> (داخل وخارج الشبكة)</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("insideNetwork", {
      header: () => (
        <span className="font-arabic font-bold">(داخل الشبكة)</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("price", {
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة ر/يال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("validity", {
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("activationCode", {
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
  ];

  const onlyInternetColumns = [
    columnHelper.accessor("package", {
      header: () => (
        <span className="font-arabic font-bold">الــبــاقــــة</span>
      ),
      cell: (info) => (
        <span className="font-arabic text-[#1670B9] text-xl">
          {info.getValue()}
        </span>
      ),
    }),

    columnHelper.accessor("data", {
      header: () => <span className="font-arabic font-bold">بيانات</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("promoData", {
      header: () => (
        <span className="font-arabic font-bold">عرض ترويجي بيانات</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("promoSocial", {
      header: () => (
        <span className="font-arabic font-bold">عرض ترويجي سوشيال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("price", {
      header: () => (
        <span className="font-arabic font-bold">سعر الباقة/الريال</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("validity", {
      header: () => <span className="font-arabic font-bold">الصلاحية</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),

    columnHelper.accessor("activationCode", {
      header: () => <span className="font-arabic font-bold">رمز التفعيل</span>,
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-center justify-center relative overflow-hidden">
        <Hero />
      </div>

      <div className="mt-20"></div>

      <div id="target-section">
        <Table
          data={internationalPackagesData}
          columns={internationalPackagesColumns}
          title={<p>الباقات الدولية</p>}
        />
        <div className="mt-8"></div>
        <Table
          data={internationalPackagesData2}
          columns={internationalPackagesColumns2}
          title={<p>الباقات الدولية</p>}
        />
      </div>

      <div className="mt-20"></div>

      <div className="h-[350px] md:min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-end justify-center relative overflow-hidden">
        {/* Container Adjusts Layout on Different Screen Sizes */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-end md:justify-center gap-8 max-w-[2200px] px-4 sm:px-8">
          {/* Left Side: Genie + Speech Bubble */}
          <div className="relative flex items-end md:items-center justify-center w-full  sm:min-h-[500px] lg:min-h-[600px]">
            {/* Genie Glow (Blur Effect) */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image (Scales Dynamically) */}
            <img
              ref={genieRef}
              src={genie2}
              alt="Magic Lantern"
              className={`mt-10 sm:mt-16 lg:mt-20 w-[80%] max-w-[300px] sm:max-w-[500px] lg:max-w-[800px] 
                    relative z-10 mix-blend-screen object-contain scale-150 md:scale-110 rounded-md transition-all duration-700 ease-in-out 
                    ${
                      isVisible.flexGenie
                        ? "opacity-100 translate-x-5 -translate-y-10 md:-translate-y-1 absolute bottom-0"
                        : "opacity-0 translate-y-10"
                    }`}
            />
          </div>
        </div>

        {/* Floating Blur Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-12 h-12 sm:w-24 sm:h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-16 h-16 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-8 h-8 sm:w-16 sm:h-16 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="mt-20"></div>
      <Table data={flexPackagesData} columns={flexPackagesColumns} size="lg" />

      <div className="p-4">
        <h2 className="text-xl font-bold text-red-500 text-center mb-2">
          الدول المشمولة بمكالمات ليبارا فليكس 145 فقط 19 دولة
        </h2>

        <div className="flex justify-center mt-4 gap-2 flex-wrap">
          {flags.map((flag) => (
            <img
              key={flag}
              src={`https://flagcdn.com/w160/${flag}.png`}
              alt={flag}
              className="w-22 h-14 border rounded object-fit"
            />
          ))}
        </div>

        <div className="mt-20"></div>

        <Table
          data={allNetworksData}
          columns={networkColumns}
          title={
            <p>
              باقات المكالمات المحلية اللامحدودة{" "}
              <span className="text-[#1F295D]">علي جميع الشبكات</span>
            </p>
          }
        />
        <div className="mt-20"></div>

        <Table
          data={libaraNetworkData}
          columns={networkColumns}
          title={
            <p>
              باقات المكالمات المحلية اللامحدودة{" "}
              <span className="text-[#1F295D]">علي شبكة ليبارا</span>
            </p>
          }
        />

        <div className="mt-5"></div>

        <p className="font-arabic font-bold text-right text-xl px-[13%]">
          جميع اسعار الباقات اعلاه <span className="underline">غير شامله</span>{" "}
          القيمة المضافة*
        </p>
        <div className="mt-20"></div>

        <Table
          columns={yallaPackageColumns}
          data={yallaPackageData}
          title={<p>باقات يلا</p>}
        />
      </div>

      <div className="mt-20"></div>

      <div className="h-[350px] md:min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-end justify-end relative overflow-hidden">
        <div className="w-full flex lg:flex-row items-center justify-center gap-8 max-w-[2200px] ">
          {/* Left Side: Genie + Speech Bubble */}
          {/* Genie Container with Glow Effect */}
          <div className="relative flex items-end justify-end w-full min-h-[600px] ">
            {/* Genie Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image */}
            <img
              ref={genie2Ref}
              src={geniee}
              alt="Magic Lantern"
              className={` w-[350px] sm:w-[450px] md:w-[500px] lg:w-[700px] max-h-[500px] md:max-h-[900px] items-end scale-125 relative z-10 mix-blend-screen object-contain  rounded-md justify-end flex transition-all duration-700 ease-in-out ${
                isVisible.onlyNetGenie
                  ? "opacity-100 -rotate-31 md:-rotate-20 translate-y-11 -translate-x-8 md:-translate-x-30"
                  : "opacity-0 translate-y-10"
              }`}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="mt-20"></div>

      <Table
        data={onlyInterntData}
        columns={onlyInternetColumns}
        title={<p>باقات البيانات</p>}
      />
      <div className="mt-5"></div>

      <p className="font-arabic font-bold text-right text-xl px-[13%]">
        (10 جيجابايت في اليوم) سيتم تطبيق سياسة الاستخدام العادل علي باقات
        البيانات اللا محدودة*
      </p>

      <div className="mt-20"></div>

      <div className="h-[350px]  md:min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-end justify-end relative overflow-hidden">
        <div className="w-full flex lg:flex-row items-center justify-center gap-8 max-w-[2200px] ">
          {/* Left Side: Genie + Speech Bubble */}
          {/* Genie Container with Glow Effect */}
          <div className="relative flex items-end justify-start w-full min-h-[600px] ">
            {/* Genie Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image */}
            <img
              src={lastGenie}
              alt="Magic Lantern"
              className={` max-h-[800px] items-end animate-float-up-and-down relative z-10 mix-blend-screen object-contain  rounded-md justify-end flex transition-all duration-700 ease-in-out `}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
