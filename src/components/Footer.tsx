export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-[#00001F] to-[#2E3387] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and company info */}
          <div className="mb-6 md:mb-0 text-center md:text-right">
            <h3 className="font-arabic text-2xl font-bold mb-2">
              مارد الاتصالات
            </h3>
            <p className="font-arabic text-white/70">
              خدمات الاتصالات المتكاملة
            </p>
          </div>

          {/* WhatsApp contact */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-arabic text-lg mb-2">تواصل معنا عبر واتساب</p>
            <a
              href="https://wa.me/+966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-4 py-2 rounded-full transition-all hover:shadow-lg"
            >
              <span className="font-arabic font-bold text-lg">
                +9999 878 57 966
              </span>
              <div className="bg-white rounded-full p-1 flex items-center justify-center">
                +9999 878 57 966
              </div>
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="font-arabic text-white/60">
            © {new Date().getFullYear()} مارد الاتصالات - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};
