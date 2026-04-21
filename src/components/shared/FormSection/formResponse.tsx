import * as React from "react";

interface ApiResponse {
    result: Record<string, any>;
    requestId?: string;
    statusCode?: number;
    error?: string;
}

export function renderResponseByService(service: string | undefined, apiRes: ApiResponse): React.ReactNode {
    if (!service || !apiRes) return null;
    if (apiRes.error) {
        return <div className="text-red-500">{apiRes.error}</div>;
    }

    // Helper to render a table from key-value pairs
    const renderTable = (rows: { label: string; value: string | number }[]) => (
        <table className="min-w-full border border-gray-300">
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                        <td className="px-4 py-2 font-medium bg-gray-50 w-1/2">{row.label}</td>
                        <td className="px-4 py-2">{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    // Map of service handlers
    const handlers: Record<string, (apiRes: ApiResponse) => React.ReactNode> = {
        panStatusCheck: (apiRes) => {
            const rows = [
                { label: "Status of the PAN", value: String(apiRes?.result?.status ?? "N/A") },
                { label: "PAN has been tagged as duplicate by Income Tax Department (ITD)", value: String(apiRes?.result?.duplicate ?? "N/A") },
                { label: "Name Match WITH ITD Records", value: String(apiRes?.result?.nameMatch ?? "N/A") },
                { label: "Giver DOB matched with the ITD records", value: String(apiRes?.result?.dobMatch ?? "N/A") },
            ];
            return renderTable(rows);
        },
        passportVerification: (apiRes) => {
            const rows = [
                { label: "Passport Application Date", value: String(apiRes?.result?.applicationDate ?? "N/A") },
                { label: "Type of Application", value: String(apiRes?.result?.applicationType ?? "N/A") },
                { label: "Date of Issue Match with MHA Records", value: String(apiRes?.result?.dateOfIssue?.dateOfIssueMatch ?? "N/A") },
                { label: "Dispatched on from Source", value: String(apiRes?.result?.dateOfIssue?.dispatchedOnFromSource ?? "N/A") },
                { label: "Passport Number from Source", value: String(apiRes?.result?.passportNumber?.passportNumberFromSource ?? "N/A") },
                { label: "Given Name", value: String(apiRes?.result?.name?.nameFromPassport ?? "N/A") },
                { label: "Surname", value: String(apiRes?.result?.name?.surnameFromPassport ?? "N/A") },
            ];
            return renderTable(rows);
        },
        drivingLicenseAuthentication: (apiRes) => {
            const rows = [
                { label: "Name", value: String(apiRes?.result?.name ?? "N/A") },
                { label: "Image", value: String(apiRes?.result?.img ?? "N/A") },
                { label: "Blood group", value: String(apiRes?.result?.bloodGroup ?? "N/A") },
                { label: "Date of Birth ", value: String(apiRes?.result?.dob ?? "N/A") },
                { label: "Date of Issue", value: String(apiRes?.result?.issueDate ?? "N/A") },
                { label: "Relative", value: String(apiRes?.result?.['father/husband'] ?? "N/A") },
            ];
            const licenseValidityRows =[
                { label: "Is DL Valid?", value: String(apiRes?.result?.isDLValid ?? "N/A") },
                { label: "DL Validity Start Date", value: String(apiRes?.result?.dlValidity?.startDate ?? "N/A") },
                { label: "DL Validity End Date", value: String(apiRes?.result?.dlValidity?.endDate ?? "N/A") },
            ]
            return  <>
            {renderTable(rows)}
            <div className="my-4" />
            <div><h4>License Validity</h4></div>
            {renderTable(licenseValidityRows)}
        </>;
        }
        // Add more handlers as needed
    };

    if (service in handlers) {
        return handlers[service](apiRes);
    }
    // Fallback: show raw JSON
    return <pre>{JSON.stringify(apiRes, null, 2)}</pre>;
}
