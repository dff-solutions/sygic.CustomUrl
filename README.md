# sygic-custom-url

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
