import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function McaFllpinPage() {
    const { inputs, serviceName } = karzaInputs.mca_fllpin;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit MCA FLLPIN" />
    );
}
