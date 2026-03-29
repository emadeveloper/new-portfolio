import { LabSection } from "../components/LabSection";
import { SectionPageLayout } from "../components/SectionPageLayout";

export function LabPage({ lab, backLabel }) {
  return (
    <main>
      <SectionPageLayout backLabel={backLabel}>
        <LabSection lab={lab} />
      </SectionPageLayout>
    </main>
  );
}
