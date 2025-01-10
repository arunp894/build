export interface LoginModel {
    email : string,
    password : string
}
export interface AuthStateModel {
    message: string
    refresh: string
    access: string,
    loading : boolean,
    error : string | null
    user:  {
        id: number
        email: string
        first_name: string
        last_name: string
        date_joined: string
        department: number
        phone_number: string
        role: number
        created_at: string
        is_staff: boolean
        picture: string
        is_active: boolean
        permissions: any[]
    } | null
}