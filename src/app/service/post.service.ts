import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  async getFilterPosts(param:boolean): Promise<Post[]> {
    return await fetch("assets/db.json").then((response)=> response.json()).then((data) => {return data.filter((element:Post) => element.active === param)});
  }
}
