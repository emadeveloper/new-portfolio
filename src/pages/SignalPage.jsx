import { SectionPageLayout } from "../components/SectionPageLayout";
import { SignalSection } from "../components/SignalSection";

export function SignalPage({ signal, backLabel }) {
  return (
    <main>
      <SectionPageLayout backLabel={backLabel}>
        <SignalSection signal={signal} />
      </SectionPageLayout>
    </main>
  );
}
