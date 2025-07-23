export interface UnderlineTabData<T> {
  tabName: string;
  cardData: T[];
}

export interface UnderlineTabsProps<T> {
  data: UnderlineTabData<T>[];
  defaultActiveTab?: string | null;
  onTabChange?: (tabId: number | string) => void;
  className?: string;
  Component: React.ComponentType<T>;
}
