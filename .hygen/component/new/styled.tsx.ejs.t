---
to: <%= absPath %>/<%= h.changeCase.lower(component_name) %>.styled.tsx
---

import styled from 'styled-components';

export const Styled<%= component_name %> = styled.div`
    display: block;
`;
