const baseUrl = "http://localhost:3678";

const request = async (data: {
    path: string;
    method: "GET" | "POST" | "PATCH" | "DELETE";
    data?: any;
    token?: string;
}) => {
  const response = await fetch(`${baseUrl}/${data.path}`, {
    method: data.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": data.token ? `Bearer ${data.token}` : "undefined",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return await response.json();
};

//Request types
const get = (path: string, token?: string) => request({
    path,
    method: "GET",
    token,
  });

const post = (path: string, data: any, token?: string) => request({
    path,
    method: "POST",
    data,
    token,
  });

const patch = (path: string, data: any, token?:string) => request({
    path,
    method: "PATCH",
    data,
    token,
  });

const del = (path: string, token: string) => request({
    path,
    method: "DELETE",
    token,
  });

  export interface User {
    id: number
    username: string
    password: string
    role: string
    createdAt: string
    updatedAt: string
  }

  export interface Produit {
    id: number
    name: string
    price: number
    quantity: number
    createdAt: string
    updatedAt: string
    creatorId: number
    userId: number
  }
  
  

export const UsersAllUsers = (token: string): Promise<User[]>=>
          get("localhost:3678/users", token)

export const UsersGetUser = (id:string, token: string): Promise<User> =>
          get("localhost:3678/users/"+id, token)

//Request types 
type UsersUpdateUserRequestBody = {username: string; } 

export const UsersUpdateUser = (id: string, data:UsersUpdateUserRequestBody, token: string): Promise<User> =>
          patch("localhost:3678/users/"+id, data, token)

//Request types 
type UsersAddUserRequestBody = {username: string; password: string; } 

export const UsersAddUser = (data:UsersAddUserRequestBody): Promise<User>=>
          post("localhost:3678/users" , data)

export const UsersDeleteUser = (id: string, token: string): Promise<User>=>
          del("localhost:3678/users/" + id, token)

export const ProductsAllProduct = (): Promise<Produit[]> =>
          get("localhost:3678/products" )

export const ProductsGetProduct = (id:string): Promise<Produit> =>
          get("localhost:3678/products/"+id )

//Request types 
type ProductsUpdateProductRequestBody = {name: string; quantity: number; price: number; } 

export const ProductsUpdateProduct = (id: string, data:ProductsUpdateProductRequestBody, token: string): Promise<Produit>=>
          patch("localhost:3678/products/"+id , data, token)

//Request types 
type ProductsAddProductRequestBody = {name: string; quantity: number; price: number; } 

export const ProductsAddProduct = (data:ProductsAddProductRequestBody, token: string): Promise<Produit>=>
          post("localhost:3678/products" , data, token)

export const ProductsDeleteProduct = (id: string, token: string): Promise<Produit>=>
          del("localhost:3678/products/" + id ,token)

//Request types 
type LoginRequestBody = {grant_type: string; password: string; username: string; } 
export interface LoginResponseBody {
    access_token: string
  }
  

  export interface UnauthorizedResponseBody {
    message: string
    statusCode: number
  }
  
export const Login = (data:LoginRequestBody): Promise<LoginResponseBody | UnauthorizedResponseBody> =>
          post("localhost:3678/login" , data)