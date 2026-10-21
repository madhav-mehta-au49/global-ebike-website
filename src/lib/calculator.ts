import prices from "../content/prices.json";
import content from "../content/content.json";
import { evConstants } from "./siteConfig";

export type BikeModel = {
  id: string;
  name: string;
  nameGu: string;
  category: string;
  rangeKm: number;
  battery: string;
  batteryKwh: number;
  motor: string;
  topSpeed: number;
  price: number;
  offerPrice: number;
  tag: string | null;
  tagGu?: string | null;
  image: string;
  seats: number;
};

export const models: BikeModel[] = prices.models as BikeModel[];
export const projects = content.projects;
export const testimonials = content.testimonials;
export const awards = content.awards;
export const materials = content.materials;

export const inr = (n: number): string => "₹" + n.toLocaleString("en-IN");

export function formatRange(km: number): string {
  return `${km} km`;
}

export function recommendModel(dailyKm: number): BikeModel {
  const sorted = [...models].sort((a, b) => a.rangeKm - b.rangeKm);
  return sorted.find((m) => m.rangeKm >= dailyKm) ?? sorted[sorted.length - 1];
}

export type CommuteResult = {
  model: BikeModel;
  monthlyKm: number;
  chargesPerMonth: number;
  electricityCost: number;
  petrolCost: number;
  monthlySavings: number;
  paybackMonths: number;
  savings5Years: number;
  co2PerYear: number;
};

export function calculateCommute(
  dailyKm: number,
  petrolPrice: number = evConstants.petrolPricePerLitre,
  electricityRate: number = evConstants.electricityRatePerUnit
): CommuteResult {
  const safeKm = Math.max(0, dailyKm);
  const model = recommendModel(safeKm);
  const monthlyKm = safeKm * 30;
  const chargesPerMonth = model.rangeKm
    ? Math.ceil(monthlyKm / model.rangeKm)
    : 0;
  const electricityCost = Math.round(
    chargesPerMonth * model.batteryKwh * electricityRate
  );
  const petrolCost = Math.round(
    (monthlyKm / evConstants.petrolMileageKmpl) * petrolPrice
  );
  const monthlySavings = Math.max(petrolCost - electricityCost, 0);
  const paybackMonths =
    monthlySavings > 0 ? model.offerPrice / monthlySavings : 0;
  const savings5Years = monthlySavings * 60;
  const co2PerYear = Math.round(monthlyKm * 12 * evConstants.co2PerKm);

  return {
    model,
    monthlyKm,
    chargesPerMonth,
    electricityCost,
    petrolCost,
    monthlySavings,
    paybackMonths,
    savings5Years,
    co2PerYear,
  };
}
