declare type Empty = Record<never, never>;

declare type ButtonProps = {
    text?: string;
    theme?: 'light';
    url?: string;
};

declare type ContactProps = {
    heading?: string;
};

declare type HeaderProps = {
    navbarItems?: [string, string][];
};

declare type LayoutProps = Empty;

declare type Organization = {
    url: string;
    logo: string;
    name: string;
};
declare type SchemaOrgProps = {
    url: string;
    title: string;
    description: string;
    image: string;
    author: string;
    organization: Organization;
    lastUpdated: string;
};

declare type InfoBlockProps = {
    theme?: 'light';
    title?: string;
    text?: string;
    button: ButtonProps;
};

declare type SlideProps = {
    button?: boolean;
    title?: string;
    subtitle?: string;
};
