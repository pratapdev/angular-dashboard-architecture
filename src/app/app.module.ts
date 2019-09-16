import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './shared/services/loader.interceptor';
import { LoaderService } from './shared/services/loader.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { UserIdleModule } from 'angular-user-idle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeoutModalComponent } from './shared/components/timeout-modal/timeout-modal.component';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        UserIdleModule.forRoot({idle: 5, timeout: 5, ping: 120}),
        NgbModule,
    ],
    declarations: [AppComponent, LoaderComponent,TimeoutModalComponent],
    entryComponents:[TimeoutModalComponent],
    providers: [
     {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true
    } ,
    LoaderService,
    AuthGuard
    ]   ,
    bootstrap: [AppComponent],
    exports: [LoaderComponent]
})
export class AppModule {}
