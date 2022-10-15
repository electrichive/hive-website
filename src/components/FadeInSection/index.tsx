import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const FadeInWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default function FadeInSection({
    children,
}: PropsWithChildren<LayoutProps>): JSX.Element {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <FadeInWrapper
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </FadeInWrapper>
    );
}
