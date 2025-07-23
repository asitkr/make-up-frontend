interface SubContentItem {
    subTitle?: string;
    subTitleDescription?: string;
    subContent?: string[];
}

interface Section {
    title: string;
    titleDescription?: string;
    content?: SubContentItem[];
    contentDescription?: string;
}

export interface LegalContentProps {
    sections: Section[];
    className?: string;
    isPageLink?: boolean;
}