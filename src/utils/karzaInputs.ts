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
      { name: "dlNumber", label: "DL Number", type: "text", placeholder: "Enter DL number" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
    serviceName: "drivingLicenseAuthentication"
  },
  passport: {
    inputs: [
      { name: "passportNumber", label: "Passport File Number", type: "text", placeholder: "Enter passport number" },
      { name: "fullName", label: "Complete Name of Passport Holder", type: "text", placeholder: "Enter full name" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "dateOfIssue", label: "Date of Issue", type: "date" },
    ],
    serviceName: "passportVerification"
  },
  employment: {
    inputs: [
      { name: "employerName", label: "Employer Name", type: "text", placeholder: "Enter employer name" },
      { name: "employeeName", label: "Employee Name", type: "text", placeholder: "Enter employee name" },
      { name: "mobile", label: "Mobile Number", type: "text", placeholder: "Enter mobile number" },  
      { name: "email", label: "Email Address", type: "text", placeholder: "Enter email address" },
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
      { name: "registrationNumber", label: "Registration Number", type: "text", placeholder: "Enter registration number" },
      { name: "areaCode", label: "Area Code", type: "text", placeholder: "Enter area code" },
    ],
    serviceName: "shopandEstablishment"
  },
  ca_membership: {
    inputs: [
      { name: "membershipNumber", label: "Membership Number", type: "text", placeholder: "Enter CA membership number" },
    ],
    serviceName: "camembershipService"
  },
  form_16: {
    inputs: [
      { name: "panNumber", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
      { name: "tanNumber", label: "TAN Number", type: "text", placeholder: "Enter TAN Number" },
      { name: "certificateNumber", label: "Form 16 Certificate Number", type: "text", placeholder: "Enter certificate number" },
      { name: "fiscalYear", label: "Fiscal Year corresponding to form 16", type: "text", placeholder: "Enter fiscal year" },
      { name: "amountDeducted", label: "Amount Deducted", type: "text", placeholder: "Enter amount deducted" },
    ],
    serviceName: "form16Authentication"
  },
  itr: {
    inputs: [
      { name: "panNumber", label: "PAN Number", type: "text", placeholder: "Enter PAN number" },
      { name: "ackNumber", label: "15 digit ITR-V Acknowledgement Number", type: "text", placeholder: "Enter Ack number" },
    ],
    serviceName: "itrvAuthentication"
  },
  // Add more menus as needed
};
