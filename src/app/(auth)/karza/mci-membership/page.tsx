import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function MciMembershipPage() {
        const { inputs, serviceName } = karzaInputs.mci_membership;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit MCI Membership" />
    );
}
