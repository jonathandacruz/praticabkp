export class ResponseModel<T = null> {
  constructor(
      public success: boolean,
      public message: string = '',
      public data: T,
      public errors: any
  ) { }
}
