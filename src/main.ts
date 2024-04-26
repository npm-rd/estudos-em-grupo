import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/presenter/app.config';
import { AppComponent } from './app/presenter/pages/app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
