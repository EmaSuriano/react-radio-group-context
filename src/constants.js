export const LABEL_POSITION = {
  BEFORE: 'before',
  AFTER: 'after',
};

const noop = () => false;

export const DEFAULT_SHARED_PROPS = {
  labelPosition: LABEL_POSITION.AFTER,
  disabled: false,
  className: '',
  onChange: noop,
  selected: undefined,
};
