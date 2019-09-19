// @flow

export default class Createable {
  static create<T>(obj: Object): T {
    return Object.assign(new this(), { ...obj });
  }
}
