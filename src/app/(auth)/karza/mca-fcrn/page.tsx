import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function McaFcrnPage() {
    const { inputs, serviceName } = karzaInputs.mca_fcrn;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit MCA FCRN" />
    );
}
