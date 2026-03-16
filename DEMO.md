# Health Canopy — Demo Guide

**AI-powered hospital inventory intelligence that unifies supply chain visibility across every PAR location, department, and supply chain in your facility.**

## What This App Does

Health Canopy replaces the 3-5 disconnected software systems hospitals use today with a single platform that connects every supply chain — Med/Surg, Pharmacy/ADC, Surgical/OR, and Lab — into one unified view. It combines real-time inventory tracking with AI-powered demand forecasting, Joint Commission compliance monitoring, and surgeon preference card workflows.

The demo is configured for **Contra Costa Regional Medical Center** (UCSF Contra Costa Healthcare system), a mid-sized community hospital with 4 facilities, 8 departments, 62 PAR locations, and ~18,800 tracked SKUs.

---

## Pages & What to Show

### 1. Dashboard (`/`)

**The "single pane of glass" for hospital operations.**

- **KPI Row**: Total SKUs, PAR locations monitored (62 across 4 facilities), active alerts, monthly spend vs. budget
- **Supply Chain Status Strip**: Real-time fill rates across all 4 parallel supply chains (Med/Surg, Pharmacy/ADC, Surgical/OR, Lab). Red = Surgical at 76% due to suture shortage
- **Items Needing Attention**: Critical/out-of-stock items (Heparin at 23% of PAR, Vicryl sutures critical, ventilator circuits out of stock)
- **Cross-Location Imbalances**: The key differentiator — shows when one floor is hoarding supplies while another runs out. Example: Med/Surg 3E has nitrile gloves at 180% of PAR while ICU is at 42%. Suggested transfer: move 400 units
- **AI Insights**: Flu surge predicted (CDC data), unusual fentanyl consumption in ICU (diversion risk), surgical volume spike next week
- **Incoming Deliveries**: Delayed shipments with severity, on-track deliveries with tracking timelines

### 2. Inventory (`/inventory`)

**Every item across every PAR location — searchable, filterable, actionable.**

- **Summary Cards**: Total SKUs, stock status breakdown, inventory value, PAR location count
- **Department Overview**: Click any department to filter. Each shows item count and PAR location count
- **Filters**: Search by name/SKU/lot/supplier. Filter by category, status, department, and **supply chain** (Med/Surg, Pharmacy, Surgical, Lab)
- **Click any row** to expand the detail panel showing:
  - Full item metadata (PAR level, reorder point, unit cost, supplier)
  - **GPO Contract** reference (e.g., "Vizient #MS-2025-441")
  - **PAR Location Distribution** — where exactly this item sits across the hospital with quantities per location, storage type (Shelf, Pyxis MedStation, Omnicell, Refrigerator, Secure Cage), and floor
  - Controlled substance chain-of-custody badge (for Fentanyl)
- **Export**: Downloads a real CSV of all inventory data
- **Working search**: Try "heparin", "pyxis", "critical", or a SKU like "PPE-GLV"

### 3. AI Insights (`/ai-insights`)

**Current-state analysis: what's happening right now in your inventory.**

- **Consumption chart**: Actual vs. AI-predicted daily supply usage with 90% confidence bands
- **Department usage breakdown**: Current daily consumption vs. AI-predicted. Red bars flag departments with >10% predicted increase (ED, OR, ICU)
- **Items needing attention**: Organized into Critical/OOS, Low Stock, and Expiring Soon columns
- **AI Alerts**: Anomaly detection (fentanyl consumption spike), cost optimization (vendor consolidation opportunity saving $23K/year), compliance gaps (96-hour stockpile below target)
- **Take Action / Snooze** buttons work — demonstrate the workflow

### 4. Forecasting & OR (`/forecasting`)

**What the hospital will need next — driven by OR schedule and public health data.**

- **Overview cards**: OR schedule (69 surgeries across 6 ORs), predicted consumption trend, outbreak risk (HIGH — flu surge), April spend forecast ($942K, $32K over budget)
- **Demand forecast chart**: 14-day forward consumption prediction with confidence intervals
- **OR Schedule & Preference Cards**: Click any day to see:
  - **Case schedule**: Each surgery with time, OR room, surgeon, procedure, and "Pref Card" badge
  - **Supply requirements**: Aggregated pick list computed from surgeon-specific preference cards
  - **Shortfall alerts**: "Need 40 Vicryl sutures, only 15 in stock — PO-4522 pending approval"
  - **Consignment implants**: High-value devices (Zimmer Biomet knee, Stryker Mako, DePuy hip stem) with vendor, rep name, and consignment value. Shows "3 vendor reps to coordinate"
- **What-If Scenarios**: Toggle between Normal Operations, Flu Surge (40% ED increase), and Supply Disruption (Medline + Cardinal delayed 5 days). Each shows impact on PPE burn rate, stockouts, cost, and AI-recommended mitigations
- **Prediction alerts**: Forward-looking AI alerts with expand/action workflow

### 5. Budget & Procurement (`/budget`)

**Financial tracking from budget allocation through delivery.**

- **KPIs**: Annual budget ($11.4M), YTD spend vs. budget (variance tracking), inventory valuation ($3.03M on shelves), pending POs, in-transit shipments
- **Tab: Budget & Valuation**: Monthly spend vs. budget chart with AI forecast overlay. Budget allocation table by supply category with AI full-year projections. Inventory valuation by department with days-on-hand analysis
- **Tab: Purchase Orders**: Every PO with status (AI-recommended, pending, approved, submitted, in-transit). Shows trigger reason (PAR alert, AI forecast, auto-reorder). **Approve & Submit buttons work** — click to approve a PO
- **Tab: Deliveries**: Delayed shipments with delay reason, carrier updates, inventory impact analysis, and mitigation options. On-track deliveries with visual tracking timeline. AI-projected next orders with cost estimates
- **Export buttons** download real CSVs

### 6. Supply Chain (`/analytics`)

**Vendor performance, cost optimization, and operational efficiency.**

- **KPIs**: Monthly spend, inventory turnover (12.8x), avg lead time, fill rate, waste/expiration ($90K YTD), active vendors
- **Time range toggle**: 30 Days, 90 Days, 12 Months
- **Cost trend chart**: Monthly spend vs. budget with over-budget months highlighted
- **Waste breakdown**: Expired meds (38%), damaged supplies (14%), overstocked items (32%), recalled (10%). AI recommendation for FEFO enforcement
- **Vendor scorecard**: On-time %, fill rate %, avg lead time, order volume, spend per vendor
- **Turnover radar chart**: Actual vs. industry benchmark by department. Insight callout for OR underperformance
- **Export** downloads vendor performance CSV

### 7. Compliance (`/compliance`)

**Joint Commission continuous readiness monitoring.**

- **Readiness score gauge**: 88/100 with survey-ready / needs-attention / at-risk classification
- **Quick actions**: Run Mock Survey, Generate Audit Report, PM Status Report, 96-Hour Sustainability calculation — all produce feedback
- **Equipment & PM summary**: 10 devices, 3 overdue, 1 due soon, 6 high-risk, 3 life-support
- **Tab: Chapter Scorecard**: All 7 TJC chapters (EC, MM, IC, EM, IM, LD, NPSG) with scores, trend indicators, and expandable findings. Click to see open findings with severity, status, assignee, due date
- **Tab: Equipment Registry**: Full medical equipment inventory with risk level, life-support classification, PM status, AEM flags, and tooltips explaining each TJC standard
- **Tab: Findings & Corrective Actions**: All 8 open findings in a sortable table
- **Tab: Audit Reports**: 8 report types (equipment inventory, PM completion, medication disposition, etc.) with Generate buttons

---

## Global Features

- **Command Palette Search** (top header or `Cmd+K`): Searches across all data — inventory, equipment, POs, compliance findings, AI insights, deliveries, vendors. Keyboard navigable
- **Notifications** (bell icon): Dropdown with recent activity feed, mark-all-read
- **AI Assistant** (floating button, bottom-right): Chat interface that answers natural language questions about inventory, orders, compliance, and more. Try: "What's running low?" or "Show me pending purchase orders"
- **Toast notifications**: Every action button provides visual feedback

---

## Key Talking Points for Stakeholders

1. **Unified view across all supply chains**: One system replaces 3-5 disconnected tools. The supply chain status strip shows Med/Surg, Pharmacy/ADC, Surgical/OR, and Lab chains in one glance.

2. **Cross-location visibility solves hoarding**: The imbalance alerts detect when one floor has excess while another is critical — and suggests specific transfers with quantities.

3. **62 PAR locations monitored**: Every supply room, Pyxis MedStation, Omnicell cabinet, isolation cart, and satellite pharmacy is tracked from one dashboard.

4. **AI-powered demand forecasting**: Consumption predictions combine historical patterns, scheduled surgeries, and CDC surveillance data. The flu surge scenario shows proactive vs. reactive procurement.

5. **Surgeon preference cards drive OR planning**: Each surgeon's specific supply and implant requirements are mapped to the OR schedule. Consignment implant tracking with vendor rep coordination.

6. **Joint Commission always-ready**: Continuous compliance monitoring across all 7 TJC chapters, not just annual audit prep. Equipment PM tracking with AEM documentation.

7. **GPO contract awareness**: Every item shows its GPO contract tier, enabling procurement teams to maximize committed pricing and identify off-contract spend.

---

## Running the App

```bash
npm install
npm run dev
# Open http://localhost:3000
```
