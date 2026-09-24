import styles from "./rich-content.module.css";

export type RichContentInline = string | {
  readonly type: "link";
  readonly label: string;
  readonly href: string;
};

export type RichContentBlock =
  | {
      readonly type: "paragraph";
      readonly content: readonly RichContentInline[];
    }
  | {
      readonly type: "list";
      readonly items: readonly (readonly RichContentInline[])[];
    };

export interface RichContentProps {
  readonly blocks: readonly RichContentBlock[];
}

function renderInlineContent(content: readonly RichContentInline[], blockIndex: number, itemIndex?: number) {
  return content.map((inline, inlineIndex) => {
    const key = [blockIndex, itemIndex, inlineIndex].filter((value) => value !== undefined).join("-");

    if (typeof inline === "string") {
      return <span key={key}>{inline}</span>;
    }

    return <a href={inline.href} key={key}>{inline.label}</a>;
  });
}

export function RichContent({ blocks }: RichContentProps) {
  return (
    <div className={styles.root}>
      {blocks.map((block, blockIndex) => {
        if (block.type === "paragraph") {
          return <p key={blockIndex}>{renderInlineContent(block.content, blockIndex)}</p>;
        }

        return (
          <ul key={blockIndex}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{renderInlineContent(item, blockIndex, itemIndex)}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}