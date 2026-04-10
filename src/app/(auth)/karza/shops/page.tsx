import FormSection from '@/components/shared/FormSection/FormSection';
import { karzaInputs } from '@/utils/karzaInputs';

export default function ShopsPage() {
     const { inputs, serviceName } = karzaInputs.shop;
    
    return <FormSection inputs={inputs} service={serviceName} submitLabel="Submit Shop" />;
}
