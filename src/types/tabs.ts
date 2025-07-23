export interface TabData<T> {
    tabName: string;
    cardData: T[];
}

export interface UnderlineTabsProps<T> {
    data: TabData<T>[];
    defaultActiveTab?: string | number | null;
    onTabChange?: (tabId: string | number) => void;
    className?: string;
    Component: React.ComponentType<T>;
}
