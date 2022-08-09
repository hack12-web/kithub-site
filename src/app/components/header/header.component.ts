import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | any;

  openDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

}
