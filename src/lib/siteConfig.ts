export const siteConfig = {
  name: "VoltRide E-Bikes",
  nameGu: "વોલ્ટરાઇડ ઈ-બાઈક્સ",
  tagline: "Bhavnagar's trusted electric bike showroom",
  taglineGu: "ભાવનગરનું વિશ્વાસપાત્ર ઈ-બાઈક શોરૂમ",
  email: "hello@voltride.in",
  phone1: "9876543210",
  phone2: "9123456780",
  founder: {
    name: "Mr. Demo Founder",
    nameGu: "શ્રી ડેમો સ્થાપક",
    role: "Founder",
    roleGu: "સ્થાપક",
  },
  coFounder: {
    name: "Mr. Demo Co-Founder",
    nameGu: "શ્રી ડેમો સહ-સ્થાપક",
    role: "Co-Founder",
    roleGu: "સહ-સ્થાપક",
  },
  address:
    "Shop No. 4A, Sukhsagar Complex, Bhagwati Circle, Kaliyabid, Bhavnagar, Gujarat 364002",
  addressGu:
    "શોપ નં. 4A, સુખસાગર કોમ્પ્લેક્સ, ભગવતી સર્કલ, કાલિયાબીડ, ભાવનગર, ગુજરાત 364002",
  mapsLink: "https://maps.google.com/?q=21.7365449,72.1379576",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=21.7365449,72.1379576",
  mapsEmbed:
    "https://www.google.com/maps?q=21.7365449,72.1379576&z=16&output=embed",
  latitude: 21.7365449,
  longitude: 72.1379576,
  workingHours: "10:00 AM – 8:00 PM, all days",
  workingHoursGu: "સવારે 10:00 થી રાત્રે 8:00, બધા દિવસ",
  experiences: 500,
  award: "Best EV Showroom 2026",
  awardGu: "બેસ્ટ ઈવી શોરૂમ 2026",
  awardBy: "Gujarat EV Dealers Association",
  awardByGu: "ગુજરાત ઈવી ડીલર્સ એસોસિએશન",
  bikeBrand: "VoltRide",
  batteryBrand: "LG Cells",
  loanBanks: ["HDFC Bank", "ICICI Bank", "State Bank of India"],
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello VoltRide E-Bikes, I want to book a test ride",
  defaultLocale: "gu",
  locales: ["gu", "en"] as const,
  pricesLastUpdated: "2026-10-19",
  copyrightYear: 2026,
  designedBy: "Developed & Maintained by Madhav Mehta and Kedar Bhatt",
  developers: [
    { name: "Madhav Mehta", role: "Developer" },
    { name: "Kedar Bhatt", role: "Developer" },
  ],
} as const;

export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function telLink(phone: string): string {
  return `tel:+91${phone}`;
}

export const offers = {
  exchange: 5000,
  corporate: 8000,
  festive: 10000,
} as const;

export const evConstants = {
  petrolPricePerLitre: 96,
  petrolMileageKmpl: 45,
  electricityRatePerUnit: 8,
  co2PerKm: 0.05,
} as const;
