import { HexContainer, HexImage, HexImageBg } from './heximage.styled';
/**
 * Component for a Hex Image module (has an size, img, direction and theme prop)
 */

//hexImage div has inline style as the URL cannot be passed to css
export default function Heximage(props: HeximageProps): JSX.Element {
    return (
        <HexContainer size={props.size}>
            <HexImage img={props.img} />
            <HexImageBg theme={props.theme} direction={props.direction} />
        </HexContainer>
    );
}
