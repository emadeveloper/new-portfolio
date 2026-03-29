import { SectionPageLayout } from "../components/SectionPageLayout";
import { StackSection } from "../components/StackSection";

export function StackPage({ stack, backLabel }) {
  return (
    <main>
      <SectionPageLayout backLabel={backLabel}>
        <StackSection stack={stack} />
      </SectionPageLayout>
    </main>
  );
}
