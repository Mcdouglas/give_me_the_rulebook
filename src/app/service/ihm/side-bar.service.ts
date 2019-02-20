import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  constructor() {}

  show: Subject<boolean> = new Subject<boolean>();
}
