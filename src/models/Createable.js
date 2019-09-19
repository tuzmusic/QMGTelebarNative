// @flow

export default class Createable {
  static create<T>(obj: Object): T {
    return obj ? Object.assign(new this(), { ...obj }) : new this();
  }
}
