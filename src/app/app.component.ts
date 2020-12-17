import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loulou-resume-front-end';

  baseInfos:Array<any>;// 建議不要使用 any，改用 interface 比較好

  constructor(private http: HttpClient){}

  ngOnInit():void{
    const url = "http://127.0.0.1:8000/api/personalData/baseInfo";
    this.http.get<any>(url).subscribe(baseInfos=> {
      this.baseInfos = baseInfos;
      console.log(baseInfos); // 印出取得 json 內容
    });    
  }
}
