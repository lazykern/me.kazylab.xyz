import * as React from "react";

import { CodeBlock } from "notion-types";
import { getBlockTitle } from "notion-utils";
import { highlightElement } from "prismjs";

import { Text, useNotionContext, cs } from "react-notion-x";

const Code: React.FC<{
        block: CodeBlock;
        defaultLanguage?: string;
        className?: string;
}> = ({ block, defaultLanguage = "bash", className }) => {
        const { recordMap } = useNotionContext();
        const content = getBlockTitle(block, recordMap);
        const language = (
                block.properties?.language?.[0]?.[0] || defaultLanguage
        ).toLowerCase();
        const caption = block.properties.caption;

        const codeRef = React.useRef();
        React.useEffect(() => {
                if (codeRef.current) {
                        try {
                                highlightElement(codeRef.current);
                        } catch (err) {
                                console.warn("prismjs highlight error", err);
                        }
                }
        }, [codeRef]);

        return (
                <>
                        <pre className={cs("notion-code", className)}>
                                <code className={`language-${language}`} ref={codeRef as any}>
                                        {content}
                                </code>
                        </pre>

                        {caption && (
                                <figcaption className="notion-asset-caption">
                                        <Text value={caption} block={block} />
                                </figcaption>
                        )}
                </>
        );
};

export default Code;
