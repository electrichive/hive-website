declare type Empty = Record<never, never>;

declare type ButtonProps = {
    text?: string;
    theme?: string;
    url?: string;
};

declare type ContactProps = {
    heading?: string;
};

declare type NavbarItems = [string, string][];
declare type ContactInfo = {
    email: string;
    telephone: string;
    address: string;
};

declare type HeaderProps = {
    navbarItems?: NavbarItems;
};

declare type FooterProps = {
    sitemapItems?: NavbarItems;
    contactInfo?: ContactInfo;
    socialLinks?: { socialUrl: string }[];
};

declare type HeximageProps = {
    img: string;
    theme?: string;
    direction?: string;
    size?: string;
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
    theme?: string;
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
    // title: string;
    content: string;
    direction: string;
    author: string;
};

declare type PickOut<T, U> = {
    [K in Exclude<keyof T, U>]: T[K];
};

declare type GatsbyNode<T> = { node: T };

declare type TestimonialWithoutDirection = PickOut<
    TestimonialProps,
    'direction'
>;
declare type TestimonialsProps = {
    testimonials: TestimonialWithoutDirection[];
};

declare type InfoBoxProps = {
    theme: string;
    title: string;
    description: string;
    content: string;
};

declare type MentorBlockProps = {
    theme?: string;
    firsttitle: string;
    image: string;
    content: string;
    secondtitle: string;
    bullets: string[];
    url: string;
};

declare type InfoImageProps = {
    img: string;
    subtitle?: string;
    direction: string;
    content: string;
};

declare type InfoImagesProps = {
    infoimages: PickOut<InfoImageProps, 'direction'>[];
};

declare type IntroProps = {
    title: string;
    content: string;
};

declare type ParallaxProps = {
    title?: string;
    img: string;
    url: string;
    text: string;
};
