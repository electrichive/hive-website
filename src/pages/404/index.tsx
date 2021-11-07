import Layout from 'components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function Page404(): JSX.Element {
    return (
        <Layout>
            <p>
                This is not the page you are looking for{' '}
                <span role="img" aria-label="alien :P">
                    &#128125;
                </span>
            </p>
            <StaticImage
                src="../../static/images/404.jpg"
                alt="funny star wars reference"
            />
        </Layout>
    );
}
