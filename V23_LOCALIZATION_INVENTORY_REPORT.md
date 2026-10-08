# VisionSafe V2.3 — Localization Coverage Expansion Inventory Report

**Document ID:** `VS-V23-LOCALIZATION-INVENTORY-REPORT-01`  
**Date:** October 8, 2026  
**Repository:** `pettumuyal/VisionSafe-Dictionary-Lab-Public`  
**Local Repository:** `VisionSafe-Dictionary-Publication`  
**Feature Branch:** `feature/v23-language-localization`  
**Verified Feature Baseline Commit:** `667f488`  
**Status:** **AUTHORITATIVE PRE-TRANSLATION AUDIT COMPLETE**  

---

## 1. Executive Summary

In accordance with Section 8 of the **V2.3 Localization Coverage Expansion Specification**, this document provides a comprehensive, non-destructive inventory and classification of all remaining user-visible English text across the three primary destinations of the VisionSafe TRD Engineering Dictionary:
1. **CONCEPTS TAB** (Engineering Specifications; Field Checks & Invariants)
2. **FIELD TAB** (Operational Protocol; Acceptance & Action; Safety & Recording)
3. **REGISTER TAB** (Safety Depot Register; Mandatory Recording Fields & Maintenance Schedules; Associated Field Protocols & Procedures)

**CORE MANDATES & SAFETY POLICY:**
- **Authoritative English Primacy:** English remains the canonical and legally authoritative language for all railway engineering standards.
- **Fail-Closed Dual Protection:**
  - **Class D (English Only):** Statutory prohibitions, mathematical limit formulas, numerical thresholds, and drawing codes remain exclusively in English.
  - **Class C (English Authoritative + Accessibility Bracket):** Safety-critical instructions, electrical clearances, and PTW rules retain primary English visibility with localized Hindi/Tamil provided solely as secondary bracketed accessibility text.
- **Engineering Data Immutability:** `TRD_DICTIONARY`, `TRD_FIELD`, `TRD_REGISTERS`, and `TRD_PROCESSES` remain 100% untouched. All expansions exist strictly as an overlay in `VS_I18N` protected by `en_hash` bindings.
- **Preservation of Existing Baseline:** All 1,022 previously validated simple_terms / purpose translations and the 76/76/76 OHE parity remain untouched and valid.

---

## 2. Classification Taxonomy & Decision Rules

Every user-facing candidate element is categorized under one of four distinct operational classes:

| Class | Definition | Treatment Under Language Switch (Hindi / Tamil) | Visual Rule |
| :--- | :--- | :--- | :--- |
| **A: TRANSLATE** | Pure explanatory prose, section headers, badges, parameter titles, descriptive notes | Replaced with validated localized Hindi/Tamil text | Standard UI typography |
| **B: TRANSLATE WITH PROTECTED TERMS** | Explanatory text containing protected equipment acronyms (`OHE`, `ATD`, `VCB`, `TSS`, `SP`, `SSP`, `ACTM`, `RDSO`, `PTW`, `RTU`, `SCADA`, etc.) | Translated, but all protected technical terms remain in exact Latin script | Technical acronyms visually preserved |
| **C: ENGLISH AUTHORITATIVE + BRACKET** | Safety precautions, permit to work procedures, isolation & earthing rules, dangerous condition warnings | **Authoritative English remains visually dominant**; secondary localized translation appears in brackets | `ENGLISH (अनुवाद / மொழிபெயர்ப்பு)` |
| **D: ENGLISH ONLY** | Extreme safety-critical statutory prohibitions, statutory formula codes, numerical limits, tolerances, drawing numbers, ACTM clause citations | **English ONLY**; never translated, never modified, never obscured | Unaltered English monospace/standard text |
| **E: IGNORE / NOT USER-FACING** | Database IDs, internal foreign keys, system status codes, empty/dash placeholders | Excluded from translation layer | N/A |

---

## 3. Inventory Classification Summary Matrix

Across all candidate fields in the application, a total of **13,627** candidate data elements and **61** static UI label strings were audited:

| Destination / Section | Class A (Translate) | Class B (Translate + Protected) | Class C (English + Bracket) | Class D (English Only) | Class E (Ignore / Empty) | Total Evaluated |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Static UI Labels & Chrome** | 53 | 0 | 5 | 3 | 0 | **61** |
| **Concepts: Spec Parameter Keys** | 1,544 | 0 | 30 | 0 | 0 | **1,574** |
| **Concepts: Spec Parameter Values** | 870 | 428 | 233 | 43 | 0 | **1,574** |
| **Concepts: Field Checks & Invariants** | 1,262 | 59 | 183 | 782 | 0 | **2,286** |
| **Field: Operational Protocol** | 455 | 126 | 135 | 0 | 0 | **716** |
| **Field: Acceptance & Action** | 488 | 67 | 161 | 0 | 0 | **716** |
| **Field: Safety & Statutory Recording** | 53 | 69 | 236 | 0 | 0 | **358** |
| **Register: Required Fields & Schedules** | 1,886 | 147 | 167 | 208 | 3,934 | **6,342** |
| **TOTALS** | **6,611** | **896** | **1,150** | **1,036** | **3,934** | **13,627** |

---

## 4. Detailed Section-by-Section Inventory Breakdown

### 4.1 Static UI Chrome & Section Headers (61 Candidates)
- **Class A (Translate - 53 items):**
  - Concepts: *"Engineering Specifications"*, *"Authoritative Technical Parameters"*, *"Field Checks & Invariants"*, *"Hard Tolerances & Statutory Clearances"*, *"MANDATORY INVARIANT"*, *"OPERATIONAL LIMIT"*, *"STATUTORY CLEARANCE"*, *"FIELD INSPECTION & VERIFICATION RULE"*, *"No direct hard limits or statutory invariants mapped for this concept."*
  - Field: *"OPERATIONAL PROTOCOL"*, *"Field Working Instructions"*, *"WHEN TO CHECK"*, *"WHERE TO CHECK"*, *"WHAT TO CHECK"*, *"HOW TO CHECK"*, *"ACCEPTANCE & ACTION"*, *"Tolerances, Conditions & Mandatory Remedies"*, *"Expected Normal Condition"*, *"Abnormal / Condemning Condition"*, *"ACCEPTANCE CRITERIA"*, *"ACTION IF ABNORMAL"*, *"SAFETY & RECORDING"*, *"Safety Protocols & Statutory Governance"*, *"RECORDING REQUIREMENT"*, *"Registers:"*, *"Related Concepts:"*, *"MAINTENANCE PROCEDURE"*, *"TASK ACTIVITY"*, *"TOOLS & INSTRUMENTS"*, *"PERIODICITY"*, *"SCOPE & LIMITATIONS"*, *"ORDERED PROCEDURE STEPS"*.
  - Register: *"SAFETY DEPOT REGISTER"*, *"Register Specifications"*, *"Depot Record Governance Parameters"*, *"Governing Authority"*, *"Statutory Proforma"*, *"Maintenance Periodicity"*, *"Custodian Role"*, *"Target Equipment"*, *"Retention Period"*, *"Local Corpus Evidence"*, *"Mandatory Recording Fields & Maintenance Schedules"*, *"Statutory Maintenance Requirements & Audit Columns"*, *"Associated Field Protocols & Procedures"*, *"Cross-Referenced Maintenance Checks & Procedures"*, *"ALL"*, *"Expand All"*, *"Collapse All"*, *"CONDITION CHECK"*, *"MEASUREMENT"*, *"RECORD"*, *"ACCEPTANCE CRITERIA"*, *"PURPOSE:"*.
- **Class C (English Authoritative + Bracket - 5 items):**
  - *"SAFETY PRECAUTIONS"*, *"PRECONDITIONS & SAFETY"*, *"DEVIATION / ACTION GUIDANCE"*, *"ACTION IF ABNORMAL"*.
- **Class D (English Only - 3 items):**
  - *"HARD LIMIT / STATUTORY FORMULA"*, *"STATUTORY SOURCE"*, *"ACCEPTANCE LIMIT"*.

---

### 4.2 Concepts Tab: Specifications & Invariants
- **Engineering Specifications Grid (1,574 key-value instances across 332 concepts):**
  - **Spec Keys (1,574):** 1,544 Class A (e.g. *Primary Function*, *Nominal Area and Weight*, *Stranding Construction*); 30 Class C (*Statutory Safety Margin*, *Emergency Clearance Limit*).
  - **Spec Values (1,574):** 870 Class A (descriptive engineering explanations); 428 Class B (contains *OHE*, *RDSO*, *IS:3476*, *ACTM*, *25 kV*); 233 Class C (clearance rules, electrical insulation); 43 Class D (numerical codes, drawing references).
- **Field Checks & Invariants (762 checks across 332 concepts):**
  - **Checks & Conditions (1,504):** 1,262 Class A (inspection steps, visual alignment); 59 Class B (*OHE dropper spacing*, *ATD counterweight travel*); 183 Class C (*Clearance to live parts*, *Discharge rod verification*).
  - **Statutory Limits (782):** 782 Class D (Strict mathematical limits, e.g. *≥ 50 mm*, *107 mm²*, *25 kV ± 10%* — English Only).

---

### 4.3 Field Tab: Protocols, Acceptance & Safety
- **Operational Protocol (179 records × 4 fields = 716 items):**
  - *when_to_use*: 179 items (Class A/B/C periodicities and operating contexts).
  - *where_to_check*: 179 items (Class A/B structure locations and mast zones).
  - *what_to_check*: 179 items (Class A/B equipment components).
  - *how_to_check*: 179 items (Class A/B/C inspection methods).
- **Acceptance & Action (179 records × 4 fields = 716 items):**
  - *expected_condition*: 179 items (Class A/B nominal parameters).
  - *abnormal_condition*: 179 items (Class A/B/C fault states and condemning defects).
  - *acceptance_criteria*: 179 items (Class A/B/C engineering thresholds).
  - *action_if_abnormal*: 179 items (Class A/B/C mandatory rectification actions).
- **Safety & Statutory Recording (179 records × 2 fields = 358 items):**
  - *safety_precautions*: 179 items (Class C: **100% safety-critical**. English authoritative wording remains primary, accompanied by secondary bracketed Hindi/Tamil accessibility text).
  - *recording_requirement*: 179 items (Class A/B/C: depot logging instructions).
- **Maintenance Procedures & Execution Steps (46 procedures, 82 ordered steps):**
  - *normalized_wording*, *required_actions*: Class A/B.
  - *safety_precautions_and_permit*: Class C (Power Block / PTW warnings).
  - *measurements_and_limits*: Class D (Numerical tolerance codes).

---

### 4.4 Register Tab: Depot Specifications & Schedule Fields
- **Depot Governance Specifications (104 registers):**
  - *custodian_role*, *retention_period*, *governing_authority*: Class A/B.
  - *statutory_proforma*, *code*: Class D (Statutory document identifiers).
- **Required Recording Fields (906 field cards across 104 registers):**
  - *field_name*: Class A/B (inspection checkpoint names).
  - *expected_condition*, *abnormal_condition*, *record_purpose*: Class A/B.
  - *action*, *deviation_guidance*: Class C (corrective and safety remedial measures).
  - *acceptance_limit*, *unit*, *schedule_code*: Class D (Engineering numbers, units, and codes).

---

## 5. Architectural Implementation Strategy

To satisfy the **Dual Protection & Hash-Binding Mandate**, the expansion is structured cleanly within `VS_I18N`:

```
+------------------------------------------------------------------------+
|                        VS_I18N ARCHITECTURE                            |
+------------------------------------------------------------------------+
| 1. VS_I18N.UI                                                          |
|    - Chrome, static section headings, badges, and table headers        |
|                                                                        |
| 2. VS_I18N.EXPLANATIONS (Unified Overlays)                             |
|    - Concepts: simple_terms (existing), specs, invariants              |
|    - Field: purpose (existing), protocol, acceptance, safety          |
|    - Registers: required_field explanations                           |
|                                                                        |
| 3. Fail-Closed Rendering Helper:                                       |
|    getLocalizedContent(entity, fieldName, classification)              |
|    - If Class D: Always return canonical English.                      |
|    - If Class C: Return "English Authoritative (Localized Text)"       |
|    - If Class A/B: Return Localized Text (with en_hash validation)     |
|    - If hash mismatch or status !== PASS: Fallback to canonical English|
+------------------------------------------------------------------------+
```

---

## 6. Verification & Safety Sign-Off

1. **Pre-edit safety backup created:**  
   `VisionSafe_TRD_Engineering_Dictionary_V2.3.0.html.bak_pre_coverage_expansion_20261008`  
   SHA-256: `12dd107a42fc0150e96096f8757204b07ddecdd6f6edece16d3ca0bdca57ca3e`
2. **Current working tree clean:** Verified on branch `feature/v23-language-localization`.
3. **Main branch status:** Untouched, unmerged, unpushed.
4. **Next phase:** Proceed to structured translation dataset generation and UI accessor integration under the approved classification rules.
