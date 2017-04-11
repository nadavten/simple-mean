import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private postService:PostService) { }

  ngOnInit() {

    this.postService.addPost().subscribe(res=>{

      this.postService.getAllPosts()
                    .subscribe(posts=> this.posts = posts);

    });
    
  }

}
