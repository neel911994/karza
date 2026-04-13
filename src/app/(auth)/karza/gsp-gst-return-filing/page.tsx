import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function GspGstReturnFilingPage() {
    const { inputs, serviceName } = karzaInputs.gsp_gstin_returns;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit GSP GST Return Filing" />
    );
}
