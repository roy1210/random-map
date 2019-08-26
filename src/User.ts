// `faker` doesn't included TS definitions
// install definitelyTyped file to use package in TS
import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: { lat: number; lng: number };
  // just input data for test
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User Name:${this.name}`;
  }
}
