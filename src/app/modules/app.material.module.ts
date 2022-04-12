import { NgModule } from "@angular/core";
import{MatButtonModule} from "@angular/material/button";
import{MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule ({
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule
    ]
})

export class AppMaterialModule{

}