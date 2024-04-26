import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/presenter/pages/app/app.component';
import { appConfig } from './app/presenter/pages/app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
