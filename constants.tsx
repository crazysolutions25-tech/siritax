
import React from 'react';

export interface DetailedService {
  id: string;
  title: string;
  category: string;
  description: string;
  metaDescription: string;
  keywords: string;
  fullContent: string;
  process: string[];
  documents: string[];
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const IMG_PARAMS = 'auto=format&fit=crop&q=80&w=800';

export const SERVICES: DetailedService[] = [
  {
    id: 'gst-license',
    title: 'GST License (Registration)',
    category: 'Taxation',
    description: 'Mandatory GST registration for businesses, freelancers, and startups.',
    metaDescription: 'Get your GST registration done professionally in Hyderabad. Expert assistance for GSTIN application, document verification, and compliance.',
    keywords: 'GST Registration Hyderabad, New GST License, Business Registration India, GSTIN consultant',
    imageUrl: `https://images.unsplash.com/photo-1554224155-6726b3ff858f?${IMG_PARAMS}`,
    fullContent: 'GST Registration is the legal process of obtaining a unique GSTIN for your business. It is mandatory for any business whose turnover exceeds the threshold limit or for those involved in inter-state supply. We ensure a smooth registration process to help you claim Input Tax Credit and stay compliant with Indian tax laws.',
    process: [
      'Document Collection & Verification',
      'TRN Generation via OTP',
      'Filing Form GST REG-01',
      'Mapping Business Activity Codes',
      'Responding to Officer Queries',
      'Issuance of Registration Certificate (REG-06)'
    ],
    documents: [
      'PAN & Aadhaar of the Owner/Directors',
      'Address Proof (Electricity Bill/Property Tax)',
      'Rent Agreement & NOC from Owner',
      'Bank Account Proof (Cancelled Cheque)',
      'Digital Signature (for Companies/LLPs)'
    ],
    features: ['Legal Legitimacy', 'ITC Benefits', 'Inter-state Trade Access', 'E-commerce Readiness'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    id: 'gst-returns',
    title: 'GST Returns Filing',
    category: 'Taxation',
    description: 'Monthly and Quarterly GSTR filing to avoid penalties and interest.',
    metaDescription: 'Timely GST Return filing services (GSTR-1, GSTR-3B) in Hyderabad. Maximize Input Tax Credit (ITC) with expert reconciliation.',
    keywords: 'GST Filing, GSTR-1, GSTR-3B, GST Reconciliation, Tax Compliance Hyderabad',
    imageUrl: `https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?${IMG_PARAMS}`,
    fullContent: 'Timely filing of GST returns (GSTR-1, GSTR-3B) is vital for maintaining business reputation and avoiding legal notices. We perform deep reconciliation between your purchase books and GSTR-2B to maximize your tax savings through accurate Input Tax Credit claims.',
    process: [
      'Monthly Data Collection',
      'GSTR-2B Reconciliation with Books',
      'Computation of Tax Liability',
      'GSTR-1 (Outward Supplies) Filing',
      'GSTR-3B (Summary Return) Filing',
      'Annual GSTR-9 Reconciliation'
    ],
    documents: [
      'Sales Invoices',
      'Purchase Invoices',
      'Credit/Debit Notes',
      'Bank Statement',
      'Previous Returns Copy'
    ],
    features: ['Penalty Protection', 'ITC Maximization', 'Audit Ready Records', 'Timely Filing Reminders'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    id: 'tally-accounts',
    title: 'Tally Accounts & Finalisation',
    category: 'Accounting',
    description: 'Expert bookkeeping in Tally Prime and final balance sheet preparation.',
    metaDescription: 'Professional bookkeeping and Tally ERP services. We handle balance sheet finalization and audit support for SMEs.',
    keywords: 'Tally Prime, Bookkeeping Services, Balance Sheet Finalization, SME Accounting',
    imageUrl: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?${IMG_PARAMS}`,
    fullContent: 'We provide end-to-end accounting services using Tally Prime. From voucher entry to the finalization of the Balance Sheet and Profit & Loss account, we ensure that your financial statements are accurate, compliant with accounting standards, and ready for audit.',
    process: [
      'Voucher Classification (Sales/Purchase/Journal)',
      'Data Entry in Tally Prime',
      'Bank & Ledger Reconciliation',
      'Inventory Management Setup',
      'Preparation of Trial Balance',
      'Finalization of P&L and Balance Sheet'
    ],
    documents: [
      'Daily Cash/Bank Vouchers',
      'Bank Statements',
      'Stock Registers',
      'Previous Year Audit Reports',
      'Expense Receipts'
    ],
    features: ['Professional Reporting', 'Inventory Tracking', 'Audit Support', 'Financial Health Checks'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  {
    id: 'income-tax',
    title: 'Income Tax Returns (ITR)',
    category: 'Taxation',
    description: 'Filing ITR for Salaried, Business, and Professional individuals.',
    metaDescription: 'File your Income Tax Returns (ITR) with expert CAs. Specialized in Salaried, Capital Gains, and Business ITR filing.',
    keywords: 'ITR Filing Hyderabad, Income Tax Returns, Tax Savings, Section 80C, ITR-1, ITR-2',
    imageUrl: `https://images.unsplash.com/photo-1554224154-26032ffc0d07?${IMG_PARAMS}`,
    fullContent: 'Filing Income Tax Returns is essential for loan processing, visa applications, and claiming refunds. We analyze your income from all sources (Salary, House Property, Business, Capital Gains) to select the most beneficial tax regime and ensure compliant filing.',
    process: [
      'Income Assessment from AIS/TIS',
      'Regime Comparison (Old vs New)',
      'Calculating Deductions (80C, 80D, etc.)',
      'Drafting ITR Form',
      'E-filing via Portal',
      'E-verification via Aadhaar OTP'
    ],
    documents: [
      'PAN & Aadhaar',
      'Form 16/16A',
      'Bank Interest Certificates',
      'Home Loan Interest Cert.',
      'Investment Proofs'
    ],
    features: ['Maximum Tax Savings', 'Zero Error Filing', 'Notice Defense', 'AIS/TIS Analysis'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    id: 'msme-registration',
    title: 'MSME Registrations',
    category: 'Business',
    description: 'Udyam Registration to unlock government subsidies and bank benefits.',
    metaDescription: 'Instant MSME / Udyam registration for small businesses. Unlock government benefits, subsidies, and priority bank loans.',
    keywords: 'Udyam Registration, MSME Certificate, Small Business Benefits, Govt Schemes India',
    imageUrl: `https://images.unsplash.com/photo-1521791136064-7986c2923216?${IMG_PARAMS}`,
    fullContent: 'MSME (Micro, Small, and Medium Enterprises) or Udyam Registration provides access to numerous government schemes, low-interest bank loans, and protection against delayed payments. We help you obtain your certificate instantly.',
    process: [
      'Aadhaar Verification',
      'Business Activity Selection (NIC Codes)',
      'Uploading Investment Details',
      'Turnover Self-Declaration',
      'Final Submission',
      'Udyam Certificate Download'
    ],
    documents: [
      'Aadhaar of Propreitor/Partner',
      'PAN of the Business',
      'Office Address Details',
      'Investment Figures',
      'Mobile Linked with Aadhaar'
    ],
    features: ['Subsidy Eligibility', 'Priority Lending', 'Collateral-free Loans', 'Tender Preferences'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  {
    id: 'pending-works',
    title: 'Pending & Part-time Works',
    category: 'Accounting',
    description: 'Cleaning up backlogs, responding to notices, and flexible accounting.',
    metaDescription: 'Resolve pending tax notices and backlogged accounting. Expert assistance for notice drafting and previous year filing.',
    keywords: 'Tax Notice Help, Account Cleanup, Backlog Accounting, Tax Resolution Hyderabad',
    imageUrl: `https://images.unsplash.com/photo-1454165833767-027ffea9e778?${IMG_PARAMS}`,
    fullContent: 'Accumulated tax backlogs or pending legal notices can lead to heavy penalties. We specialize in "Cleaning up" pending accounts, rectifying errors in previous filings, and providing flexible part-time accounting support for small businesses.',
    process: [
      'Case History Analysis',
      'Data Backlog Identification',
      'Notice Review & Strategy',
      'Drafting Responses to Notices',
      'Rectification Entry Filing',
      'Final Compliance Completion'
    ],
    documents: [
      'Old Accounting Data',
      'Departmental Notices',
      'Previous Year Returns',
      'Bank Statements for Backlog Period'
    ],
    features: ['Notice Resolution', 'Backlog Clearance', 'Flexible Billing', 'Peace of Mind'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    id: 'general-accounts',
    title: 'General Accounts',
    category: 'Accounting',
    description: 'Day-to-day bookkeeping, cash flow management, and financial health.',
    metaDescription: 'Affordable daily bookkeeping and accounts management for Hyderabad businesses. Maintain clear cash flow records.',
    keywords: 'Daily Bookkeeping, Cash Flow Management, Accounts Payable, Small Business Accounts',
    imageUrl: `https://images.unsplash.com/photo-1543286386-713bc26a9aae?${IMG_PARAMS}`,
    fullContent: 'Proper maintenance of daily accounts is the backbone of any successful business. We manage your day-to-day financial recording, accounts payable/receivable, and cash management to ensure you always have a clear picture of your business performance.',
    process: [
      'Daily Transaction Recording',
      'Cash & Bank Book Maintenance',
      'Purchase/Sales Entry',
      'Debtors/Creditors Aging Analysis',
      'Expense Classification',
      'Weekly/Monthly Reports'
    ],
    documents: [
      'Purchase Bills',
      'Cash Memos',
      'Bank Statements',
      'Payment Vouchers',
      'Stock Records'
    ],
    features: ['Real-time Clarity', 'Expense Control', 'Improved Cash Flow', 'Better Decision Making'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    id: 'tds-returns',
    title: 'TDS Returns',
    category: 'Taxation',
    description: 'Quarterly filing of TDS returns and issuance of Form 16/16A.',
    metaDescription: 'Compliant TDS Return filing (24Q, 26Q) and Form 16 generation. Avoid late fees with professional TDS management.',
    keywords: 'TDS Return filing, Form 16, Form 16A, TRACES portal, Quarterly Returns',
    imageUrl: `https://images.unsplash.com/photo-1563986768494-0dec256c1976?${IMG_PARAMS}`,
    fullContent: 'TDS (Tax Deducted at Source) compliance is strictly monitored. We help businesses file quarterly returns (24Q, 26Q) on time, avoiding high late filing fees (₹200/day). We also assist in generating certificates from the TRACES portal.',
    process: [
      'TDS Liability Calculation',
      'Challan Payment Verification',
      'Preparation of Return File (FVU)',
      'Uploading Return via TRACES',
      'Correction of Mismatches (if any)',
      'Generation of Form 16/16A'
    ],
    documents: [
      'TDS Payment Challans',
      'PAN of Deductees',
      'Payment Details (Salary/Rent/Contract)',
      'TAN Certificate',
      'TRACES Login Details'
    ],
    features: ['Low Error Rate', 'Timely Challan Checks', 'Form 16 Generation', 'Penalty Prevention'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293L17.414 5.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
  },
  {
    id: 'bank-projections',
    title: 'Bank Projections & CMA',
    category: 'Wealth',
    description: 'CMA data and project reports for securing bank loans.',
    metaDescription: 'Professional Project Reports and CMA data preparation for bank loans. High success rate in CC and Term Loan processing.',
    keywords: 'CMA Data, Project Reports for Loan, Bank Projections, Business Funding India',
    imageUrl: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${IMG_PARAMS}`,
    fullContent: 'Securing business loans requires professional Project Reports and CMA (Credit Monitoring Arrangement) data. We prepare realistic financial projections (3-5 years) that meet the stringent requirements of nationalized and private sector banks.',
    process: [
      'Requirement Analysis (CC/Term Loan)',
      'Data Collection of Previous Years',
      'Realistic Assumption Setting',
      'Drafting Projected P&L and B/S',
      'Ratio Analysis Calculation',
      'Final Project Report Binding'
    ],
    documents: [
      'Past 3 Years Audit Reports',
      'Sanction Letter (if renewal)',
      'Proposed Project Cost Details',
      'Market Analysis Brief',
      'Quotation for Machinery/Assets'
    ],
    features: ['Bank Compliant Formats', 'Accurate Ratio Analysis', 'Funding Probability', 'Strategic Advisory'],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  }
];
