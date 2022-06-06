import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.sass']
})
export class PostCreateComponent implements OnInit {
  id = 0;
  post: Post = {
    userId: 1,
    title: "",
    body: ""
  };
  submitted = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    console.log(this.router);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.id = s["id"];
      this.postService.get(s["id"])
        .subscribe(
          data => {
            this.post = data;
          },
          error => {
            console.log(error);
          });
    });
  }

  savePost(): void {
    if (this.id === 0) {
      this.createPost();
    } else {
      this.updatePost(this.id);
    }
  }

  createPost(): void {
    const data = {
      userId: 1,
      title: this.post.title,
      body: this.post.body
    };

    this.postService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  updatePost(id: any): void {
    const data = {
      userId: 1,
      title: this.post.title,
      body: this.post.body
    };

    this.postService.update(id, data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      userId: 1,
      title: "",
      body: ""
    };
  }

}
