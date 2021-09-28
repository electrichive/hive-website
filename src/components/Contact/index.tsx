import { useRef, useState } from 'react';
import {
    InputsBox,
    SlideReverse,
    CtrlBox,
    MsgBox,
    Heading,
    Form,
    Label,
    Input,
    TextArea,
    SubmitButton,
} from './contact.styled';

export default function Contact({
    heading = 'Contact Us',
}: ContactProps): JSX.Element {
    const [size, setSize] = useState('0px');
    const ref = useRef<HTMLTextAreaElement>();

    const updateSize = () => {
        ref.current.style.height = '0px';
        const lineHeight = window.getComputedStyle(ref.current).lineHeight;
        const height = `${ref.current.scrollHeight}px` || lineHeight;
        setSize(height);
    };

    return (
        <SlideReverse>
            <Heading>{heading}</Heading>
            <Form method="POST">
                <InputsBox>
                    <CtrlBox>
                        <Label htmlFor="name">Name</Label>
                        <Input spellCheck={false} type="text" name="name" />
                    </CtrlBox>

                    <CtrlBox>
                        <Label htmlFor="name">Email</Label>
                        <Input spellCheck={false} type="email" name="email" />
                    </CtrlBox>

                    <CtrlBox>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            spellCheck={false}
                            type="tel"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                    </CtrlBox>

                    <MsgBox>
                        <TextArea
                            ref={ref}
                            onChange={updateSize}
                            spellCheck={false}
                            name="message"
                            placeholder="Message"
                            height={size}
                        />
                    </MsgBox>
                </InputsBox>

                <SubmitButton type="submit" />
            </Form>
        </SlideReverse>
    );
}
