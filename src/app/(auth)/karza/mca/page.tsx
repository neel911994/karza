import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function McaPage() {
       const { inputs, serviceName } = karzaInputs.mca;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit MCA" />
    );
}
