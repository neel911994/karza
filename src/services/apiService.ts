// src/services/apiService.ts
// Converted from AngularJS to React/Next.js style using fetch API

const API_BASES = {
  BSA: "https://internal-msq.godrejhf.com/v1/ghf/bsa/manualbsa/getdata/success",
  LOGIN: "https://internal-uat-cp.godrejhf.com/v1/sso/login",
  TOKEN: "https://internal-uat-cp.godrejhf.com/v2/sso/token/",
  LOGOUT: "https://internal-uat-cp.godrejhf.com/v2/sso/logout",
  CUSTOMER_DETAILS: process.env.NEXT_PUBLIC_CUSTOMER_DETAILS_DOMAIN || "",
};

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "";

function getAccessToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
}

export const apiService = {
  GetmanualBSADATA: async () => {
    return fetch(API_BASES.BSA).then(res => res.json());
  },

  loginService: async () => {
    return fetch(API_BASES.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "NBFC Vision360 SSO" }),
    }).then(res => res.text());
  },

  getTokensService: async (getCode: string) => {
    const url = `${API_BASES.TOKEN}NBFC Vision360 SSO?code=${getCode}`;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },

  logoutService: async () => {
    const accessToken = getAccessToken();
    const url = `${API_BASES.LOGOUT}?token=${accessToken}`;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },

  submit: async (test: string) => {
    return fetch(`https://internal-msq.godrejhf.com/v1/ghf/bsa_manual/final_status/change_status/${test}`)
      .then(res => res.json());
  },

  panStatusCheck: async (
    panno: string,
    dobfield: string,
    fullname: string,
    fathername: string,
    consent: string,
    karzacall: string
  ) => {
    console.log("Calling PAN Status Check API");
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/checkpanstatus', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pan: panno, name: fullname, dob: dobfield, fathername: fathername, consent: consent, needKarza: karzacall })
    }).then(res => res.json());
  },


  //require date in dd-mm-yyyy format.
  drivingLicenseAuthentication: async (
    dlnumber: string,
    dldob: string,
    karzacall?: string
  ) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/driverLicenseAuth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dlNo: dlnumber, dob: dldob, consent: 'Y', needKarza: 'N' })
    }).then(res => res.json());
  },

  //need to figure out invalid input
  passportVerification: async (
    passdob: string,
    passno: string,
    passdoi: string,
    passholdername: string,
    passportfileno: string,
    karzacall: string
  ) => {
    const body = {
      consent: 'Y',
      fileNo: passportfileno,
      dob: passdob,
      passportNo: passno,
      doi: passdoi === 'Invalid date' ? '' : passdoi,
      name: passholdername,
      needKarza: 'N'
    };
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/passportverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => res.json());
  },

  shopandEstablishment: async (
    regnumber: string,
    areacode: string,
    karzacall: string
  ) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/shopandestablisment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ regNo: regnumber, areaCode: areacode, consent: 'Y', needKarza: karzacall })
    }).then(res => res.json());
  },

  mciMembershipAuthentication: async (
    mcimedical: string,
    mciregyear: string,
    mcimedicalname: string,
    karzacall: string
  ) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/mcimembershipauth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ registration_no: mcimedical, year_of_reg: mciregyear, medical_council: mcimedicalname, consent: 'Y', needKarza: karzacall })
    }).then(res => res.json());
  },

  gstinSearchPan: async (pannumber: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/gstsearchbasispan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', pan: pannumber, needKarza: 'N' })
    }).then(res => res.json());
  },

  gspGstinAuthentication: async (gstinfield: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/gspgstinauth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gstin: gstinfield, consent: 'Y', needKarza: karzacall })
    }).then(res => res.json());
  },

  gspgstReturnFiling: async (gspgstinreturnfield: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/gspgstreturn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gstin: gspgstinreturnfield, consent: 'Y', needKarza: karzacall })
    }).then(res => res.json());
  },

  getCustomerDetailsService: async (custcif: string) => {
    const requestData = { cif: custcif };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken()}`
    };
    return fetch(`${API_BASES.CUSTOMER_DETAILS}/v1/ghf/getCustomerDetailsForCif`, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestData)
    }).then(res => res.json());
  },

  mcaMasterDataFetch: async (mcacin: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/mcafetch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', cin: mcacin, needKarza: karzacall })
    }).then(res => res.json());
  },

  employementVerification: async (
    empname: string,
    empname1: string,
    employeemobno: string,
    employeeemail: string,
    karzacall: string
  ) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/employmentverificationadvance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employerName: empname, employeeName: empname1, mobile: employeemobno, emailId: employeeemail, needKarza: karzacall, pdf: true })
    }).then(res => res.json());
  },

  itrvAuthentication: async (itrvpan: string, itrvackno: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/itrVauth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', pan: itrvpan, ack: itrvackno, needKarza: karzacall })
    }).then(res => res.json());
  },

  //need to validate fiscal year date format
  form16Authentication: async (
    form16tan: string,
    form16pan: string,
    form16certno: string,
    form16amtdeduct: string,
    fiscalyearform16: string,
    karzacall: string
  ) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/form16auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', tan: form16tan, pan: form16pan, cert_no: form16certno, amount: form16amtdeduct, fiscal_year: fiscalyearform16, needKarza: karzacall })
    }).then(res => res.json());
  },

  amlSanctionScreening: async (
    amlname: string,
    amlage: string,
    amlstartagerange: string,
    amlendagerange: string,
    amldob: string,
    amldobstart: string,
    amldobend: string,
    amlgender: string,
    amladdress: string,
    amlagency: string,
    karzacall: string,
    custcif: string
  ) => {
    // stringEmptyAndTrim is not defined, so we use .trim() or fallback
    const trim = (v: string) => (typeof v === 'string' ? v.trim() : v);
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/amlsanctionscreening', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: trim(amlname),
        age: trim(amlage),
        ageStart: trim(amlstartagerange),
        ageEnd: trim(amlendagerange),
        dateOfBirth: trim(amldob),
        dateOfBirthStart: trim(amldobstart),
        dateOfBirthEnd: trim(amldobend),
        gender: trim(amlgender),
        address: trim(amladdress),
        agency: trim(amlagency),
        needKarza: trim(karzacall),
        sortGoodResults: false,
        cif: trim(custcif)
      })
    }).then(res => res.json());
  },

  camembershipService: async (cano: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/camembership', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', membership_no: cano, needKarza: 'N' })
    }).then(res => res.json());
  },

  icsiMembershipService: async (membershipno: string, cpno?: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/icsimembership', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', membershipNo: membershipno, cpNo:cpno, needKarza: 'N' })
    }).then(res => res.json());
  },

  icwaiMembershipService: async (membershipno: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/icwaimembership', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consent: 'Y', membership_no: membershipno, needKarza: karzacall })
    }).then(res => res.json());
  },

  gstComprehensiveReportService: async (gstinno: string, gstusername: string, gstpass: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/gstcomprehensivereport', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: gstusername, password: gstpass, gstin: gstinno, consent: 'y', needKarza: karzacall })
    }).then(res => res.json());
  },

  epfauthenticationService: async (uanfield: string, karzacall: string) => {
    return fetch('https://internal-uat-cp.godrejhf.com/v1/ghf/epfauth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uan: uanfield, consent: 'y', needKarza: karzacall })
    }).then(res => res.json());
  },
};

// Add the rest of the methods as needed, following the above pattern.
// For file upload:
export async function uploadHunterFile(file1: File) {
  const formData = new FormData();
  formData.append('file', file1);
  formData.append('templateid', "1234");
  return fetch('https://internal-uat-cp.godrejhf.com/v1/getxmldata', {
    method: 'POST',
    body: formData,
  }).then(res => res.json());
}
