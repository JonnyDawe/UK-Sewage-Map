import * as PrimitiveTab from "@radix-ui/react-tabs";
import styled from "styled-components";

const Root = styled(PrimitiveTab.Root)`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px var(--black-a4);
`;

const List = styled(PrimitiveTab.List)`
    display: flex;
    border-bottom: 1px solid var(--mauve-6);
`;

const Trigger = styled(PrimitiveTab.Trigger)`
    font-family: inherit;
    background-color: transparent;
    border: none;
    padding: 0 16px;
    margin-bottom: 8px;
    height: 36px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 1;
    box-shadow: inset 0 -0.5px 0 0 var(--blackA5), 0 0.5px 0 0 var(--blackA5);
    user-select: none;
    color: var(--font-1);

    &[data-state="active"] {
        font-weight: 500;
        box-shadow: inset 0 -1px 0 0 var(--river-blue), 0 1px 0 0 var(--river-blue);
    }

    &:hover {
        color: var(--river-blue);
    }
`;

const Content = styled(PrimitiveTab.Content)`
    flex-grow: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
`;

export default {
    ...PrimitiveTab,
    Content,
    List,
    Trigger,
    Root
};
