export class Constants{
    public static SERVER_URL: string = "http://localhost:8080/";
    public static USERS_RESOURCE: string = Constants.SERVER_URL + "users/";
    
    

    public static FIND_ALL_USERS: string = Constants.USERS_RESOURCE + 'all';
    public static FIND_BY_ID: string = Constants.USERS_RESOURCE ; //id

    public static INTERNAL_SERVER_ERROR_MESSAGE = "Error in comunicating with server."
    public static MANDATORY_FIELDS_ERROR_MESSAGE = "Fields are required"
    public static NOT_A_NUMBER_ERROR_MESSAGE = "Not a number"
    public static USER_NOT_FOUND_ERROR_MESSAGE = "User not found"
}