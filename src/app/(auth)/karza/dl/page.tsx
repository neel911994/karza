import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';
import { apiService } from '@/services/apiService';

export default function DlPage() {
    const { inputs, serviceName } = karzaInputs.dl;

    return <FormSection inputs={inputs} service={serviceName} submitLabel="Submit DL" />;
}