import { karzaInputs } from "@/utils/karzaInputs";
import FormSection from "@/components/shared/FormSection/FormSection";

export default function IcwaiMembershipPage() {
      const { inputs, serviceName } = karzaInputs.icwai_membership;
    return (
        <FormSection inputs={inputs} service={serviceName} submitLabel="Submit ICWAI Membership" />
    );
}
