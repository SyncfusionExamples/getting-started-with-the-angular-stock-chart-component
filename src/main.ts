import { bootstrapApplication } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppComponent } from './app/app.component';

registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcEBDWXxLflF1VWpTe1Z6dVNWESFaRnZdQV1lSH9SdkRjWn1YdnVQ")
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
