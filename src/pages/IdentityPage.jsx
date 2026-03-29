import { IdentitySection } from "../components/IdentitySection";
import { SectionPageLayout } from "../components/SectionPageLayout";

export function IdentityPage({ identity, backLabel }) {
  return (
    <main>
      <SectionPageLayout backLabel={backLabel}>
        <IdentitySection identity={identity} />
      </SectionPageLayout>
    </main>
  );
}
