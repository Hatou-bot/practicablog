import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]

  constructor() { 
    this.posts = [
      new Post('Listicle de cabras monas', 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo trigo por no llamarte', 'Lucy Fernandez', 'https://pbs.twimg.com/media/Cf-oYcnW8AA8Yi9?format=jpg&name=900x900', 'Naturaleza', '66/66/66'),
      new Post('No te podrás creer el secreto de este postre', 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito', 'Ana L. Cage', 'https://i.pinimg.com/236x/32/88/94/328894f9fc02b23f75ad68c7a75a0ca7--molten-chocolate-cakes-molten-lava-cakes.jpg', 'Cocina', '20/04/28'),
      new Post('Final de Rupauls Drag Race prevista para el finde que viene', 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo', 'Yekaterina Petrovna Zamolodchikova', 'https://pbs.twimg.com/media/ESco7gfXYAAez5X.jpg', '#TeamJaida', '30/05/20' ),
    ]
  }

  addPost({titulo, texto, autor, imagen, fecha, categoria}): Promise<Post[]>{
    return new Promise((resolve, reject) => {
      const newPost = new Post(titulo, texto, autor, imagen, fecha, categoria)
      this.posts.push(newPost)
      resolve(this.posts)
    })
  }
  getAllPosts(): Promise<Post[]>{
    return new Promise((resolve, reject) => {
      resolve(this.posts)
    })
  }
  getPostsByCategory(categoria): Promise<Post[]>{
    return new Promise((resolve, reject) =>{
      const filteredPosts = this.posts.filter(post => post.categoria == categoria)
      resolve(filteredPosts)
    })
  }
}
