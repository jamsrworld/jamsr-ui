import { memo } from "react";

export type EditorInfoProps = {
  characters: number;
  words: number;
};

export const EditorInfo = memo(({ characters, words }: EditorInfoProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-4 flex flex-col justify-center pr-4 text-right ">
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
          {words} {words === 1 ? "word" : "words"}
        </div>
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
          {characters} {characters === 1 ? "character" : "characters"}
        </div>
      </div>
    </div>
  );
});

EditorInfo.displayName = "EditorInfo";
