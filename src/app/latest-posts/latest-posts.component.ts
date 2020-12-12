import { Component, OnInit, OnDestroy} from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit, OnDestroy {
  
  posts: Array<BlogPost>;
  querySub: any;
  
  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.querySub = this.data.getPosts(1, null, null).subscribe(dataa=>{ this.posts = dataa.slice(0,3); });
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }
}
