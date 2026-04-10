import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function IcsiMembershipPage() {
      const { inputs, serviceName } = karzaInputs.icsi_membership;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit ICSI Membership" />
    );
}
