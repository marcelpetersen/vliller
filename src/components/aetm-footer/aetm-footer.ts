import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
    selector: 'aetm-footer',
    templateUrl: 'aetm-footer.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AetmFooter {

    public openLink(link) {
        new InAppBrowser().create(link, '_system');
    }
}