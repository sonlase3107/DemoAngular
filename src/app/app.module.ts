import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RoundPipe } from './rount.pipe';
import {HttpClientModule} from '@angular/common/http'
//! Config cho router
const routerConfig: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'detail', component: DetailComponent },
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './binding/word.component';
import { BookComponent } from './book/book.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructComponent } from './struct/struct.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';
import { DirectTestDirective } from './direct-test.directive';
import { DemoComponent } from './demo/demo.component';
import { HighlightDirective } from './highlight.directive';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { HTTPServiceComponent } from './httpservice/httpservice.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    TemplateVariableComponent,
    DirectiveComponent,
    StructComponent,
    PersonComponent,
    ListPersonComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    DirectTestDirective,
    DemoComponent,
    HighlightDirective,
    ContactComponent,
    DetailComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    RoundPipe,
    HTTPServiceComponent,
    HelloComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,RouterModule.forRoot(routerConfig),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
