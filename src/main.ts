import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppHeaderComponent } from './app/app-header/app-header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
