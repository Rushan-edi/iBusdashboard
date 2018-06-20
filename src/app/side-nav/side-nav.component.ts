import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild('snav') public toggle: any;
  ngOnInit() {
    this.toggle.toggle();
  }

  signOut() {
    this.router.navigate(['/SignIn']);
  }


  sideMenu = [{
    icon: "person",
    item: "Users",
    routerLink: "./Users"
  },

  {
    icon: "departure_board",
    item: "Busses",
    routerLink: "./AddBusses"
  },
  {
    icon: "departure_board",
    item: "Bus List",
    routerLink: "./BusList"
  },
  {
    icon: "near_me",
    item: "Bus Location",
    routerLink: "./BusLocation"
  },
  {
    icon: "donut_large",
    item: "Routes",
    routerLink: "./Routes"
  },
  {
    icon: "donut_large",
    item: "Mark Routes",
    routerLink: "./MarkRoute"
  },
  {
    icon: "assignment",
    item: "Bus Schedules",
    routerLink: "./Schedules"
  },
  {
    icon: "insert_chart",
    item: "Report",
    routerLink: "./Profile"
  },
  {
    icon: "settings",
    item: "Settings",
    routerLink: "./Settings"
  }
  ]

}
