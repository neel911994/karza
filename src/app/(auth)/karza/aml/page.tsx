import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function AmlPage() {
    const { inputs, serviceName } = karzaInputs.aml;


    return <FormSection inputs={inputs} service={serviceName} submitLabel="Submit AML" />;
}
