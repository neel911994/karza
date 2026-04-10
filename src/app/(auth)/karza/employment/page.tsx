import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';
import { apiService } from '@/services/apiService';

export default function EmploymentPage() {
    const { inputs, serviceName } = karzaInputs.employment;

    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit Employment" />
    );
}
