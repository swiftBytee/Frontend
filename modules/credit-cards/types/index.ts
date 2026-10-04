// modules/credit-cards/types/index.ts

export type CardType = "fd" | "normal";
export type CCStatus = "initiated" | "completed" | "cancelled";

export interface CreditCardApplication {
  application_id: number;
  card_type: CardType;
  agent_id: number | null;
  applied_from_office: number; // 0 or 1
  full_name: string;
  email: string;
  phone: string;
  aadhaar_number: string | null;
  pan_number: string | null;
  aadhaar_doc_path: string | null;
  pan_doc_path: string | null;
  pincode: string;
  status: CCStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
  // joined
  agent_name?: string | null;
  agent_email?: string | null;
}

export interface CreateCreditCardApplicationPayload {
  card_type: CardType;
  agent_id?: number | null;
  full_name: string;
  email: string;
  phone: string;
  aadhaar_number: string;
  pan_number: string;
  pincode: string;
  notes?: string;
}

export interface CardTypeMeta {
  value: CardType;
  label: string;
  description: string;
  accent: "violet" | "blue";
}

// ---------- FD Document checklist ----------
export interface CcDocumentChecklistItem {
  doc_type: "aadhaar" | "pan";
  label: string;
  path: string | null;
  uploaded: boolean;
}

export interface CcDocumentChecklist {
  application_id: number;
  card_type: CardType;
  status: CCStatus;
  checklist: CcDocumentChecklistItem[];
  all_uploaded: boolean;
  uploaded_count: number;
  total_required: number;
}
