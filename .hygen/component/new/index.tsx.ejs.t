---
to: <%= absPath %>/index.tsx
---

import { Styled<%= component_name %> } from './<%= h.changeCase.lower(component_name) %>.styled';

/**
 * <%= comment %>
 */
export default function <%= component_name %>(): JSX.Element {
    return <Styled<%= component_name %>><%= component_name %></Styled<%= component_name %>>;
}
