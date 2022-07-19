import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  // @ts-ignore
  post: Post;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  postForm: FormGroup = this.fb.group({
    content: new FormControl('', [Validators.required]),
    createAt: new FormControl('', [Validators.required]),
    title: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      // @ts-ignore
      this.postService.getById(id).subscribe(result => {
        this.post = result;
        console.log(result)
      }, error => {
        console.log(error);
      })
    })
    this.post = {
      content: '',
      createAt: '',
      title: '',
      image: ''
    }
  }

  updatePost() {
    const post = this.postForm.value;
    console.log(post);
    // @ts-ignore
    this.postService.updatePost(this.post.id, post).subscribe(() => {
      alert("Thành công!")
    })
  }

  delete() {
    alert("Hello");
    // @ts-ignore
    this.postService.deletePost(this.post.id).subscribe(() => {
      alert("Xoá thành công!");
    })
  }


}
