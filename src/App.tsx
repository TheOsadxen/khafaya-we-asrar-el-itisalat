import { createColumnHelper } from "@tanstack/table-core";
import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Table } from "./components/UI/Table";
import genie2 from "./assets/genie2.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const columnHelper = createColumnHelper();

  const genieRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true only when in view
        }
      },
      { threshold: 0.3 }
    );

    if (genieRef.current) {
      observer.observe(genieRef.current);
    }

    return () => {
      if (genieRef.current) observer.unobserve(genieRef.current);
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

  const internationalPackagesData = [
    {
      country: "مصر",
      packageName: "مصر اليومية",
      internationalMinutes: "25",
      localMinutes: "-",
      data: "1 جيجابايت",
      price: "5",
      validity: "يوم واحد",
      activationCode: "*666*05#",
      subRows: [],
    },
    {
      country: "مصر",
      packageName: "مصر الأسبوعية",
      internationalMinutes: "80",
      localMinutes: "-",
      data: "3 جيجابايت صالحة لمدة 3 ايام",
      price: "15",
      validity: "7 أيام",
      activationCode: "*666*105#",
      subRows: [],
    },
    {
      country: "مصر",
      packageName: "مصر الشهرية",
      internationalMinutes: "300",
      localMinutes: "-",
      data: "6 جيجابايت صالحة لمدة 7 ايام",
      price: "50",
      validity: "30 يوم",
      activationCode: "*666*35#",
      subRows: [],
    },
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

  const internationalPackagesData2 = [
    {
      country: "السودان",
      packageName: "السودان (زين السودان) و مصر اليومية",
      internationalMinutes: 70,
      localMinutes: "-",
      data: "1 جيجابايت",
      price: 7,
      validity: "يوم واحد",
      activationCode: "*666*023#",
    },
    {
      country: "السودان",
      packageName: "السودان (زين السودان) و مصر الأسبوعية",
      internationalMinutes: 300,
      localMinutes: "-",
      data: "2 جيجابايت",
      price: 30,
      validity: "7 أيام",
      activationCode: "*666*240#",
    },
    {
      country: "السودان",
      packageName: "السودان (زين السودان) و مصر الشهرية",
      internationalMinutes: 800,
      localMinutes: "-",
      data: "5 جيجابايت",
      price: 80,
      validity: "30 يوم",
      activationCode: "*666*075#",
    },
    {
      country: "اليمن",
      packageName: "اليمن اليومية 5 ريال",
      internationalMinutes: 20,
      localMinutes: "-",
      data: "1 جيجابايت",
      price: 5,
      validity: "يوم واحد",
      activationCode: "*666*671#",
    },
    {
      country: "اليمن",
      packageName: "اليمن اليومية 10 ريال",
      internationalMinutes: 45,
      localMinutes: "-",
      data: "1 جيجابايت",
      price: 10,
      validity: "يوم واحد",
      activationCode: "*666*670#",
    },
    {
      country: "اليمن",
      packageName: "اليمن الأسبوعية 20 ريال",
      internationalMinutes: 95,
      localMinutes: "-",
      data: "1 جيجابايت",
      price: 20,
      validity: "7 أيام",
      activationCode: "*666*625#",
    },
    {
      country: "اليمن",
      packageName: "اليمن الأسبوعية 40 ريال",
      internationalMinutes: 200,
      localMinutes: "-",
      data: "3 جيجابايت",
      price: 40,
      validity: "7 أيام",
      activationCode: "*666*678#",
    },
  ];

  /*----------------------------------------------*/

  const flexPackagesData = [
    {
      plan: "فليكس الشهرية",
      flex_minutes: "1500",
      social_media: "50 جيجابايت",
      extra_data: "50 جيجابايت",
      price: "145 ريال",
      validity: "28 يوم",
      activation_code: "#145*666*",
    },
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

  /**************/
  // Data for the first table (All networks unlimited local calls)
  const allNetworksData = [
    {
      package: "2000 دقيقة محلية شهرية",
      insideOutsideNetwork: "2000",
      insideNetwork: "-",
      price: "40",
      validity: "30يوم",
      activationCode: "*666*208#",
    },
    {
      package: "500 دقيقة محلية شهرية",
      insideOutsideNetwork: "500",
      insideNetwork: "-",
      price: "30",
      validity: "30 يوم",
      activationCode: "*666*230#",
    },
    {
      package: "1000 دقيقة محلية اسبوعية",
      insideOutsideNetwork: "1000",
      insideNetwork: "-",
      price: "20",
      validity: "7 أيام",
      activationCode: "*666*206#",
    },
    {
      package: "200 دقيقة محلية اسبوعية",
      insideOutsideNetwork: "200",
      insideNetwork: "-",
      price: "15",
      validity: "7 أيام",
      activationCode: "*666*20 7#",
    },
    {
      package: "200 دقيقة محلية يومية",
      insideOutsideNetwork: "200",
      insideNetwork: "-",
      price: "5",
      validity: "يوم",
      activationCode: "*666*205#",
    },
    {
      package: "30 دقيقة محلية يومية",
      insideOutsideNetwork: "30",
      insideNetwork: "-",
      price: "3",
      validity: "يوم",
      activationCode: "*666*20 1#",
    },
  ];

  // Data for the second table (Libara network unlimited local calls)
  const libaraNetworkData = [
    {
      package: "مكالمات لامحدود الشهرية",
      insideOutsideNetwork: "-",
      insideNetwork: "لا محدود",
      price: "22",
      validity: "30يوم",
      activationCode: "*666*130#",
    },
    {
      package: "مكالمات لامحدود الاسبوعية",
      insideOutsideNetwork: "-",
      insideNetwork: "لا محدود",
      price: "6",
      validity: "7 أيام",
      activationCode: "*666*107#",
    },
    {
      package: "مكالمات لامحدود اليومية",
      insideOutsideNetwork: "-",
      insideNetwork: "لا محدود",
      price: "1.5",
      validity: "يوم",
      activationCode: "*666*101#",
    },
  ];

  const networkColumns = [
    columnHelper.accessor("package", {
      header: () => (
        <span className="font-arabic font-bold">"الــبــاقــــة"</span>
      ),
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("insideOutsideNetwork", {
      header: "(داخل وخارج الشبكة)",
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("insideNetwork", {
      header: "(داخل الشبكة)",
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("price", {
      header: "سعر الباقة ر/يال",
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("validity", {
      header: "الصلاحية",
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
    columnHelper.accessor("activationCode", {
      header: "رمز التفعيل",
      cell: (info) => <span className="font-arabic">{info.getValue()}</span>,
    }),
  ];

  const flags = [
    "us",
    "ca",
    "id",
    "pk",
    "bd",
    "eg",
    "ph",
    "in",
    "ae",
    "kw",
    "qa",
    "jo",
    "cn",
    "my",
    "lb",
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-center justify-center relative overflow-hidden">
        <Hero />
      </div>

      <div className="mt-20"></div>

      <Table
        data={internationalPackagesData}
        columns={internationalPackagesColumns}
        title="الباقات الدولية"
      />

      <div className="mt-8"></div>

      <Table
        data={internationalPackagesData2}
        columns={internationalPackagesColumns2}
        title="الباقات الدولية"
      />

      <div className="mt-20"></div>

      <div className="min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-end justify-center relative overflow-hidden">
        <div className="w-full flex lg:flex-row items-center justify-center gap-8 max-w-[2200px] ">
          {/* Left Side: Genie + Speech Bubble */}
          {/* Genie Container with Glow Effect */}
          <div className="relative flex items-center justify-center w-full min-h-[600px]">
            {/* Genie Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full transform scale-110"></div>

            {/* Genie Image */}
            <img
              ref={genieRef}
              src={genie2}
              alt="Magic Lantern"
              className={`mt-20 w-full max-h-[800px]  relative z-10 mix-blend-screen object-contain  rounded-md justify-center self-center flex transition-all duration-700 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            />

            {/* Speech Bubble */}
            <div className="speech-bubble animate-float p-6 shadow-xl  lg:w-[500px] -translate-y-70 -translate-x-160">
              <p
                className="text-2xl lg:text-4xl text-right font-arabic font-bold text-white tracking-wide"
                style={{ direction: "rtl" }}
              >
                ولو بتفكر في حاجة فليكس، خد المفاجأة
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
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
              src={`https://flagcdn.com/w80/${flag}.png`}
              alt={flag}
              className="w-16 h-12 border rounded object-fit"
            />
          ))}
        </div>

        <div className="mt-20"></div>

        <Table
          data={allNetworksData}
          columns={networkColumns}
          title="باقات المكالمات المحلية اللامحدودة على جميع الشبكات"
        />
        <div className="mt-20"></div>

        <Table
          data={libaraNetworkData}
          columns={networkColumns}
          title="باقات المكالمات المحلية اللامحدودة على  شبكة ليبارا"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
