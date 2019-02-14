import {Subject} from "rxjs";

export class SideBarService {
  show: Subject<boolean> = new Subject<boolean>();
}
