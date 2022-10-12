/**
 * Component for a standard info box module (has a title, desc and content(optional))
 */

import {
    Description,
    DiscordBlock,
    Title,
    Logo,
    DiscordLink,
} from './discord.styled';
import discordLogo from 'static/img/svg/discord_long.svg';

export default function Discord(): JSX.Element {
    return (
        <DiscordBlock>
            <Title>Get Involved Now!</Title>
            <Description>
                Join our discord server now and get involved with the hive
            </Description>
            <DiscordLink href="https://discord.gg/HtHctr5J">
                <Logo src={discordLogo} alt="Logo" />
            </DiscordLink>
        </DiscordBlock>
    );
}
