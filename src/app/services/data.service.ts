import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // -> global
})
export class DataService {
  private _textFromHello: string | undefined;

  getTextFromHello(): string | undefined {
    return this._textFromHello;
  }

  setTextFromHello(text: string) {
    this._textFromHello = text;
  }

  private _textFromHelloSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  textFromHello$: Observable<string> = this._textFromHelloSubject.asObservable() //!-> Sử dụng dấu $ để đánh dấu 1 biến obseverable

  setTextFromHelloObserverable(text:string){
    this._textFromHelloSubject.next(text) //? -> Sử dụng observerable để đẩy 1 giá trị ra. Và textfromHello$ sẽ nhận được giá trị
  }
}
