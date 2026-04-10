import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function PanPage() {
    const { inputs, serviceName } = karzaInputs.pan;

    return <FormSection inputs={inputs} service={serviceName} submitLabel="Submit PAN" />;
}