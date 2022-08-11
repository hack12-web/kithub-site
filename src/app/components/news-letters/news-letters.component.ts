import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-news-letters',
  templateUrl: './news-letters.component.html',
  styleUrls: ['./news-letters.component.scss']
})
export class NewsLettersComponent implements OnInit {

  public newsLetterForm: FormGroup | any;

  constructor(private formBuilder : FormBuilder, private service: SharedServiceService) { }

  public sendNewsLetters(val:any):void{
    this.service.sendNewsLetters(val);
    this.newsLetterForm.reset();
  }
  ngOnInit(): void {
    this.newsLetterForm = this.formBuilder.group({
      email : ['', Validators.required]
    });
  }
}
