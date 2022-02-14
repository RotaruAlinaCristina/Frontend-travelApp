export interface IToken{
    id: any;
    confirmed_at : Date;
    created_at: Date;
    expires_at: Date;
    is_valid: boolean; 
    token: string; 
    app_user_id: string;
}

