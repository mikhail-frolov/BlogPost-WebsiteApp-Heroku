import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';

//maximum number
const perPage = 6;

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  //return all of the posts available in the blogAPI for a specific page
  getPosts(page, tag, category): Observable<BlogPost[]> {


    let url = `https://api-data-assignment.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;

    if (tag != null || tag != undefined) {
      url += `&tag=${tag}`;
    }

    if (category != null || category != undefined) {
      url += `&category=${category}`;
    }

    return this.http.get<BlogPost[]>(url);
  }


/*******************************
 * 
 * ASSIGNMENT 6 Functionality
 ******************************/ 
//Fetches all blog posts using the path of the website
  getAllPosts():Observable<BlogPost[]> {

    let url = `https://api-data-assignment.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`;

    return this.http.get<BlogPost[]>(url);
  }

  // new post
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://api-data-assignment.herokuapp.com/api/posts`, data);
  }

  //This function must invoke the "put" method on the injected "http" service with the data parameter as the body of the request
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://api-data-assignment.herokuapp.com/api/posts/${id}`, data);
  }

  //This function must invoke the "delete" method on the injected "http" service with the data parameter as the body of the request
  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://api-data-assignment.herokuapp.com/api/posts/${id}`);
  }

/*******************************
 * END
 * ASSIGNMENT 6 Functionality
 ******************************/ 

  //This method will use HttpClient to return a single post available in the blogAPI
  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://api-data-assignment.herokuapp.com/api/posts/${id}`);
  }

  // return an array of "Categories"
  getCategories(): Observable<any> {
  return this.http.get<any>(`https://api-data-assignment.herokuapp.com/api/categories`);
  }

  //return an array of "Tags" (represented as strings)
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://api-data-assignment.herokuapp.com/api/tags`);
    }
}


