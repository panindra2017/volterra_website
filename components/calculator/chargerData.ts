export interface Charger {
  id: number;
  name: string;
  category: "AC" | "DC Fast" | "Ultra DC";
  power: number;

  chargerPrice: number;

  unitsPerVehicle: number;

  maxVehicles: number;

  recommendedTariff: number;

  electricityCost: number;

  installationCost: number;

  idealFor: string[];
}

export const chargers: Charger[] = [
  {
    id: 1,
    name: "3.3 kW Smart AC Charger",
    category: "AC",
    power: 3.3,

    chargerPrice: 45000,

    unitsPerVehicle: 8,

    maxVehicles: 8,

    recommendedTariff: 18,

    electricityCost: 8,

    installationCost: 25000,

    idealFor: [
      "Home",
      "Apartment",
      "Residential",
    ],
  },

  {
    id: 2,
    name: "7.4 kW Smart AC Charger",
    category: "AC",
    power: 7.4,

    chargerPrice: 65000,

    unitsPerVehicle: 12,

    maxVehicles: 12,

    recommendedTariff: 18,

    electricityCost: 8,

    installationCost: 30000,

    idealFor: [
      "Residential",
      "Apartment",
      "Office",
    ],
  },

  {
    id: 3,
    name: "11 kW Smart AC Charger",
    category: "AC",
    power: 11,

    chargerPrice: 95000,

    unitsPerVehicle: 18,

    maxVehicles: 18,

    recommendedTariff: 18,

    electricityCost: 8,

    installationCost: 35000,

    idealFor: [
      "Commercial",
      "Hotels",
      "Corporate",
    ],
  },

  {
    id: 4,
    name: "22 kW Smart AC Charger",
    category: "AC",
    power: 22,

    chargerPrice: 145000,

    unitsPerVehicle: 22,

    maxVehicles: 25,

    recommendedTariff: 18,

    electricityCost: 8,

    installationCost: 45000,

    idealFor: [
      "Hotels",
      "Corporate",
      "Public Parking",
    ],
  },

  {
    id: 5,
    name: "30 kW DC Fast Charger",
    category: "DC Fast",
    power: 30,

    chargerPrice: 450000,

    unitsPerVehicle: 28,

    maxVehicles: 35,

    recommendedTariff: 20,

    electricityCost: 9,

    installationCost: 75000,

    idealFor: [
      "Fleet",
      "Retail",
      "Commercial",
    ],
  },

  {
    id: 6,
    name: "60 kW DC Fast Charger",
    category: "DC Fast",
    power: 60,

    chargerPrice: 850000,

    unitsPerVehicle: 40,

    maxVehicles: 50,

    recommendedTariff: 20,

    electricityCost: 9,

    installationCost: 100000,

    idealFor: [
      "Fleet",
      "Highway",
      "Hotels",
    ],
  },

  {
    id: 7,
    name: "120 kW Ultra DC Charger",
    category: "Ultra DC",
    power: 120,

    chargerPrice: 1650000,

    unitsPerVehicle: 55,

    maxVehicles: 70,

    recommendedTariff: 22,

    electricityCost: 10,

    installationCost: 150000,

    idealFor: [
      "Highway",
      "Fleet",
      "Charging Hub",
    ],
  },

  {
    id: 8,
    name: "180 kW Ultra DC Charger",
    category: "Ultra DC",
    power: 180,

    chargerPrice: 2350000,

    unitsPerVehicle: 70,

    maxVehicles: 90,

    recommendedTariff: 22,

    electricityCost: 10,

    installationCost: 180000,

    idealFor: [
      "Fleet",
      "Charging Hub",
      "Bus Depot",
    ],
  },

  {
    id: 9,
    name: "240 kW Ultra DC Charger",
    category: "Ultra DC",
    power: 240,

    chargerPrice: 2950000,

    unitsPerVehicle: 85,

    maxVehicles: 110,

    recommendedTariff: 22,

    electricityCost: 10,

    installationCost: 220000,

    idealFor: [
      "Highway",
      "Public Charging",
      "Fleet",
    ],
  },

  {
    id: 10,
    name: "360 kW Ultra DC Charger",
    category: "Ultra DC",
    power: 360,

    chargerPrice: 4200000,

    unitsPerVehicle: 110,

    maxVehicles: 150,

    recommendedTariff: 24,

    electricityCost: 11,

    installationCost: 300000,

    idealFor: [
      "Mega Charging Hub",
      "Fleet",
      "Highway",
    ],
  },
];

export const getChargerById = (id: number): Charger | undefined =>
  chargers.find((charger) => charger.id === id);

export const defaultCharger = chargers[5];