export interface CycleStep {
  id: number;
  title: string;
  phase: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
  badge: string;
}

export interface ImpactResults {
  weight: number;
  co2: number;
  energyKwh: number;
  homesCount: number;
  waterLitres: number;
  ironOreSaved: number;
  coalSaved: number;
}
