import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  /**
  * Guarda un producto en localstorage 
  **/
  public saveData(key: string, value: string) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
  * Retorna un solo producto 
  **/
  public getData(key: string) {
    return sessionStorage.getItem(key)
  }

  /**
  * Elimina un item del localstorage 
  **/
  public removeData(key: string) {
    sessionStorage.removeItem(key);
  }

  /**
  * Devuelve la cantidad de productos seleccionados 
  **/
  shoppingCart() {
    return sessionStorage.length
  }

  /**
  * Borra todos los productos seleccionados 
  **/
  public clearData() {
    sessionStorage.clear();
  }

  /**
  * Retorna todos los datos guardados en localstorage 
  **/
  public getAll() {
    return sessionStorage;
  }
}
