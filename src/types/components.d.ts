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

declare type SocialMetadata = {
    socialUrl: string;
    picUrl: string;
};

declare type HoneycombProps = {
    socialProps?: SocialMetadata[];
};

declare type HoneycombHexProps = {
    color: string;
    socialUrl?: string;
    picUrl?: string;
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

declare type TestimonialProps = {
    img: string;
    title: string;
    content: string;
};