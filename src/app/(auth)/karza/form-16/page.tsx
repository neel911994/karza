import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function Form16Page() {
    const { inputs, serviceName } = karzaInputs.form_16;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit Form 16" />
    );
}
