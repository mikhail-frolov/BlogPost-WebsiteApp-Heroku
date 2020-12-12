import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit, OnDestroy {
  
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