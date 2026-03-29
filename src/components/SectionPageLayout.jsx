import { Link } from "react-router-dom";

export function SectionPageLayout({ backLabel, children }) {
  return (
    <div className="section-route-page">
      <div className="section-route-content">{children}</div>

      <div className="section-route-return">
        <Link className="button button-primary mind-return-button" to="/">
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
