import styles from "./rich-content.module.css";

export type RichContentInline = string
  | { readonly type: "lineBreak" }
  | { readonly type: "link"; readonly label: string; readonly href: string }
  | { readonly type: "strong"; readonly text: string };

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
  readonly variant?: "default" | "plain";
}

function renderInlineContent(content: readonly RichContentInline[], blockIndex: number, itemIndex?: number) {
  return content.map((inline, inlineIndex) => {
    const key = [blockIndex, itemIndex, inlineIndex].filter((value) => value !== undefined).join("-");

    if (typeof inline === "string") {
      return <span key={key}>{inline}</span>;
    }

    if (inline.type === "lineBreak") {
      return <br key={key} />;
    }

    if (inline.type === "strong") {
      return <strong key={key}>{inline.text}</strong>;
    }

    return <a href={inline.href} key={key}>{inline.label}</a>;
  });
}

export function RichContent({ blocks, variant = "default" }: RichContentProps) {
  return (
    <div className={`${styles.root} ${variant === "plain" ? styles.plain : ""}`}>
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