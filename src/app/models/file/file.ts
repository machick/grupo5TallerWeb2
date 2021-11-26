export class File {
    public static fromJson(data: any) {
      return new this(
        data._id,
        data.name,
        data.type,
        data.path,
        data.size
      );
    }
  
    constructor(
      public _id?: string,
      public name?: string,
      public type?: string,
      public path?: string,
      public size?: string,
    ) {}
  
  }
  