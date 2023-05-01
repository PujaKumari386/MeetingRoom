import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/core/service/package.service';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrls: ['./packges.component.css']
})
export class PackgesComponent implements OnInit{

  packagesArray: any [] = [];
  packageObj = {
      "packageId": 0,
      "packageName": "",
      "packageCost": "",
      "packageDescription": "",
      "isPackageActive": false
    }
  

  constructor(private packageSrv: PackageService) {

  }

  ngOnInit(): void {
    debugger;
    this.loadPackages();
  }
  loadPackages(){
    debugger;
    this.packageSrv.getAllPackages().subscribe((Response: any)=> {
      debugger;
      this.packagesArray = Response.data;
    })
  }

}