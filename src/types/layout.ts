import type { User } from "./user.ts";

export interface LayoutProps {
  children: React.ReactNode;
  user?: User;
}