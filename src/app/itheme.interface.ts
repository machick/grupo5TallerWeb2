export interface IThemeProperties {
    primaryColor: string;
    textColor: string;
    
}

export interface ITheme {
    default: IThemeProperties;
    dark?: IThemeProperties;    
}