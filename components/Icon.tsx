import {
  Activity,
  Baby,
  Bed,
  BedDouble,
  FlaskConical,
  Pill,
  ScanLine,
  Scissors,
  Siren,
  Stethoscope,
  Venus,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/site";

const icons = {
  baby: Baby,
  venus: Venus,
  scan: ScanLine,
  activity: Activity,
  flask: FlaskConical,
  siren: Siren,
  stethoscope: Stethoscope,
  pill: Pill,
  bed: Bed,
  bedDouble: BedDouble,
  scissors: Scissors,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" strokeWidth={1.75} {...props} />;
}
