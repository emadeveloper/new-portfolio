import {
  Activity,
  Brain,
  Cpu,
  Fingerprint,
  FlaskConical,
  SendHorizontal,
} from "lucide-react";

export const sectionIcons = {
  mind: Brain,
  identity: Fingerprint,
  lab: FlaskConical,
  stack: Cpu,
  signal: Activity,
  contact: SendHorizontal,
};

export const sectionIconByPath = {
  "/identity": sectionIcons.identity,
  "/lab": sectionIcons.lab,
  "/stack": sectionIcons.stack,
  "/signal": sectionIcons.signal,
  "/connect": sectionIcons.contact,
};
