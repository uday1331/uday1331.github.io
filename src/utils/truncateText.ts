interface TruncateTextInput {
  text: string;
  maxLength: number;
}

export const truncateText = ({ text, maxLength }: TruncateTextInput): string =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
