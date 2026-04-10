import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function GstinPage() {
    const { inputs, serviceName } = karzaInputs.gstin;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit GSTIN" />
    );
}
