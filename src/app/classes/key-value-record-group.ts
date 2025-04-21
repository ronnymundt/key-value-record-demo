import { createKeyValueRecordGroup } from './key-value-record-creator';

export const recordGroup = createKeyValueRecordGroup({
  records: {
    record_A: 1,
    'record_B': 2,
    myRecord: 3,
  },
});
