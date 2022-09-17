import { AsyncAPIDocument } from '@asyncapi/parser'

export interface AvroParserConstructor{
  parseEnum: boolean
}
export class AvroParser {
  #parseEnum = false
  constructor({ parseEnum }: AvroParserConstructor) {
    this.#parseEnum = parseEnum
  }

  parse(asyncSchema: AsyncAPIDocument) {}
}
