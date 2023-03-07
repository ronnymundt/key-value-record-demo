export interface IKeyValueRecords<Records extends Record<string, number>> {
  records: {
    [RecordName in keyof Records]: Records[RecordName];
  };
}

export type TKeyValueRecord<Records extends Record<string, number>> = {
  [RecordName in keyof Records]: number;
};
