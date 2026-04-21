import * as React from "react";

export function renderResponseByService(service: string | undefined, apiRes: any): React.ReactNode {
    if (!service || !apiRes) return null;
    if (apiRes.error) {
        return <div className="text-red-500">{apiRes.error}</div>;
    }

    // Map of service handlers
    const handlers: Record<string, (apiRes: any) => React.ReactNode> = {
        panStatusCheck: (apiRes) => {
            const dobMatch = apiRes?.result?.dobMatch ?? "N/A";
            const duplicate = apiRes?.result?.duplicate ?? "N/A";
            const nameMatch = apiRes?.result?.nameMatch ?? "N/A";
            const status = apiRes?.result?.status ?? "N/A";
            return (
                <div>
                    <div><strong>Status of the PAN:</strong> {String(status)}</div>
                    <div><strong>PAN has been tagged as duplicate by Income Tax Department (ITD):</strong> {String(duplicate)}</div>
                    <div><strong>Name Match WITH ITD Records:</strong> {String(nameMatch)}</div>
                    <div><strong>Giver DOB matched with the ITD records:</strong> {String(dobMatch)}</div>
                </div>
            );
        },
        passportVerification: (apiRes) => {
            const applicationDate = apiRes?.result?.applicationDate ?? "N/A";
            const applicationType = apiRes?.result?.applicationType ?? "N/A";
            const dateOfIssueMatch = apiRes?.result?.dateOfIssue?.dateOfIssueMatch ?? "N/A";
            const dispatchedOnFromSource = apiRes?.result?.dateOfIssue?.dispatchedOnFromSource ?? "N/A";
            const passportNumberFromSource = apiRes?.result?.passportNumber?.passportNumberFromSource ?? "N/A";
            const nameFromSource = apiRes?.result?.name?.nameFromPassport ?? "N/A";
            const surnameFromSource = apiRes?.result?.name?.surnameFromPassport ?? "N/A";
            return (
                <div>
                    <div><strong>Passport Application Date:</strong> {String(applicationDate)}</div>
                    <div><strong>Type of Application:</strong> {String(applicationType)}</div>
                    <div><strong>Date of Issue Match with MHA Records:</strong> {String(dateOfIssueMatch)}</div>
                    <div><strong>Dispatched on from Source:</strong> {String(dispatchedOnFromSource)}</div>
                    <div><strong>Passport Number from Source:</strong> {String(passportNumberFromSource)}</div>
                    <div><strong>Given Name:</strong> {String(nameFromSource)}</div>
                    <div><strong>Surname:</strong> {String(surnameFromSource)}</div>
                </div>
            );
        },
        // Add more handlers as needed
    };

    if (service in handlers) {
        return handlers[service](apiRes);
    }
    // Fallback: show raw JSON
    return <pre>{JSON.stringify(apiRes, null, 2)}</pre>;
}
