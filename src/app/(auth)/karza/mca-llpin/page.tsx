import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function McaLlpinPage() {
    const { inputs, serviceName } = karzaInputs.mca_llpin;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit MCA LLPIN" />
    );
}
