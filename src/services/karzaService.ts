import { apiService } from './apiService';

// Map each service to its required argument order (keys from formData)
const serviceArgMap: Record<string, string[]> = {
	panStatusCheck: ['pan', 'dob', 'name', 'fathername', 'consent', 'needKarza'],
	drivingLicenseAuthentication: ['dlNo', 'dob', 'needKarza'],
	passportVerification: ['dob', 'passportNo', 'doi', 'name', 'fileNo', 'needKarza'],
	shopandEstablishment: ['regNo', 'areaCode', 'needKarza'],
	mciMembershipAuthentication: ['registration_no', 'year_of_reg', 'medical_council', 'needKarza'],
	gstinSearchPan: ['pan', 'needKarza'],
	gspGstinAuthentication: ['gstin', 'needKarza'],
	gspgstReturnFiling: ['gstin', 'needKarza'],
	getCustomerDetailsService: ['cif'],
	mcaMasterDataFetch: ['cin', 'needKarza'],
	employementVerification: ['employerName', 'employeeName', 'mobile', 'emailId', 'needKarza'],
	itrvAuthentication: ['pan', 'ack', 'needKarza'],
	form16Authentication: ['tan', 'pan', 'cert_no', 'amount', 'fiscal_year', 'needKarza'],
	amlSanctionScreening: [
		'name', 'age', 'ageStart', 'ageEnd', 'dateOfBirth', 'dateOfBirthStart', 'dateOfBirthEnd', 'gender', 'address', 'agency', 'needKarza', 'cif'
	],
	camembershipService: ['membership_no', 'needKarza'],
	icsiMembershipService: ['membershipNo', 'cpNo', 'needKarza'],
	icwaiMembershipService: ['membership_no', 'needKarza'],
	gstComprehensiveReportService: ['gstin', 'username', 'password', 'needKarza'],
	epfauthenticationService: ['uan', 'needKarza'],
};

// Helper to format date fields to DD/MM/YYYY or DD-MM-YYYY
function formatDate(val: string, format: 'slash' | 'dash' = 'slash') {
	if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
		const [year, month, day] = val.split('-');
		return format === 'dash' ? `${day}-${month}-${year}` : `${day}/${month}/${year}`;
	}
	return val;
}

// Map service to date format
const serviceDateFormat: Record<string, 'slash' | 'dash'> = {
	panStatusCheck: 'slash',
	drivingLicenseAuthentication: 'dash',
	passportVerification:'slash',
};

export async function callKarzaService(serviceName: string, formData: Record<string, any>) {
	if (!apiService[serviceName] || !serviceArgMap[serviceName]) {
		throw new Error('Unknown or unsupported service: ' + serviceName);
	}
	// Determine date format for this service
	const dateFormat = serviceDateFormat[serviceName] || 'slash';
	// Prepare arguments in the correct order
	const argKeys = serviceArgMap[serviceName];
	const args = argKeys.map(key => {
		let val = formData[key] ?? '';
		// Format date fields
		if (key.toLowerCase().includes('date') || key.toLowerCase().includes('dob') || key.toLowerCase().includes('doi')) {
			val = formatDate(val, dateFormat);
		}
		// Default consent/needKarza if required
		if (key === 'consent' && !val) return 'Y';
		if (key === 'needKarza' && !val) return 'Y';
		return val;
	});
	// Call the API service with the mapped arguments
	return await (apiService as any)[serviceName](...args);
}
