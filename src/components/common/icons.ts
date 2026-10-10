import {
  BookOpen,
  Brain,
  Bug,
  CheckCircle,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  Monitor,
  RotateCcw,
  TestTube,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types/portfolio";

/** Icons live in the UI layer so the data files stay serialisable. */
export const ICONS: Record<IconKey, LucideIcon> = {
  check: CheckCircle,
  users: Users,
  monitor: Monitor,
  bug: Bug,
  rotate: RotateCcw,
  file: FileText,
  clipboard: ClipboardCheck,
  wrench: Wrench,
  code: Code2,
  team: Users,
  graduation: GraduationCap,
  brain: Brain,
  test: TestTube,
  book: BookOpen,
};
