import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function CaMembershipPage() {
    const { inputs, serviceName } = karzaInputs.ca_membership;

    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit CA Membership" />
    );
}
