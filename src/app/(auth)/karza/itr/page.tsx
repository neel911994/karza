import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function ItrPage() {
     const { inputs, serviceName } = karzaInputs.itr;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit ITR" />
    );
}