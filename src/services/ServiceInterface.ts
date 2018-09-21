export interface ServiceInteface {
  get(): Promise<Object>;
  post(): Promise<Object>;
  put(): Promise<Object>;
  delete(): Promise<Object>;
}
