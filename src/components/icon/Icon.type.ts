export type IconValueType =
  | 'Search'
  | 'Close'
  | 'ChevronDown'
  | 'Check';

export type IconType = {
  className?: string;
  type: IconValueType;
};
