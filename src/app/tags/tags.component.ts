import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnDestroy {
  tags: Array<string>;
  querySub: any;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.querySub = this.data.getTags().subscribe(data=>{ this.tags = data; });
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }
}
