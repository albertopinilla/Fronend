import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public saveData(key: string, value: string) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    return sessionStorage.getItem(key)
  }
  public removeData(key: string) {
    sessionStorage.removeItem(key);
  }

  shoppingCart()
  {
    return sessionStorage.length
  }

  public clearData() {
    sessionStorage.clear();
  }

  public getAll()
  {
    return sessionStorage;
  }
}
