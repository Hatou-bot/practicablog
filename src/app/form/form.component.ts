import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup
  postService: PostService
  router: Router
  

  constructor(postService: PostService, router: Router) { 
    this.postService = postService
    this.router = router
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.addPost(this.formulario.value).then(() => {
      this.router.navigateByUrl('/blog')
    })
  }

}
