import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const DummyActionActions = createActionGroup({
  source: 'DummyAction',
  events: {
    'Y DummyActions': emptyProps(),
  }
});
