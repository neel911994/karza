'use client';
import React, { useState } from "react";

export interface FormInput {
    name: string;
    label: string;
    type: "text" | "date" | "number";
    placeholder?: string;
}


import { apiService } from '@/services/apiService';

interface FormSectionProps {
    inputs?: FormInput[];
    service?: string; // Name of the apiService method to call
    onSubmit?: (values: Record<string, string>) => Promise<React.ReactNode> | React.ReactNode;
    submitLabel?: string;
}


const FormSection: React.FC<FormSectionProps> = ({ inputs = [], service, onSubmit, submitLabel = "Submit" }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>(() =>
        Object.fromEntries((inputs || []).map((input) => [input.name, ""]))
    );
    const [response, setResponse] = useState<React.ReactNode>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        let res;
        if (onSubmit) {
            res = await onSubmit(formValues);
        } else if (service && (apiService as any)[service]) {
            // Call the apiService method dynamically with all form values as arguments
            // This assumes the order of inputs matches the API signature
            console.log(formValues,"form values in form section");
            const args = inputs.map(input => formValues[input.name]);
            console.log(args,"args in form section");
           const res = await apiService.panStatusCheck(formValues.pan, formValues.dob, formValues.name, formValues.fathername).then((data) => {}).catch((err) => {
            console.error("API call failed", err);
            return <div className="text-red-500">API call failed: {err.message}</div>;
           });
           return <div className="text-green-500">API call successful</div>;
        } else {
            res = <div className="text-red-500">No service or onSubmit handler provided.</div>;
        }
        setResponse(res);
        setLoading(false);
    };

    return (
        <div className="w-full p-6">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inputs.map((input) => (
                        <div key={input.name} className="flex flex-col">
                            <label htmlFor={input.name} className="mb-1 font-medium">
                                {input.label}
                            </label>
                            <input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={formValues[input.name]}
                                onChange={handleChange}
                                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-right">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : submitLabel}
                    </button>
                </div>
            </form>
            <div className="mt-8 min-h-[60px]">
                {response}
            </div>
        </div>
    );
};

export default FormSection;