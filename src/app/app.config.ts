import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { rootReducer } from './store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { LucideAngularModule, icons } from 'lucide-angular';
import { provideEffects } from '@ngrx/effects';
import { EcommerceEffects } from './store/Ecommerce/ecommerce-effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { UserEffects } from './store/User/user-effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth
import { initFirebaseBackend } from './authUtils';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment.prod';
import { AuthenticationEffects } from './store/Authentication/authentication.effects';
import { provideToastr } from 'ngx-toastr';
import { FakeBackendInterceptor } from './Authentication/helpers/fake-backend';
import { ErrorInterceptor } from './Authentication/helpers/error.interceptor';
import { JwtInterceptor } from './Authentication/helpers/jwt.interceptor';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

if (environment.defaultauth === 'firebase') {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  FakeBackendInterceptor;
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const companyName: string = 'ERP';

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    provideClientHydration(),
    provideStore(rootReducer),
    provideEffects(EcommerceEffects, UserEffects, AuthenticationEffects),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    provideStoreDevtools(),
    provideEnvironmentNgxMask(),
    provideHttpClient(withFetch()),
    TranslateService,
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      HttpClientModule,
      BrowserAnimationsModule,
      LucideAngularModule.pick(icons),
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
