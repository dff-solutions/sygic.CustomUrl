# sygic-custom-url

## Descriptions

Generates custom URLs for sygic app URL Scheme `com.sygic.aura`.
Abstracts
[**Android**](https://www.sygic.com/developers/professional-navigation-sdk/android/api-examples/custom-url) and
[**iOS**](https://www.sygic.com/developers/professional-navigation-sdk/ios/custom-url)
schemes.

See Sygic documentation for more details [Sygic Professional Navigation](https://www.sygic.com/developers/professional-navigation-sdk).

## Install
`npm i --save sygic-custom-url`

## Usage

```ts
import { CustomUrlService } from "sygic-custom-url";

export class SomeComponent {
    private customUrlService: CustomUrlService;

    constructor() {
        this.customUrlService = new CustomUrlService();
    }

    ...
}
```

## Documentation

[Please see pages](https://frankkoenigstein.github.io/sygic-custom-url/)

## Contributing
### Test
`npm test`

### Build
`npm run build`

### Documentation
`npm run compodoc`
