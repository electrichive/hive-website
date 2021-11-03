import Header from 'components/Header';
import Contact from 'components/Contact';
import SEO from 'components/SEO';
import { PropsWithChildren } from 'react';
import { Content, Flow } from './layout.styled';
import { GlobalProvider } from 'styles/providers.styled';
import Honeycomb from '../Honeycomb';

/**
 * Component for a responsive header (logo & tabs along the bottom)
 */
export default function Layout({
    children,
}: PropsWithChildren<LayoutProps>): JSX.Element {
    return (
        <>
            <SEO />
            <GlobalProvider />
            <Flow>
                <Header />
                <Content>{children}</Content>
                <Honeycomb />
                <Contact />
            </Flow>
        </>
    );
}
