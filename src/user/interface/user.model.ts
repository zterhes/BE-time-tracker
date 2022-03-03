export interface UserData {
  id: string;
  name: string;
  img: string;
}

export interface NewUserDataDTO {
  name: string,
  img: string
}

export interface UpdateUserDTO {
  id: string
  updatedFields: {
    name?: string
    img?: string
  }
}