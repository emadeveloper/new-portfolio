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

export const sectionIconById = {
  "core-identity": sectionIcons.identity,
  "mental-lab": sectionIcons.lab,
  "neural-stack": sectionIcons.stack,
  "signal-feed": sectionIcons.signal,
  "connection-protocol": sectionIcons.contact,
};
