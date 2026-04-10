import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function PassportPage() {
    const { inputs, serviceName } = karzaInputs.passport;

    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit Passport" />
    );
}
