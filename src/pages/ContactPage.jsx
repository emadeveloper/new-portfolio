import { ContactSection } from "../components/ContactSection";
import { SectionPageLayout } from "../components/SectionPageLayout";

export function ContactPage({ contact, backLabel }) {
  return (
    <main>
      <SectionPageLayout backLabel={backLabel}>
        <ContactSection contact={contact} />
      </SectionPageLayout>
    </main>
  );
}
