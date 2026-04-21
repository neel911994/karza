import { FormInput } from "@/components/shared/FormSection/FormSection";

// Each menu now includes both the inputs and the serviceName (as string, matching apiService function name)
export const karzaInputs: Record<string, { inputs: FormInput[]; serviceName: string }> = {
  pan: {
    inputs: [
      { name: "pan", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
      { name: "name", label: "Full Name", type: "text", placeholder: "Enter full name" },
      { name: "fathername", label: "Father's Name", type: "text", placeholder: "Enter father's name" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
    serviceName: "panStatusCheck"
  },
  dl: {
    inputs: [
      { name: "dlNo", label: "DL Number", type: "text", placeholder: "Enter DL number" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
    serviceName: "drivingLicenseAuthentication"
  },
  passport: {
    inputs: [
      { name: "passportNo", label: "Passport Number", type: "text", placeholder: "Enter passport number" },
      { name: "name", label: "Complete Name of Passport Holder", type: "text", placeholder: "Enter full name" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "doi", label: "Date of Issue", type: "date" },
      { name: "fileNo", label: "File Number", type: "text", placeholder: "Enter file number" },
    ],
    serviceName: "passportVerification"
  },
  employment: {
    inputs: [
      { name: "employerName", label: "Employer Name", type: "text", placeholder: "Enter employer name" },
      { name: "employeeName", label: "Employee Name", type: "text", placeholder: "Enter employee name" },
      { name: "mobile", label: "Mobile Number", type: "text", placeholder: "Enter mobile number" },  
      { name: "emailId", label: "Email Address", type: "text", placeholder: "Enter email address" },
    ],
    serviceName: "employementVerification"
  },
  aml: {
    inputs: [
      { name: "targetName", label: "Target Name to be searched", type: "text", placeholder: "Enter full name" },
      { name: "dob", label: "Date of Birth of target entity", type: "date" },
      { name: "gender", label: "Gender of target entity", type: "text", placeholder: "Enter gender" },
    ],
    serviceName: "amlSanctionScreening"
  },
  shop: {
    inputs: [
      { name: "regNo", label: "Registration Number", type: "text", placeholder: "Enter registration number" },
      { name: "areaCode", label: "Area Code", type: "text", placeholder: "Enter area code" },
    ],
    serviceName: "shopandEstablishment"
  },
  ca_membership: {
    inputs: [
      { name: "membership_no", label: "Membership Number", type: "text", placeholder: "Enter CA membership number" },
    ],
    serviceName: "camembershipService"
  },
  form_16: {
    inputs: [
      { name: "pan", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
      { name: "tan", label: "TAN Number", type: "text", placeholder: "Enter TAN Number" },
      { name: "cert_no", label: "Form 16 Certificate Number", type: "text", placeholder: "Enter certificate number" },
      { name: "fiscal_year", label: "Fiscal Year corresponding to form 16", type: "text", placeholder: "Enter fiscal year" },
      { name: "amount", label: "Amount Deducted", type: "text", placeholder: "Enter amount deducted" },
    ],
    serviceName: "form16Authentication"
  },
  itr: {
    inputs: [
      { name: "pan", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
      { name: "ack", label: "15 digit ITR-V Acknowledgement Number", type: "text", placeholder: "Enter Ack number" },
    ],
    serviceName: "itrvAuthentication"
  },
  icsi_membership: {
    inputs: [
      { name: "membershipNo", label: "Membership Number", type: "text", placeholder: "Enter ICSI membership number" }, 
      { name: "cpNo", label: "CP (Certifcate of Practise no)", type: "text", placeholder: "Enter CP number" }, 
    ],
    serviceName: "icsiMembershipService"
  },
  icwai_membership: {
    inputs: [
      { name: "membership_no", label: "Membership Number", type: "text", placeholder: "Enter ICWAI membership number" },
    ],
    serviceName: "icwaiMembershipService"
  },
  mci_membership: {
    inputs: [
      { name: "registration_no", label: "Membership Number", type: "text", placeholder: "Enter MCI membership number" },
      { name : "year_of_reg", label: "Registration Year", type: "text", placeholder: "Enter registration year" },
      {name: "medical_council", label: "Medical Council", type: "text", placeholder: "Enter medical council name" },
    ],
    serviceName: "mciMembershipAuthentication"
  },
  mca:{
    inputs: [
      { name: "cin", label: "CIN (Company Identification Number)", type: "text", placeholder: "Enter CIN" },
    ],
    serviceName: "mcaMasterDataFetch"
  },
mca_llpin: {
    inputs: [
      { name: "llpin", label: "LLPIN (Limited Liability Partnership Identification Number)", type: "text", placeholder: "Enter LLPIN" },
    ],
    serviceName: "mcaLlpinService"
  },
  mca_fcrn: {
    inputs: [
      { name: "fcrn", label: "FCRN (Foreign Company Registration Number)", type: "text", placeholder: "Enter FCRN" },
    ],
    serviceName: "mcaFcrnService"
  },
  mca_fllpin: {
    inputs: [
      { name: "fllpin", label: "FLLPIN (Foreign Limited Liability Partnership Identification Number)", type: "text", placeholder: "Enter FLLPIN" },
    ],
    serviceName: "mcaFllpinService"
  },
  gstin_pan: {
    inputs: [
      { name: "pan", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
    ],
    serviceName: "gstinSearchPan"
  },
  gsp_gstin: {
    inputs: [
      { name: "gstin", label: "GSTIN (GST Identification Number)", type: "text", placeholder: "Enter GSTIN" },
    ],
    serviceName: "gspGstinAuthentication"
  },
  gsp_gstin_returns: {
    inputs: [
      { name: "gstin", label: "GSTIN (GST Identification Number)", type: "text", placeholder: "Enter GSTIN" },
    ],
    serviceName: "gspgstReturnFiling"
  }
};
