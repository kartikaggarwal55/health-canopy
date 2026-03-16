// ============================================================
// Mock Data for Health Canopy — UCSF Contra Costa Healthcare
// ============================================================

export const organization = {
  name: "Contra Costa Regional Medical Center",
  system: "UCSF Contra Costa Healthcare",
  locations: [
    { id: "ccmc", name: "Contra Costa Regional Medical Center", city: "Martinez, CA" },
    { id: "hc-richmond", name: "Health Center — Richmond", city: "Richmond, CA" },
    { id: "hc-pittsburg", name: "Health Center — Pittsburg", city: "Pittsburg, CA" },
    { id: "hc-concord", name: "Health Center — Concord", city: "Concord, CA" },
  ],
};

export const departments = [
  { id: "ed", name: "Emergency Department", icon: "Siren", itemCount: 1847, location: "ccmc" },
  { id: "or", name: "Operating Rooms", icon: "Scissors", itemCount: 2341, location: "ccmc" },
  { id: "pharmacy", name: "Pharmacy", icon: "Pill", itemCount: 3215, location: "ccmc" },
  { id: "central-supply", name: "Central Supply", icon: "Warehouse", itemCount: 5623, location: "ccmc" },
  { id: "icu", name: "Intensive Care Unit", icon: "HeartPulse", itemCount: 1456, location: "ccmc" },
  { id: "medsurg", name: "Med/Surg", icon: "Bed", itemCount: 1234, location: "ccmc" },
  { id: "ld", name: "Labor & Delivery", icon: "Baby", itemCount: 987, location: "ccmc" },
  { id: "lab", name: "Laboratory", icon: "FlaskConical", itemCount: 2109, location: "ccmc" },
];

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  department: string;
  sku: string;
  currentStock: number;
  parLevel: number;
  reorderPoint: number;
  unitCost: number;
  lotNumber: string;
  expirationDate: string | null;
  lastReceived: string;
  supplier: string;
  status: "in-stock" | "low-stock" | "critical" | "out-of-stock" | "expiring-soon";
  riskLevel?: "high" | "medium" | "low";
};

export const inventoryItems: InventoryItem[] = [
  { id: "INV-001", name: "Nitrile Examination Gloves (M)", category: "PPE", department: "Central Supply", sku: "PPE-GLV-NIT-M", currentStock: 12400, parLevel: 15000, reorderPoint: 8000, unitCost: 0.12, lotNumber: "LT-2026-0341", expirationDate: "2027-09-15", lastReceived: "2026-03-10", supplier: "Medline Industries", status: "in-stock" },
  { id: "INV-002", name: "N95 Respirator Masks", category: "PPE", department: "Central Supply", sku: "PPE-MSK-N95", currentStock: 3200, parLevel: 5000, reorderPoint: 2500, unitCost: 1.85, lotNumber: "LT-2026-0287", expirationDate: "2028-01-20", lastReceived: "2026-03-08", supplier: "3M Healthcare", status: "low-stock" },
  { id: "INV-003", name: "IV Catheter 20G", category: "Supplies", department: "Emergency Department", sku: "SUP-IVC-20G", currentStock: 450, parLevel: 600, reorderPoint: 300, unitCost: 3.45, lotNumber: "LT-2026-0512", expirationDate: "2027-06-30", lastReceived: "2026-03-12", supplier: "BD Medical", status: "low-stock" },
  { id: "INV-004", name: "Propofol 200mg/20mL", category: "Medication", department: "Pharmacy", sku: "RX-PRO-200", currentStock: 180, parLevel: 250, reorderPoint: 100, unitCost: 12.50, lotNumber: "LT-2026-0198", expirationDate: "2026-06-15", lastReceived: "2026-03-05", supplier: "Fresenius Kabi", status: "expiring-soon" },
  { id: "INV-005", name: "Surgical Drape Kit — Total Knee", category: "Surgical", department: "Operating Rooms", sku: "SRG-DRP-TKR", currentStock: 85, parLevel: 100, reorderPoint: 40, unitCost: 34.00, lotNumber: "LT-2026-0445", expirationDate: null, lastReceived: "2026-03-11", supplier: "Cardinal Health", status: "in-stock" },
  { id: "INV-006", name: "Heparin Sodium 5000U/mL", category: "Medication", department: "Pharmacy", sku: "RX-HEP-5000", currentStock: 45, parLevel: 200, reorderPoint: 80, unitCost: 8.75, lotNumber: "LT-2026-0089", expirationDate: "2026-11-30", lastReceived: "2026-02-28", supplier: "Pfizer", status: "critical" },
  { id: "INV-007", name: "Endotracheal Tube 7.5mm", category: "Respiratory", department: "ICU", sku: "RSP-ETT-75", currentStock: 120, parLevel: 150, reorderPoint: 60, unitCost: 7.20, lotNumber: "LT-2026-0334", expirationDate: "2028-03-15", lastReceived: "2026-03-09", supplier: "Medtronic", status: "in-stock" },
  { id: "INV-008", name: "Foley Catheter 16Fr", category: "Supplies", department: "Med/Surg", sku: "SUP-FOL-16F", currentStock: 210, parLevel: 300, reorderPoint: 120, unitCost: 4.50, lotNumber: "LT-2026-0267", expirationDate: "2027-12-31", lastReceived: "2026-03-07", supplier: "Teleflex", status: "low-stock" },
  { id: "INV-009", name: "Fentanyl Citrate 100mcg/2mL", category: "Controlled Substance", department: "Pharmacy", sku: "RX-FEN-100", currentStock: 340, parLevel: 400, reorderPoint: 150, unitCost: 2.30, lotNumber: "LT-2026-0156", expirationDate: "2027-02-28", lastReceived: "2026-03-13", supplier: "Akorn", status: "in-stock" },
  { id: "INV-010", name: "Sterile Surgical Gown (L)", category: "PPE", department: "Operating Rooms", sku: "PPE-GWN-STR-L", currentStock: 540, parLevel: 800, reorderPoint: 400, unitCost: 6.75, lotNumber: "LT-2026-0378", expirationDate: null, lastReceived: "2026-03-06", supplier: "Halyard Health", status: "low-stock" },
  { id: "INV-011", name: "Blood Collection Tubes (EDTA)", category: "Laboratory", department: "Laboratory", sku: "LAB-BCT-EDTA", currentStock: 8500, parLevel: 10000, reorderPoint: 5000, unitCost: 0.35, lotNumber: "LT-2026-0401", expirationDate: "2027-08-15", lastReceived: "2026-03-11", supplier: "BD Vacutainer", status: "in-stock" },
  { id: "INV-012", name: "Oxytocin 10U/mL", category: "Medication", department: "Labor & Delivery", sku: "RX-OXY-10U", currentStock: 95, parLevel: 120, reorderPoint: 50, unitCost: 5.60, lotNumber: "LT-2026-0223", expirationDate: "2026-09-30", lastReceived: "2026-03-04", supplier: "Par Pharmaceutical", status: "in-stock" },
  { id: "INV-013", name: "Suture — Vicryl 3-0", category: "Surgical", department: "Operating Rooms", sku: "SRG-SUT-V30", currentStock: 15, parLevel: 200, reorderPoint: 80, unitCost: 9.80, lotNumber: "LT-2026-0489", expirationDate: "2028-06-30", lastReceived: "2026-02-20", supplier: "Ethicon (J&J)", status: "critical" },
  { id: "INV-014", name: "Rapid COVID-19 Antigen Test", category: "Testing", department: "Emergency Department", sku: "TST-COV-RAP", currentStock: 2100, parLevel: 3000, reorderPoint: 1000, unitCost: 5.25, lotNumber: "LT-2026-0567", expirationDate: "2026-04-30", lastReceived: "2026-03-01", supplier: "Abbott Diagnostics", status: "expiring-soon" },
  { id: "INV-015", name: "Ventilator Circuit (Adult)", category: "Respiratory", department: "ICU", sku: "RSP-VCR-ADL", currentStock: 0, parLevel: 50, reorderPoint: 20, unitCost: 18.50, lotNumber: "LT-2026-0301", expirationDate: null, lastReceived: "2026-02-15", supplier: "Fisher & Paykel", status: "out-of-stock" },
];

// Location-level stock breakdown — where exactly each item is stored
// Maps item ID → list of physical locations with quantities
export type StockLocation = {
  location: string;  // Physical location name
  floor: string;     // Floor/building
  qty: number;
  storageType: "shelf" | "pyxis" | "cabinet" | "refrigerator" | "cage" | "cart";
};

export const itemLocations: Record<string, StockLocation[]> = {
  "INV-001": [ // Nitrile Gloves
    { location: "Central Supply — Main Storeroom", floor: "B1", qty: 8000, storageType: "shelf" },
    { location: "ED Supply Room", floor: "1st Floor", qty: 1200, storageType: "shelf" },
    { location: "ICU Supply Alcove", floor: "3rd Floor", qty: 800, storageType: "shelf" },
    { location: "OR Supply Core", floor: "2nd Floor", qty: 1400, storageType: "shelf" },
    { location: "Med/Surg 4 East Supply", floor: "4th Floor", qty: 600, storageType: "shelf" },
    { location: "L&D Supply Room", floor: "2nd Floor", qty: 400, storageType: "shelf" },
  ],
  "INV-002": [ // N95 Masks
    { location: "Central Supply — Main Storeroom", floor: "B1", qty: 2000, storageType: "shelf" },
    { location: "ED Supply Room", floor: "1st Floor", qty: 500, storageType: "shelf" },
    { location: "ICU Supply Alcove", floor: "3rd Floor", qty: 300, storageType: "shelf" },
    { location: "Respiratory Therapy Office", floor: "3rd Floor", qty: 200, storageType: "cabinet" },
    { location: "Isolation Cart — 3 East", floor: "3rd Floor", qty: 200, storageType: "cart" },
  ],
  "INV-003": [ // IV Catheter 20G
    { location: "ED Supply Room", floor: "1st Floor", qty: 200, storageType: "shelf" },
    { location: "ICU Supply Alcove", floor: "3rd Floor", qty: 100, storageType: "shelf" },
    { location: "Med/Surg 4 East Supply", floor: "4th Floor", qty: 80, storageType: "shelf" },
    { location: "Central Supply — Main Storeroom", floor: "B1", qty: 70, storageType: "shelf" },
  ],
  "INV-004": [ // Propofol
    { location: "Pharmacy — Main", floor: "1st Floor", qty: 120, storageType: "refrigerator" },
    { location: "OR Anesthesia Workroom", floor: "2nd Floor", qty: 40, storageType: "refrigerator" },
    { location: "ICU Pyxis Station", floor: "3rd Floor", qty: 15, storageType: "pyxis" },
    { location: "ED Pyxis Station", floor: "1st Floor", qty: 5, storageType: "pyxis" },
  ],
  "INV-006": [ // Heparin
    { location: "Pharmacy — Main", floor: "1st Floor", qty: 25, storageType: "shelf" },
    { location: "ICU Pyxis Station", floor: "3rd Floor", qty: 8, storageType: "pyxis" },
    { location: "ED Pyxis Station", floor: "1st Floor", qty: 7, storageType: "pyxis" },
    { location: "Med/Surg Pyxis — 4 East", floor: "4th Floor", qty: 5, storageType: "pyxis" },
  ],
  "INV-009": [ // Fentanyl (Controlled Substance)
    { location: "Pharmacy — Controlled Substance Vault", floor: "1st Floor", qty: 200, storageType: "cage" },
    { location: "OR Anesthesia Pyxis", floor: "2nd Floor", qty: 60, storageType: "pyxis" },
    { location: "ICU Pyxis Station", floor: "3rd Floor", qty: 40, storageType: "pyxis" },
    { location: "ED Pyxis Station", floor: "1st Floor", qty: 25, storageType: "pyxis" },
    { location: "L&D Pyxis Station", floor: "2nd Floor", qty: 15, storageType: "pyxis" },
  ],
  "INV-012": [ // Oxytocin
    { location: "Pharmacy — Main", floor: "1st Floor", qty: 50, storageType: "refrigerator" },
    { location: "L&D Pyxis Station", floor: "2nd Floor", qty: 30, storageType: "pyxis" },
    { location: "L&D Medication Room", floor: "2nd Floor", qty: 15, storageType: "refrigerator" },
  ],
  "INV-013": [ // Vicryl Sutures
    { location: "OR Supply Core", floor: "2nd Floor", qty: 10, storageType: "cabinet" },
    { location: "Central Supply — Main Storeroom", floor: "B1", qty: 5, storageType: "shelf" },
  ],
  "INV-014": [ // COVID Tests
    { location: "ED Supply Room", floor: "1st Floor", qty: 800, storageType: "shelf" },
    { location: "Central Supply — Main Storeroom", floor: "B1", qty: 1000, storageType: "shelf" },
    { location: "Lab — Testing Area", floor: "1st Floor", qty: 300, storageType: "shelf" },
  ],
  "INV-015": [ // Ventilator Circuits (OUT OF STOCK)
    { location: "ICU Supply Alcove", floor: "3rd Floor", qty: 0, storageType: "shelf" },
    { location: "Respiratory Therapy Office", floor: "3rd Floor", qty: 0, storageType: "shelf" },
  ],
};

// Joint Commission Compliance Data
export type ComplianceChapter = {
  id: string;
  code: string;
  name: string;
  score: number;
  totalRequirements: number;
  metRequirements: number;
  findings: number;
  lastAssessed: string;
  trend: "improving" | "stable" | "declining";
};

export const complianceChapters: ComplianceChapter[] = [
  { id: "ec", code: "EC", name: "Environment of Care", score: 87, totalRequirements: 42, metRequirements: 37, findings: 5, lastAssessed: "2026-03-10", trend: "improving" },
  { id: "mm", code: "MM", name: "Medication Management", score: 92, totalRequirements: 38, metRequirements: 35, findings: 3, lastAssessed: "2026-03-12", trend: "stable" },
  { id: "ic", code: "IC", name: "Infection Prevention & Control", score: 78, totalRequirements: 28, metRequirements: 22, findings: 6, lastAssessed: "2026-03-08", trend: "declining" },
  { id: "em", code: "EM", name: "Emergency Management", score: 84, totalRequirements: 24, metRequirements: 20, findings: 4, lastAssessed: "2026-03-05", trend: "improving" },
  { id: "im", code: "IM", name: "Information Management", score: 95, totalRequirements: 20, metRequirements: 19, findings: 1, lastAssessed: "2026-03-14", trend: "stable" },
  { id: "ld", code: "LD", name: "Leadership", score: 91, totalRequirements: 32, metRequirements: 29, findings: 3, lastAssessed: "2026-03-11", trend: "stable" },
  { id: "npsg", code: "NPSG", name: "National Patient Safety Goals", score: 89, totalRequirements: 18, metRequirements: 16, findings: 2, lastAssessed: "2026-03-13", trend: "improving" },
];

export const overallReadinessScore = 88;

// Equipment Registry
export type Equipment = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  serialNumber: string;
  department: string;
  riskLevel: "high" | "medium" | "low";
  isLifeSupport: boolean;
  lastPM: string;
  nextPM: string;
  pmStatus: "current" | "due-soon" | "overdue";
  aemApplied: boolean;
  status: "operational" | "maintenance" | "out-of-service";
};

export const equipmentRegistry: Equipment[] = [
  { id: "EQ-001", name: "Ventilator", model: "Puritan Bennett 980", manufacturer: "Medtronic", serialNumber: "PB980-2024-1847", department: "ICU", riskLevel: "high", isLifeSupport: true, lastPM: "2026-01-15", nextPM: "2026-04-15", pmStatus: "current", aemApplied: false, status: "operational" },
  { id: "EQ-002", name: "Patient Monitor", model: "IntelliVue MX800", manufacturer: "Philips", serialNumber: "IX800-2023-0934", department: "ICU", riskLevel: "high", isLifeSupport: false, lastPM: "2025-12-20", nextPM: "2026-03-20", pmStatus: "due-soon", aemApplied: false, status: "operational" },
  { id: "EQ-003", name: "Infusion Pump", model: "Alaris 8015", manufacturer: "BD Medical", serialNumber: "AL8015-2024-2156", department: "Med/Surg", riskLevel: "high", isLifeSupport: false, lastPM: "2025-11-10", nextPM: "2026-02-10", pmStatus: "overdue", aemApplied: false, status: "operational" },
  { id: "EQ-004", name: "Defibrillator", model: "LIFEPAK 20e", manufacturer: "Stryker", serialNumber: "LP20E-2023-0478", department: "Emergency Department", riskLevel: "high", isLifeSupport: true, lastPM: "2026-02-28", nextPM: "2026-05-28", pmStatus: "current", aemApplied: false, status: "operational" },
  { id: "EQ-005", name: "Anesthesia Machine", model: "Aisys CS2", manufacturer: "GE Healthcare", serialNumber: "ACS2-2024-0312", department: "Operating Rooms", riskLevel: "high", isLifeSupport: true, lastPM: "2026-01-05", nextPM: "2026-04-05", pmStatus: "current", aemApplied: false, status: "operational" },
  { id: "EQ-006", name: "Ultrasound System", model: "LOGIQ E10s", manufacturer: "GE Healthcare", serialNumber: "LGE10-2024-0567", department: "Emergency Department", riskLevel: "medium", isLifeSupport: false, lastPM: "2025-10-15", nextPM: "2026-01-15", pmStatus: "overdue", aemApplied: true, status: "maintenance" },
  { id: "EQ-007", name: "Autoclave Sterilizer", model: "AMSCO 400", manufacturer: "STERIS", serialNumber: "AM400-2022-0189", department: "Central Supply", riskLevel: "medium", isLifeSupport: false, lastPM: "2026-02-01", nextPM: "2026-05-01", pmStatus: "current", aemApplied: true, status: "operational" },
  { id: "EQ-008", name: "Blood Gas Analyzer", model: "ABL90 FLEX PLUS", manufacturer: "Radiometer", serialNumber: "ABL90-2024-0723", department: "Laboratory", riskLevel: "medium", isLifeSupport: false, lastPM: "2026-03-01", nextPM: "2026-06-01", pmStatus: "current", aemApplied: false, status: "operational" },
  { id: "EQ-009", name: "Fetal Monitor", model: "Series 700", manufacturer: "GE Healthcare", serialNumber: "S700-2023-0456", department: "Labor & Delivery", riskLevel: "high", isLifeSupport: false, lastPM: "2025-12-01", nextPM: "2026-03-01", pmStatus: "overdue", aemApplied: false, status: "operational" },
  { id: "EQ-010", name: "Electrosurgical Unit", model: "Force FX-C", manufacturer: "Medtronic", serialNumber: "FFX-2024-0834", department: "Operating Rooms", riskLevel: "medium", isLifeSupport: false, lastPM: "2026-02-15", nextPM: "2026-05-15", pmStatus: "current", aemApplied: true, status: "operational" },
];

// AI Demand Forecast Data
export const demandForecastData = [
  { date: "Mar 1", actual: 2400, predicted: 2350, lower: 2200, upper: 2500 },
  { date: "Mar 3", actual: 2550, predicted: 2420, lower: 2270, upper: 2570 },
  { date: "Mar 5", actual: 2300, predicted: 2380, lower: 2230, upper: 2530 },
  { date: "Mar 7", actual: 2680, predicted: 2500, lower: 2350, upper: 2650 },
  { date: "Mar 9", actual: 2450, predicted: 2460, lower: 2310, upper: 2610 },
  { date: "Mar 11", actual: 2720, predicted: 2580, lower: 2430, upper: 2730 },
  { date: "Mar 13", actual: 2890, predicted: 2700, lower: 2550, upper: 2850 },
  { date: "Mar 15", actual: 2780, predicted: 2750, lower: 2600, upper: 2900 },
  { date: "Mar 17", actual: null, predicted: 2820, lower: 2620, upper: 2970 },
  { date: "Mar 19", actual: null, predicted: 2900, lower: 2680, upper: 3050 },
  { date: "Mar 21", actual: null, predicted: 2850, lower: 2630, upper: 3010 },
  { date: "Mar 23", actual: null, predicted: 3100, lower: 2850, upper: 3280 },
  { date: "Mar 25", actual: null, predicted: 3250, lower: 2980, upper: 3450 },
  { date: "Mar 27", actual: null, predicted: 3180, lower: 2900, upper: 3380 },
  { date: "Mar 29", actual: null, predicted: 3050, lower: 2780, upper: 3250 },
];

export const departmentConsumption = [
  { department: "ED", current: 2800, predicted: 3100, change: 10.7 },
  { department: "OR", current: 2200, predicted: 2450, change: 11.4 },
  { department: "Pharmacy", current: 3500, predicted: 3650, change: 4.3 },
  { department: "ICU", current: 1800, predicted: 2100, change: 16.7 },
  { department: "Central Supply", current: 5200, predicted: 5400, change: 3.8 },
  { department: "Med/Surg", current: 1400, predicted: 1500, change: 7.1 },
  { department: "L&D", current: 900, predicted: 950, change: 5.6 },
  { department: "Lab", current: 2000, predicted: 2150, change: 7.5 },
];

// AI Alerts/Insights
export type AIInsight = {
  id: string;
  type: "prediction" | "anomaly" | "recommendation" | "outbreak" | "cost-saving";
  severity: "high" | "medium" | "low" | "info";
  title: string;
  description: string;
  timestamp: string;
  actionable: boolean;
  suggestedAction?: string;
  impact?: string;
};

export const aiInsights: AIInsight[] = [
  {
    id: "AI-001",
    type: "outbreak",
    severity: "high",
    title: "Flu Surge Predicted — Bay Area",
    description: "CDC ILINet data shows 34% week-over-week increase in influenza-like illness in Contra Costa County. Wastewater surveillance confirms rising viral load. Model predicts 40-60% increase in ED respiratory visits within 7-10 days.",
    timestamp: "2026-03-15T08:30:00",
    actionable: true,
    suggestedAction: "Pre-order additional Tamiflu (est. 200 units), rapid flu tests (est. 1,500 units), and N95 masks (est. 3,000 units). Auto-adjust PAR levels for respiratory supplies.",
    impact: "Prevents estimated $45,000 in emergency procurement costs",
  },
  {
    id: "AI-002",
    type: "anomaly",
    severity: "high",
    title: "Unusual Fentanyl Consumption — ICU",
    description: "Fentanyl usage in ICU has increased 47% over the past 5 days without a corresponding increase in patient census or acuity scores. Pattern deviates significantly from historical norms.",
    timestamp: "2026-03-15T06:15:00",
    actionable: true,
    suggestedAction: "Flag for pharmacy review and controlled substance audit. Cross-reference with patient administration records.",
    impact: "Potential diversion risk — requires immediate investigation",
  },
  {
    id: "AI-003",
    type: "prediction",
    severity: "medium",
    title: "Surgical Volume Spike — Week of Mar 23",
    description: "OR scheduling data shows 28 total knee replacements and 15 hip replacements booked for next week (vs. 18 and 9 typical). Procedure-specific consumption model projects supply shortfalls in 3 categories.",
    timestamp: "2026-03-15T07:00:00",
    actionable: true,
    suggestedAction: "Increase orders: Surgical Drape Kits (+15), Vicryl 3-0 Sutures (+40), Bone Cement (+12). Place orders by Mar 18 to meet lead times.",
    impact: "Prevents potential case delays saving ~$8,200/case in OR downtime costs",
  },
  {
    id: "AI-004",
    type: "cost-saving",
    severity: "info",
    title: "Vendor Consolidation Opportunity",
    description: "Analysis shows 3 separate vendors supplying similar-spec nitrile gloves across 4 locations at varying price points ($0.09–$0.15/unit). Consolidating to Medline's contract pricing would standardize at $0.10/unit.",
    timestamp: "2026-03-14T14:00:00",
    actionable: true,
    suggestedAction: "Initiate vendor consolidation review. Estimated annual savings: $23,400.",
    impact: "$23,400 annual cost reduction",
  },
  {
    id: "AI-005",
    type: "recommendation",
    severity: "medium",
    title: "96-Hour Emergency Stockpile Below Target",
    description: "Current emergency reserves would sustain operations for approximately 72 hours at current consumption rates — below the Joint Commission EM.12.02.09 requirement of 96 hours. Critical gaps in IV fluids and ventilator circuits.",
    timestamp: "2026-03-14T10:30:00",
    actionable: true,
    suggestedAction: "Increase emergency stockpile: Normal Saline 0.9% (+400 bags), Lactated Ringer's (+200 bags), Ventilator Circuits (+30 units). Estimated cost: $8,750.",
    impact: "Closes Joint Commission EM compliance gap — adds 3.2 points to readiness score",
  },
  {
    id: "AI-006",
    type: "prediction",
    severity: "low",
    title: "COVID Test Expiration — Action Needed",
    description: "2,100 rapid COVID-19 antigen tests (lot LT-2026-0567) expire April 30, 2026. Current consumption rate: ~45 tests/day. At this rate, approximately 1,075 tests will expire unused.",
    timestamp: "2026-03-13T16:00:00",
    actionable: true,
    suggestedAction: "Explore redistribution to Health Center locations (Richmond, Pittsburg, Concord) or coordinate with County Public Health for community testing events.",
    impact: "Prevents $5,644 in waste from expired inventory",
  },
];

// Analytics Data
export const monthlyCostTrend = [
  { month: "Oct", actual: 892000, budget: 900000 },
  { month: "Nov", actual: 945000, budget: 900000 },
  { month: "Dec", actual: 1020000, budget: 920000 },
  { month: "Jan", actual: 878000, budget: 910000 },
  { month: "Feb", actual: 934000, budget: 910000 },
  { month: "Mar", actual: 856000, budget: 915000 },
];

export const supplierPerformance = [
  { name: "Medline Industries", onTimeRate: 96.2, fillRate: 98.5, avgLeadDays: 2.1, orders: 142, spend: 287000 },
  { name: "Cardinal Health", onTimeRate: 93.8, fillRate: 97.2, avgLeadDays: 2.8, orders: 98, spend: 214000 },
  { name: "BD Medical", onTimeRate: 91.5, fillRate: 95.8, avgLeadDays: 3.4, orders: 76, spend: 178000 },
  { name: "McKesson", onTimeRate: 94.1, fillRate: 96.9, avgLeadDays: 2.3, orders: 120, spend: 342000 },
  { name: "Pfizer", onTimeRate: 89.7, fillRate: 94.1, avgLeadDays: 5.2, orders: 34, spend: 156000 },
  { name: "Medtronic", onTimeRate: 97.3, fillRate: 99.1, avgLeadDays: 4.1, orders: 28, spend: 412000 },
];

export const inventoryTurnover = [
  { department: "ED", turnover: 14.2, benchmark: 12.0 },
  { department: "OR", turnover: 8.7, benchmark: 10.0 },
  { department: "Pharmacy", turnover: 18.5, benchmark: 15.0 },
  { department: "Central Supply", turnover: 11.3, benchmark: 12.0 },
  { department: "ICU", turnover: 16.1, benchmark: 14.0 },
  { department: "Med/Surg", turnover: 10.8, benchmark: 11.0 },
  { department: "L&D", turnover: 9.4, benchmark: 10.0 },
  { department: "Lab", turnover: 13.7, benchmark: 12.0 },
];

// Scheduled surgeries for appointment-driven forecasting
// Each surgery type maps to specific supplies it consumes
export const procedureSupplyProfiles: Record<string, { supply: string; qty: number; unitCost: number }[]> = {
  "Total Knee": [
    { supply: "Surgical Drape Kit — Total Knee", qty: 1, unitCost: 34.00 },
    { supply: "Vicryl 3-0 Suture", qty: 2, unitCost: 9.80 },
    { supply: "Bone Cement 40g", qty: 1, unitCost: 45.00 },
    { supply: "Sterile Surgical Gown (L)", qty: 3, unitCost: 6.75 },
    { supply: "Nitrile Gloves (pair)", qty: 8, unitCost: 0.24 },
  ],
  "Hip Replacement": [
    { supply: "Surgical Drape Kit — Hip", qty: 1, unitCost: 38.00 },
    { supply: "Vicryl 3-0 Suture", qty: 3, unitCost: 9.80 },
    { supply: "Bone Cement 40g", qty: 2, unitCost: 45.00 },
    { supply: "Sterile Surgical Gown (L)", qty: 4, unitCost: 6.75 },
    { supply: "Hemovac Drain", qty: 1, unitCost: 22.00 },
  ],
  "Appendectomy": [
    { supply: "Laparoscopic Trocar Kit", qty: 1, unitCost: 28.00 },
    { supply: "Vicryl 3-0 Suture", qty: 1, unitCost: 9.80 },
    { supply: "Sterile Surgical Gown (L)", qty: 2, unitCost: 6.75 },
    { supply: "Specimen Container", qty: 1, unitCost: 2.50 },
  ],
  "C-Section": [
    { supply: "C-Section Drape Kit", qty: 1, unitCost: 32.00 },
    { supply: "Vicryl 3-0 Suture", qty: 2, unitCost: 9.80 },
    { supply: "Sterile Surgical Gown (L)", qty: 3, unitCost: 6.75 },
    { supply: "Oxytocin 10U/mL", qty: 2, unitCost: 5.60 },
    { supply: "Infant Warmer Liner", qty: 1, unitCost: 8.50 },
  ],
  "Spinal Fusion": [
    { supply: "Spinal Drape Kit", qty: 1, unitCost: 42.00 },
    { supply: "Vicryl 3-0 Suture", qty: 4, unitCost: 9.80 },
    { supply: "Bone Graft Substitute 10cc", qty: 1, unitCost: 320.00 },
    { supply: "Sterile Surgical Gown (L)", qty: 4, unitCost: 6.75 },
    { supply: "Hemovac Drain", qty: 1, unitCost: 22.00 },
  ],
};

export const upcomingSurgeries = [
  { date: "Mar 17", day: "Monday", procedures: 12, types: { "Total Knee": 4, "Hip Replacement": 2, "Appendectomy": 3, "C-Section": 3 } },
  { date: "Mar 18", day: "Tuesday", procedures: 15, types: { "Total Knee": 5, "Hip Replacement": 3, "Appendectomy": 2, "Spinal Fusion": 2, "C-Section": 3 } },
  { date: "Mar 19", day: "Wednesday", procedures: 10, types: { "Total Knee": 3, "Appendectomy": 4, "C-Section": 3 } },
  { date: "Mar 20", day: "Thursday", procedures: 18, types: { "Total Knee": 6, "Hip Replacement": 4, "Spinal Fusion": 3, "C-Section": 5 } },
  { date: "Mar 21", day: "Friday", procedures: 14, types: { "Total Knee": 5, "Hip Replacement": 3, "Appendectomy": 3, "C-Section": 3 } },
];

// Compliance findings for corrective action tracking
export type ComplianceFinding = {
  id: string;
  chapter: string;
  standard: string;
  description: string;
  severity: "high" | "medium" | "low";
  status: "open" | "in-progress" | "resolved";
  dateIdentified: string;
  dueDate: string;
  assignedTo: string;
};

export const complianceFindings: ComplianceFinding[] = [
  { id: "FND-001", chapter: "EC", standard: "EC.02.04.01 EP 2", description: "3 infusion pumps in Med/Surg not included in equipment inventory registry", severity: "high", status: "in-progress", dateIdentified: "2026-03-08", dueDate: "2026-03-22", assignedTo: "Biomed Engineering" },
  { id: "FND-002", chapter: "EC", standard: "EC.02.04.03 EP 1", description: "Preventive maintenance overdue on Ultrasound System (LOGIQ E10s) — 60 days past due", severity: "high", status: "open", dateIdentified: "2026-03-10", dueDate: "2026-03-20", assignedTo: "Biomed Engineering" },
  { id: "FND-003", chapter: "MM", standard: "MM 13.01.01 EP 1", description: "Incomplete disposition records for controlled substance returns in Pharmacy for Feb 2026", severity: "medium", status: "in-progress", dateIdentified: "2026-03-05", dueDate: "2026-03-19", assignedTo: "Pharmacy Director" },
  { id: "FND-004", chapter: "IC", standard: "IC.01.05.01 EP 3", description: "Hand hygiene supply dispensers empty in 4 of 12 patient care areas during walkthrough", severity: "high", status: "open", dateIdentified: "2026-03-12", dueDate: "2026-03-16", assignedTo: "Environmental Services" },
  { id: "FND-005", chapter: "IC", standard: "IC.02.02.01 EP 1", description: "PPE stock in isolation cart on 3 East below minimum threshold for 48-hour coverage", severity: "medium", status: "open", dateIdentified: "2026-03-11", dueDate: "2026-03-18", assignedTo: "Materials Management" },
  { id: "FND-006", chapter: "EM", standard: "EM.12.02.09 EP 1", description: "96-hour sustainability calculation not updated since Jan 2026 — does not reflect current consumption rates", severity: "medium", status: "in-progress", dateIdentified: "2026-03-05", dueDate: "2026-03-25", assignedTo: "Emergency Management" },
  { id: "FND-007", chapter: "EC", standard: "EC.02.04.01 EP 3", description: "Fetal Monitor (Series 700) not classified as high-risk despite use in continuous intrapartum monitoring", severity: "high", status: "open", dateIdentified: "2026-03-09", dueDate: "2026-03-23", assignedTo: "Biomed Engineering" },
  { id: "FND-008", chapter: "IC", standard: "IC.02.01.01 EP 5", description: "Insufficient N95 fit-test kits available — 40% of respiratory therapy staff overdue for annual fit testing", severity: "medium", status: "in-progress", dateIdentified: "2026-03-06", dueDate: "2026-03-30", assignedTo: "Infection Prevention" },
];

// ============================================================
// Budget & Delivery Forecast Data
// ============================================================

// Annual budget allocation by category
export const budgetAllocation = [
  { category: "PPE & Safety", annualBudget: 1_420_000, ytdSpend: 642_000, ytdBudget: 592_000, forecast: 1_540_000 },
  { category: "Medications (Non-Controlled)", annualBudget: 2_850_000, ytdSpend: 1_180_000, ytdBudget: 1_188_000, forecast: 2_830_000 },
  { category: "Controlled Substances", annualBudget: 680_000, ytdSpend: 295_000, ytdBudget: 283_000, forecast: 710_000 },
  { category: "Surgical Supplies", annualBudget: 3_200_000, ytdSpend: 1_380_000, ytdBudget: 1_333_000, forecast: 3_310_000 },
  { category: "Laboratory Supplies", annualBudget: 890_000, ytdSpend: 365_000, ytdBudget: 371_000, forecast: 875_000 },
  { category: "Respiratory / ICU", annualBudget: 720_000, ytdSpend: 312_000, ytdBudget: 300_000, forecast: 750_000 },
  { category: "General Medical Supplies", annualBudget: 1_640_000, ytdSpend: 695_000, ytdBudget: 683_000, forecast: 1_660_000 },
];

// Current inventory valuation by department
export const inventoryValuation = [
  { department: "Central Supply", itemCount: 5623, totalValue: 487_200, avgDaysOnHand: 18.4 },
  { department: "Pharmacy", itemCount: 3215, totalValue: 892_500, avgDaysOnHand: 12.1 },
  { department: "Operating Rooms", itemCount: 2341, totalValue: 645_300, avgDaysOnHand: 8.7 },
  { department: "Emergency Department", itemCount: 1847, totalValue: 234_100, avgDaysOnHand: 6.2 },
  { department: "Laboratory", itemCount: 2109, totalValue: 178_400, avgDaysOnHand: 14.5 },
  { department: "Intensive Care Unit", itemCount: 1456, totalValue: 312_700, avgDaysOnHand: 9.3 },
  { department: "Med/Surg", itemCount: 1234, totalValue: 156_800, avgDaysOnHand: 11.6 },
  { department: "Labor & Delivery", itemCount: 987, totalValue: 124_500, avgDaysOnHand: 15.2 },
];

// Upcoming purchase orders (pending + AI-recommended)
export type PurchaseOrder = {
  id: string;
  supplier: string;
  status: "pending-approval" | "approved" | "ai-recommended" | "submitted" | "in-transit";
  items: { name: string; qty: number; unitCost: number }[];
  totalCost: number;
  orderDate: string;
  expectedDelivery: string;
  department: string;
  triggeredBy: "auto-reorder" | "ai-forecast" | "manual" | "par-trigger";
};

export const upcomingPurchaseOrders: PurchaseOrder[] = [
  {
    id: "PO-4521",
    supplier: "Pfizer",
    status: "submitted",
    items: [
      { name: "Heparin Sodium 5000U/mL", qty: 200, unitCost: 8.75 },
    ],
    totalCost: 1_750,
    orderDate: "2026-03-15",
    expectedDelivery: "2026-03-20",
    department: "Pharmacy",
    triggeredBy: "par-trigger",
  },
  {
    id: "PO-4522",
    supplier: "Ethicon (J&J)",
    status: "pending-approval",
    items: [
      { name: "Vicryl 3-0 Suture", qty: 200, unitCost: 9.80 },
      { name: "Vicryl 2-0 Suture", qty: 100, unitCost: 10.20 },
    ],
    totalCost: 2_980,
    orderDate: "2026-03-15",
    expectedDelivery: "2026-03-19",
    department: "Operating Rooms",
    triggeredBy: "par-trigger",
  },
  {
    id: "PO-4523",
    supplier: "Fisher & Paykel",
    status: "ai-recommended",
    items: [
      { name: "Ventilator Circuit (Adult)", qty: 50, unitCost: 18.50 },
      { name: "Humidifier Chamber", qty: 25, unitCost: 12.00 },
    ],
    totalCost: 1_225,
    orderDate: "2026-03-15",
    expectedDelivery: "2026-03-22",
    department: "ICU",
    triggeredBy: "ai-forecast",
  },
  {
    id: "PO-4524",
    supplier: "3M Healthcare",
    status: "ai-recommended",
    items: [
      { name: "N95 Respirator Masks", qty: 3000, unitCost: 1.85 },
      { name: "N95 Fit-Test Kit", qty: 10, unitCost: 45.00 },
    ],
    totalCost: 6_000,
    orderDate: "2026-03-15",
    expectedDelivery: "2026-03-18",
    department: "Central Supply",
    triggeredBy: "ai-forecast",
  },
  {
    id: "PO-4525",
    supplier: "Cardinal Health",
    status: "in-transit",
    items: [
      { name: "Surgical Drape Kit — Total Knee", qty: 30, unitCost: 34.00 },
      { name: "Surgical Drape Kit — Hip", qty: 20, unitCost: 38.00 },
    ],
    totalCost: 1_780,
    orderDate: "2026-03-13",
    expectedDelivery: "2026-03-17",
    department: "Operating Rooms",
    triggeredBy: "auto-reorder",
  },
  {
    id: "PO-4526",
    supplier: "Medline Industries",
    status: "approved",
    items: [
      { name: "Nitrile Examination Gloves (M)", qty: 5000, unitCost: 0.12 },
      { name: "Nitrile Examination Gloves (L)", qty: 3000, unitCost: 0.12 },
      { name: "Sterile Surgical Gown (L)", qty: 300, unitCost: 6.75 },
    ],
    totalCost: 2_985,
    orderDate: "2026-03-14",
    expectedDelivery: "2026-03-17",
    department: "Central Supply",
    triggeredBy: "auto-reorder",
  },
];

// Monthly spend forecast (historical + AI projected)
export const monthlySpendForecast = [
  { month: "Oct '25", actual: 892_000, budget: 900_000, forecast: null },
  { month: "Nov '25", actual: 945_000, budget: 900_000, forecast: null },
  { month: "Dec '25", actual: 1_020_000, budget: 920_000, forecast: null },
  { month: "Jan '26", actual: 878_000, budget: 910_000, forecast: null },
  { month: "Feb '26", actual: 934_000, budget: 910_000, forecast: null },
  { month: "Mar '26", actual: 568_000, budget: 915_000, forecast: 895_000 },
  { month: "Apr '26", actual: null, budget: 910_000, forecast: 942_000 },
  { month: "May '26", actual: null, budget: 910_000, forecast: 918_000 },
  { month: "Jun '26", actual: null, budget: 920_000, forecast: 965_000 },
];

// Upcoming deliveries (shipments already in-transit or confirmed)
export type Delivery = {
  id: string;
  poId: string;
  supplier: string;
  carrier: string;
  trackingStatus: "label-created" | "picked-up" | "in-transit" | "out-for-delivery" | "delivered";
  items: { name: string; qty: number }[];
  totalCost: number;
  shippedDate: string;
  estimatedArrival: string;
  shippingCost: number;
};

export const upcomingDeliveries: Delivery[] = [
  {
    id: "DEL-8901",
    poId: "PO-4525",
    supplier: "Cardinal Health",
    carrier: "UPS Freight",
    trackingStatus: "in-transit",
    items: [
      { name: "Surgical Drape Kit — Total Knee", qty: 30 },
      { name: "Surgical Drape Kit — Hip", qty: 20 },
    ],
    totalCost: 1_780,
    shippedDate: "2026-03-14",
    estimatedArrival: "2026-03-17",
    shippingCost: 85,
  },
  {
    id: "DEL-8902",
    poId: "PO-4526",
    supplier: "Medline Industries",
    carrier: "FedEx Ground",
    trackingStatus: "picked-up",
    items: [
      { name: "Nitrile Examination Gloves (M)", qty: 5000 },
      { name: "Nitrile Examination Gloves (L)", qty: 3000 },
      { name: "Sterile Surgical Gown (L)", qty: 300 },
    ],
    totalCost: 2_985,
    shippedDate: "2026-03-15",
    estimatedArrival: "2026-03-17",
    shippingCost: 120,
  },
  {
    id: "DEL-8903",
    poId: "PO-4519",
    supplier: "BD Medical",
    carrier: "UPS Ground",
    trackingStatus: "out-for-delivery",
    items: [
      { name: "IV Catheter 20G", qty: 300 },
      { name: "IV Catheter 18G", qty: 200 },
      { name: "Blood Collection Tubes (EDTA)", qty: 2000 },
    ],
    totalCost: 2_425,
    shippedDate: "2026-03-13",
    estimatedArrival: "2026-03-15",
    shippingCost: 65,
  },
];

// Delayed shipments — shipments that have missed or will miss their ETA
export type DelayedShipment = {
  id: string;
  poId: string;
  supplier: string;
  carrier: string;
  items: { name: string; qty: number }[];
  totalCost: number;
  originalEta: string;
  revisedEta: string | null;
  delayDays: number;
  reason: string;
  carrierUpdate: string;
  impactSeverity: "critical" | "high" | "medium";
  affectedDepartments: string[];
  inventoryImpact: string;
  mitigationOptions: string[];
};

export const delayedShipments: DelayedShipment[] = [
  {
    id: "DEL-8895",
    poId: "PO-4512",
    supplier: "Teleflex",
    carrier: "FedEx Freight",
    items: [
      { name: "Foley Catheter 16Fr", qty: 200 },
      { name: "Foley Catheter 18Fr", qty: 150 },
      { name: "Closed Suction Catheter", qty: 100 },
    ],
    totalCost: 3_420,
    originalEta: "2026-03-13",
    revisedEta: "2026-03-18",
    delayDays: 5,
    reason: "Warehouse fulfillment backlog at Teleflex Memphis distribution center",
    carrierUpdate: "Shipment picked up Mar 15 — in transit via FedEx Freight. Revised ETA: Mar 18.",
    impactSeverity: "high",
    affectedDepartments: ["Med/Surg", "ICU"],
    inventoryImpact: "Foley Catheter 16Fr stock at 210 units (PAR: 300). At current usage of 18/day, stock reaches zero by Mar 26 — but delayed arrival still covers need.",
    mitigationOptions: [
      "Transfer 50 Foley 16Fr from Central Supply surplus to Med/Surg",
      "No emergency order needed — revised ETA still within safety window",
    ],
  },
  {
    id: "DEL-8897",
    poId: "PO-4515",
    supplier: "Fresenius Kabi",
    carrier: "XPO Logistics",
    items: [
      { name: "Normal Saline 0.9% 1000mL", qty: 500 },
      { name: "Lactated Ringer's 1000mL", qty: 300 },
      { name: "D5W 1000mL", qty: 200 },
    ],
    totalCost: 8_750,
    originalEta: "2026-03-12",
    revisedEta: null,
    delayDays: 3,
    reason: "Production delay at Fresenius Kabi Wilson, NC plant — FDA inspection causing temporary shipping hold",
    carrierUpdate: "No shipment yet. Awaiting release from supplier. No revised ETA provided.",
    impactSeverity: "critical",
    affectedDepartments: ["Central Supply", "Emergency Department", "ICU", "Med/Surg"],
    inventoryImpact: "Normal Saline stock critically low across all departments. Current supply sustains operations for approximately 48 hours. This also impacts the 96-hour emergency readiness calculation (currently at 72 hours).",
    mitigationOptions: [
      "Place emergency order with Baxter International (backup contract) — 2-day expedited delivery, est. $9,800 (+$1,050 premium)",
      "Contact Fresenius Kabi account rep for production timeline update",
      "Implement IV fluid conservation protocol — restrict non-critical IV hydration orders",
      "Transfer 100 bags Normal Saline from Pittsburg Health Center (they have 30-day surplus)",
    ],
  },
  {
    id: "DEL-8899",
    poId: "PO-4518",
    supplier: "Halyard Health",
    carrier: "UPS Ground",
    items: [
      { name: "Sterile Surgical Gown (L)", qty: 400 },
      { name: "Sterile Surgical Gown (XL)", qty: 200 },
    ],
    totalCost: 4_050,
    originalEta: "2026-03-14",
    revisedEta: "2026-03-17",
    delayDays: 3,
    reason: "Weather-related carrier delay — severe storms in Southeast US disrupting UPS Ground network",
    carrierUpdate: "Package in transit. Cleared Memphis hub Mar 15 AM. Updated ETA: Mar 17.",
    impactSeverity: "medium",
    affectedDepartments: ["Operating Rooms", "Central Supply"],
    inventoryImpact: "Surgical Gown (L) at 540 units (PAR: 800). Sufficient for current OR schedule through Mar 19. If Mar 20 surgical volume spike proceeds as scheduled (18 cases), gowns may fall below minimum.",
    mitigationOptions: [
      "Monitor UPS tracking — likely to arrive Mar 17 as revised",
      "If Mar 17 delivery confirmed, no further action needed",
    ],
  },
];

// Activity feed
export const recentActivity = [
  { time: "08:45 AM", action: "Stock received", detail: "450 units of IV Catheter 20G — ED", user: "M. Rodriguez" },
  { time: "08:30 AM", action: "AI Alert", detail: "Flu surge prediction — Bay Area outbreak intelligence", user: "System" },
  { time: "08:15 AM", action: "PM completed", detail: "Defibrillator LIFEPAK 20e — ED", user: "J. Chen" },
  { time: "07:50 AM", action: "Low stock alert", detail: "Vicryl 3-0 Sutures below reorder point — OR", user: "System" },
  { time: "07:30 AM", action: "Transfer completed", detail: "200 N95 Masks: Central Supply → ED", user: "K. Patel" },
  { time: "07:00 AM", action: "Compliance scan", detail: "Daily TJC readiness check completed — Score: 88%", user: "System" },
  { time: "06:30 AM", action: "PO generated", detail: "Auto-generated PO #4521 for Heparin Sodium — Pfizer", user: "System" },
  { time: "06:00 AM", action: "Expiration alert", detail: "Propofol 200mg — 180 units expiring Jun 15, 2026", user: "System" },
];
