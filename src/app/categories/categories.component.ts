import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Array<any>;
  querySub: any;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.querySub = this.data.getCategories().subscribe(data=>{ this.categories = data; });
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
