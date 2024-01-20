import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/src/components/resizable";

export default function Page() {
    return (
        <section>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>One</ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>Two</ResizablePanel>
            </ResizablePanelGroup>
        </section>
    );
}