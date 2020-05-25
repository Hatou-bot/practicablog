import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[]
  postService: PostService
  router: Router
  filtro: FormGroup

  constructor(postService: PostService, router: Router) { 
    this.postService = postService
    this.router = router
    this.filtro = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.postService.getAllPosts().then(posts => {
      this.posts = posts
    })
  }

  onClick(){
    this.router.navigateByUrl('/form')
  }

  onFiltrarTitulo(){
    console.log(this.filtro.value.titulo)
    let filtroTitulo = this.filtro.value.titulo.toLowerCase()

    this.postService.getAllPosts().then(posts => {
      this.posts = posts.filter(post => {
        return post.titulo.toLowerCase().includes(filtroTitulo)
      })
    })
  }
  onFiltrarAutor(){
    console.log(this.filtro.value.autor)
    let filtroAutor = this.filtro.value.autor.toLowerCase()

    this.postService.getAllPosts().then(posts => {
      this.posts = posts.filter(post => {
        return post.autor.toLowerCase().includes(filtroAutor)
      })
    })
  }

}
