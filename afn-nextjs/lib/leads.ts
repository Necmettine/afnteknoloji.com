import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export interface LeadRecord {
  id: string;
  type: "contact" | "support";
  source: string;
  createdAt: string;
  payload: Record<string, unknown>;
}

const DATA_DIR = join(process.cwd(), "data");
const LEADS_PATH = join(DATA_DIR, "lead-inbox.json");

function readLeads(): LeadRecord[] {
  if (!existsSync(LEADS_PATH)) {
    return [];
  }

  try {
    return JSON.parse(readFileSync(LEADS_PATH, "utf-8")) as LeadRecord[];
  } catch {
    return [];
  }
}

function writeLeads(leads: LeadRecord[]) {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  writeFileSync(LEADS_PATH, JSON.stringify(leads, null, 2), "utf-8");
}

export function storeLead(lead: Omit<LeadRecord, "id" | "createdAt">) {
  const record: LeadRecord = {
    ...lead,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  const leads = readLeads();
  leads.unshift(record);
  writeLeads(leads);

  return record;
}
