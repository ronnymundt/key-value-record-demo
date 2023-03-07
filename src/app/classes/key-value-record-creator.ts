import {IKeyValueRecords, TKeyValueRecord} from "../models/key-value-record-models";

/**
 * Funktion erzeugt eine typisierte Key-Value Gruppe als Objekt.
 * @param config
 */
export function createKeyValueRecordGroup<Events extends Record<string, number>>(config: IKeyValueRecords<Events>)
  : TKeyValueRecord<Events> {
  return config.records;
}
