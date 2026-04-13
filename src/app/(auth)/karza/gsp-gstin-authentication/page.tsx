import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function GspGstinAuthenticationPage() {
    const { inputs, serviceName } = karzaInputs.gsp_gstin;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit GSP GSTIN Authentication" />
    );
}
